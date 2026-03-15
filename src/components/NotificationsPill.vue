<template>
  <button
    v-if="notifications.length"
    class="pill"
    @click="showModal = true"
  >
    <span class="pill-dot" />
    <span class="pill-label">{{ notifications.length }}</span>
  </button>

  <Teleport to="body">
    <div v-if="showModal" class="ha-modal-overlay" @click.self="showModal = false">
      <div class="ha-modal-box" @click.stop>
        <div class="ha-modal-header-row">
          <h3 class="ha-modal-title">Benachrichtigungen</h3>
          <button class="ha-modal-close" @click="showModal = false">✕</button>
        </div>
        <div v-if="!notifications.length" class="ha-modal-empty">
          Keine Benachrichtigungen
        </div>
        <ul v-else class="ha-modal-entity-list">
          <li
            v-for="n in notifications"
            :key="n.notification_id"
            class="notif-item"
          >
            <div class="notif-header">
              <span class="notif-title">{{ n.title || n.message }}</span>
              <span class="notif-time">{{ formatTimeAgo(n.created_at) }}</span>
            </div>
            <p v-if="n.title && n.message" class="notif-message">{{ n.message }}</p>
            <button class="notif-dismiss" @click="dismiss(n.notification_id)">Löschen</button>
          </li>
        </ul>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { callServiceWs, getHaWsUrl, getHaApiPath } from '../composables/useHomeAssistant'

const props = defineProps<{ token: string }>()

interface PersistentNotification {
  notification_id: string
  title: string | null
  message: string
  created_at: string
}

const notifications = ref<PersistentNotification[]>([])
const showModal = ref(false)
let pollTimer: ReturnType<typeof setInterval> | null = null

async function fetchNotifications() {
  try {
    // Use dedicated WS command: persistent_notification/get
    const ws = new WebSocket(getHaWsUrl())
    const result = await new Promise<PersistentNotification[]>((resolve, reject) => {
      let msgId = 1
      ws.onmessage = (ev) => {
        const msg = JSON.parse(ev.data)
        if (msg.type === 'auth_required') {
          ws.send(JSON.stringify({ type: 'auth', access_token: props.token }))
          return
        }
        if (msg.type === 'auth_ok') {
          const id = msgId++
          ws.send(JSON.stringify({ id, type: 'persistent_notification/get' }))
          return
        }
        if (msg.type === 'result') {
          ws.close()
          if (msg.success && Array.isArray(msg.result)) {
            resolve(msg.result)
          } else {
            resolve([])
          }
        }
      }
      ws.onerror = () => { ws.close(); resolve([]) }
      setTimeout(() => { ws.close(); resolve([]) }, 5000)
    })
    notifications.value = result.sort((a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
  } catch {
    notifications.value = []
  }
}

async function dismiss(notificationId: string) {
  try {
    await fetch(getHaApiPath('/api/services/persistent_notification/dismiss'), {
      method: 'POST',
      headers: { Authorization: `Bearer ${props.token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ notification_id: notificationId }),
    })
    notifications.value = notifications.value.filter(n => n.notification_id !== notificationId)
    if (notifications.value.length === 0) showModal.value = false
  } catch { /* ignore */ }
}

function formatTimeAgo(dateStr: string): string {
  const d = new Date(dateStr)
  const now = new Date()
  const diffMin = Math.round((now.getTime() - d.getTime()) / 60000)
  if (diffMin < 1) return 'Gerade eben'
  if (diffMin < 60) return `Vor ${diffMin} Min.`
  const diffH = Math.round(diffMin / 60)
  if (diffH < 24) return `Vor ${diffH} Stunde${diffH > 1 ? 'n' : ''}`
  return `Vor ${Math.round(diffH / 24)} Tag${Math.round(diffH / 24) > 1 ? 'en' : ''}`
}

onMounted(() => {
  fetchNotifications()
  pollTimer = setInterval(fetchNotifications, 30000)
})

onUnmounted(() => {
  if (pollTimer) clearInterval(pollTimer)
})
</script>

<style scoped>
.pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  height: 32px;
  border-radius: 20px;
  border: none;
  background: #e8ecf1;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 600;
  color: #2563eb;
  box-shadow: 3px 3px 6px #c8cdd5, -3px -3px 6px #ffffff;
  transition: box-shadow 0.15s, color 0.15s;
}

.pill:hover {
  box-shadow: 2px 2px 4px #c8cdd5, -2px -2px 4px #ffffff;
}

.pill:active {
  box-shadow: inset 2px 2px 4px #c8cdd5, inset -2px -2px 4px #ffffff;
}

.pill-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #c125eb;
  animation: blink 1.5s ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.25; }
}

.pill-label {
  white-space: nowrap;
}

/* Notification items */
.notif-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 14px;
  border-radius: 12px;
  transition: background 0.1s;
}

.notif-item:hover {
  background: rgba(0, 0, 0, 0.03);
}

.notif-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.notif-title {
  font-size: 0.82rem;
  color: #2d3748;
  font-weight: 600;
}

.notif-time {
  font-size: 0.68rem;
  color: #a0aec0;
  font-weight: 500;
  white-space: nowrap;
}

.notif-message {
  font-size: 0.78rem;
  color: #4a5568;
  font-weight: 400;
  line-height: 1.4;
  margin: 0;
}

.notif-dismiss {
  align-self: flex-end;
  background: none;
  border: none;
  color: #2563eb;
  cursor: pointer;
  font-size: 0.72rem;
  font-weight: 500;
  padding: 2px 0;
  transition: color 0.15s;
}

.notif-dismiss:hover {
  color: #e53e3e;
}
</style>
