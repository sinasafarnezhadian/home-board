<template>
  <button
    class="pill"
    :class="{ active: hasOpen }"
    @click="showModal = true"
  >
    <span class="pill-icon">🔒</span>
    <span class="pill-label">{{ hasOpen ? `${openCount} offen` : 'Gesichert' }}</span>
  </button>

  <Teleport to="body">
    <div v-if="showModal" class="ha-modal-overlay" @click.self="showModal = false">
      <div class="ha-modal-box" @click.stop>
        <div class="ha-modal-header-row">
          <h3 class="ha-modal-title">Fenster &amp; Türen</h3>
          <button class="ha-modal-close" @click="showModal = false">✕</button>
        </div>
        <div v-if="!group.entities.value.length" class="ha-modal-empty">
          Keine Sensoren gefunden
        </div>
        <ul v-else class="ha-modal-entity-list">
          <li
            v-for="e in group.entities.value"
            :key="e.entity_id"
            class="ha-modal-entity-row"
          >
            <span class="ha-modal-entity-name">{{ e.attributes.friendly_name ?? e.entity_id }}</span>
            <span class="ha-modal-entity-badge" :class="e.state === 'on' ? 'open' : 'closed'">
              {{ e.state === 'on' ? 'Offen' : 'Zu' }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref, toRef } from 'vue'
import { useEntityGroup } from '../composables/useEntityGroup'

const props = defineProps<{ token: string }>()

const group = useEntityGroup({
  key: 'security',
  autoDetect: (e) =>
    e.entity_id.startsWith('binary_sensor.') &&
    ['door', 'window', 'garage_door', 'opening'].includes(e.attributes.device_class as string),
  token: toRef(() => props.token) as any,
})

const openEntities = computed(() => group.entities.value.filter(e => e.state === 'on'))
const hasOpen = computed(() => openEntities.value.length > 0)
const openCount = computed(() => openEntities.value.length)

const showModal = ref(false)
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
  color: #38a169;
  box-shadow: 3px 3px 6px #c8cdd5, -3px -3px 6px #ffffff;
  transition: box-shadow 0.15s, color 0.15s;
}

.pill.active {
  color: #e53e3e;
  background: #f1e8e8fc;
  box-shadow: 3px 3px 6px #dbd5d5, -3px -3px 6px #fff7f8;
}

.pill:hover {
  box-shadow: 2px 2px 4px #c8cdd5, -2px -2px 4px #ffffff;
}

.pill:active {
  box-shadow: inset 2px 2px 4px #c8cdd5, inset -2px -2px 4px #ffffff;
}

.pill-icon {
  font-size: 0.85rem;
}

.pill-label {
  white-space: nowrap;
}
</style>
