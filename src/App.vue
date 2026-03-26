<template>
  <div>
    <TokenSetup v-if="!token && !panelMode" @token="onToken" />

    <div v-else class="dashboard">
      <header class="dashboard-header">
        <div class="header-left">
          <!--span class="app-name">HomeBoard</span-->
          <SecurityPill :token="effectiveToken" />
          <LightsPill :token="effectiveToken" />
          <ClimatePill :token="effectiveToken" />
          <NotificationsPill :token="effectiveToken" />
        </div>
        <div class="header-right">
          <div class="clock">
            <span class="clock-time">{{ time }}</span>
            <span class="clock-date">{{ date }}</span>
          </div>
        </div>
      </header>

      <main ref="gridRef" class="dashboard-main">
        <template v-for="card in activeCards" :key="card.id">
          <HeadingCard
            v-if="card.type === 'heading'"
            :data-card-id="card.id"
            :style="cardStyle(card)"
            :class="{ 'card-dragging': dragCardId === card.id }"
            :label="card.label || 'Überschrift'"
            :cols="card.cols"
            :rows="card.rows"
            @update-label="(label: string) => onUpdateHeading(card.id, label)"
            @remove="removeCard(card.id)"
            @resize="(cols: number, rows: number) => onResizeCard(card.id, cols, rows)"
            @mousedown="(e: MouseEvent) => onDragStart(e, card.id)"
            @touchstart="(e: TouchEvent) => onDragStart(e, card.id)"
          />
          <SensorCard
            v-else
            :data-card-id="card.id"
            :style="cardStyle(card)"
            :class="{ 'card-dragging': dragCardId === card.id }"
            :entity-id="card.entityId"
            :token="effectiveToken"
            :cols="card.cols"
            :rows="card.rows"
            :state="sensors[card.id]?.state ?? null"
            :loading="sensors[card.id]?.loading ?? true"
            :error="sensors[card.id]?.error ?? null"
            @change-entity="(newId: string) => onChangeEntity(card.id, newId)"
            @remove="removeCard(card.id)"
            @resize="(cols: number, rows: number) => onResizeCard(card.id, cols, rows)"
            @mousedown="(e: MouseEvent) => onDragStart(e, card.id)"
            @touchstart="(e: TouchEvent) => onDragStart(e, card.id)"
          />
        </template>
        <div
          v-if="dragCardId"
          class="drop-placeholder"
          :style="placeholderStyle"
        />
      </main>

      <nav class="page-tabs">
        <div class="page-tabs-inner">
          <button
            v-for="(page, idx) in pages"
            :key="page.id"
            class="page-tab"
            :class="{ active: activePageId === page.id }"
            @click="switchPage(page.id)"
            @dblclick="startRenamePage(page.id)"
            @touchstart.passive="onTabTouchStart(page.id)"
            @touchend="onTabTouchEnd"
            @touchmove="onTabTouchEnd"
          >
            <input
              v-if="renamingPageId === page.id"
              ref="renameInputRef"
              v-model="renameValue"
              class="page-tab-input"
              @blur="finishRenamePage"
              @keydown.enter="finishRenamePage"
              @keydown.escape="cancelRenamePage"
              @click.stop
            />
            <span v-else class="page-tab-label">{{ page.name }}</span>
          </button>
        </div>
      </nav>

      <Teleport to="body">
        <div v-if="deleteConfirmPageId" class="ha-modal-overlay" @click.self="deleteConfirmPageId = null">
          <div class="ha-modal-box page-delete-modal" @click.stop>
            <div class="ha-modal-header-row">
              <h3 class="ha-modal-title">Seite löschen</h3>
              <button class="ha-modal-close" @click="deleteConfirmPageId = null">✕</button>
            </div>
            <p class="page-delete-text">
              „{{ deleteConfirmPageName }}" mit {{ deleteConfirmCardCount }} Karte{{ deleteConfirmCardCount !== 1 ? 'n' : '' }} wirklich löschen?
            </p>
            <div class="page-delete-actions">
              <button class="page-delete-cancel" @click="deleteConfirmPageId = null">Abbrechen</button>
              <button class="page-delete-confirm" @click="doRemovePage">Löschen</button>
            </div>
          </div>
        </div>
      </Teleport>

      <!-- Burger menu -->
      <div class="burger-wrap">
        <button class="burger-btn" @click.stop="burgerOpen = !burgerOpen">
          <span class="burger-line" />
          <span class="burger-line" />
          <span class="burger-line" />
        </button>
        <Transition name="burger-pop">
          <div v-if="burgerOpen" class="burger-menu" @click.stop>
            <button class="burger-item" @click="addCard(); burgerOpen = false">
              <span class="burger-item-icon">+</span> Karte hinzufügen
            </button>
            <button class="burger-item" @click="addHeading(); burgerOpen = false">
              <span class="burger-item-icon">H</span> Überschrift hinzufügen
            </button>
            <button class="burger-item" @click="addPage(); burgerOpen = false">
              <span class="burger-item-icon">+</span> Neue Seite
            </button>
            <button
              v-if="pages.length > 1"
              class="burger-item burger-item-danger"
              @click="confirmRemovePage(activePageId); burgerOpen = false"
            >
              <span class="burger-item-icon">&#x2715;</span> Seite löschen
            </button>
            <div class="burger-divider" />
            <button class="burger-item burger-item-muted" @click="showAuthKeyInput = !showAuthKeyInput">
              <span class="burger-item-icon">🔑</span> Auth Key {{ authKey ? '✓' : '' }}
            </button>
            <div v-if="showAuthKeyInput" class="burger-auth-key" @click.stop>
              <input
                v-model="authKeyInput"
                class="burger-auth-input"
                type="password"
                placeholder="Long-Lived Access Token"
                @keydown.enter="saveAuthKey()"
              />
              <div class="burger-auth-actions">
                <button class="burger-auth-save" @click="saveAuthKey()">Speichern</button>
                <button v-if="authKey" class="burger-auth-clear" @click="authKeyInput = ''; setAuthKey(null)">Löschen</button>
              </div>
            </div>
            <template v-if="!panelMode">
              <div class="burger-divider" />
              <button class="burger-item burger-item-muted" @click="logout(); burgerOpen = false">
                Abmelden
              </button>
            </template>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onUnmounted, onMounted, watch, nextTick } from 'vue'
import TokenSetup from './components/TokenSetup.vue'
import SensorCard from './components/SensorCard.vue'
import HeadingCard from './components/HeadingCard.vue'
import SecurityPill from './components/SecurityPill.vue'
import LightsPill from './components/LightsPill.vue'
import ClimatePill from './components/ClimatePill.vue'
import NotificationsPill from './components/NotificationsPill.vue'
import { useSensor, disconnectWs, isPanelMode, getPanelToken, setPanelMode, getAuthKey, setAuthKey, getEffectiveToken, onUserDataReady, saveHaUserData, scheduleSettingsSync } from './composables/useHomeAssistant'
import type { HaUserData } from './composables/useHomeAssistant'
import type { HaState } from './composables/useHomeAssistant'

const props = withDefaults(defineProps<{
  panelMode?: boolean
}>(), { panelMode: false })

if (props.panelMode) setPanelMode(true)

const localToken = ref<string | null>(localStorage.getItem('ha_token'))
const panelToken = getPanelToken()
const token = computed(() => isPanelMode() ? panelToken.value : localToken.value)

// Auth key for service calls (overrides panel token)
const authKey = getAuthKey()
const effectiveToken = computed(() => getEffectiveToken(token.value ?? undefined))
const authKeyInput = ref(authKey.value ?? '')
const showAuthKeyInput = ref(false)

interface CardData {
  id: string
  type?: 'card' | 'heading'
  entityId: string
  label?: string
  cols: number
  rows: number
  gridCol?: number
  gridRow?: number
}

interface PageData {
  id: string
  name: string
  cards: CardData[]
}

// Reactive flat state per card, driven by useSensor watchers
const sensors = reactive<Record<string, { state: HaState | null; loading: boolean; error: string | null }>>({})

// Internal map of sensor instances (not reactive)
const sensorInstances = new Map<string, ReturnType<typeof useSensor>>()

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6)
}

// ── Pages ──

function loadPages(): PageData[] {
  try {
    const raw = localStorage.getItem('ha_pages')
    if (raw) {
      const parsed = JSON.parse(raw) as PageData[]
      if (Array.isArray(parsed) && parsed.length) {
        return parsed.map(p => ({
          id: p.id,
          name: p.name || 'Seite',
          cards: (p.cards || []).map(c => ({
            id: c.id,
            type: c.type ?? 'card',
            entityId: c.entityId ?? '',
            label: c.label,
            cols: c.cols ?? 2,
            rows: c.rows ?? 2,
            gridCol: c.gridCol,
            gridRow: c.gridRow,
          })),
        }))
      }
    }
  } catch { /* ignore */ }

  // Migrate from old ha_cards format
  try {
    const raw = localStorage.getItem('ha_cards')
    if (raw) {
      const oldCards = (JSON.parse(raw) as any[]).map(c => ({
        id: c.id,
        entityId: c.entityId,
        cols: c.cols ?? (c.size === 'small' ? 1 : 2),
        rows: c.rows ?? (c.size === 'small' ? 1 : 2),
      }))
      return [{ id: generateId(), name: 'Home', cards: oldCards }]
    }
  } catch { /* ignore */ }

  return [{ id: generateId(), name: 'Home', cards: [{ id: generateId(), entityId: 'sensor.wohnzimmer_soll_temperatur', cols: 2, rows: 2 }] }]
}

const pages = ref<PageData[]>([])
const activePageId = ref<string>('')

const activePage = computed(() => pages.value.find(p => p.id === activePageId.value) ?? pages.value[0])
const activeCards = computed(() => activePage.value?.cards ?? [])

function buildUserData(): HaUserData {
  return {
    pages: pages.value,
    authKey: authKey.value ?? null,
    activePage: activePageId.value,
  }
}

function savePages() {
  localStorage.setItem('ha_pages', JSON.stringify(pages.value))
  localStorage.setItem('ha_active_page', activePageId.value)
  saveHaUserData(buildUserData())
}

function switchPage(pageId: string) {
  if (activePageId.value === pageId) return
  // Stop sensors for current page
  for (const card of activeCards.value) destroySensor(card.id)
  activePageId.value = pageId
  localStorage.setItem('ha_active_page', pageId)
  // Start sensors for new page
  for (const card of activeCards.value) { if (card.type !== 'heading') createSensor(card.id, card.entityId) }
}

function addPage() {
  const id = generateId()
  const pageNum = pages.value.length + 1
  pages.value = [...pages.value, { id, name: `Seite ${pageNum}`, cards: [] }]
  savePages()
  switchPage(id)
}

// Delete confirmation
const deleteConfirmPageId = ref<string | null>(null)
const deleteConfirmPageName = computed(() => {
  const page = pages.value.find(p => p.id === deleteConfirmPageId.value)
  return page?.name ?? ''
})
const deleteConfirmCardCount = computed(() => {
  const page = pages.value.find(p => p.id === deleteConfirmPageId.value)
  return page?.cards.length ?? 0
})

function confirmRemovePage(pageId: string) {
  if (pages.value.length <= 1) return
  deleteConfirmPageId.value = pageId
}

function doRemovePage() {
  const pageId = deleteConfirmPageId.value
  deleteConfirmPageId.value = null
  if (!pageId || pages.value.length <= 1) return
  const page = pages.value.find(p => p.id === pageId)
  if (page) {
    for (const card of page.cards) destroySensor(card.id)
  }
  pages.value = pages.value.filter(p => p.id !== pageId)
  if (activePageId.value === pageId) {
    activePageId.value = pages.value[0].id
    localStorage.setItem('ha_active_page', activePageId.value)
    for (const card of activeCards.value) { if (card.type !== 'heading') createSensor(card.id, card.entityId) }
  }
  savePages()
}

// Long-press for touch rename
let longPressTimer: ReturnType<typeof setTimeout> | null = null

function onTabTouchStart(pageId: string) {
  longPressTimer = setTimeout(() => {
    longPressTimer = null
    startRenamePage(pageId)
  }, 600)
}

function onTabTouchEnd() {
  if (longPressTimer) {
    clearTimeout(longPressTimer)
    longPressTimer = null
  }
}

// Page renaming
const renamingPageId = ref<string | null>(null)
const renameValue = ref('')
const renameInputRef = ref<HTMLInputElement[] | null>(null)

function startRenamePage(pageId: string) {
  const page = pages.value.find(p => p.id === pageId)
  if (!page) return
  renamingPageId.value = pageId
  renameValue.value = page.name
  nextTick(() => {
    if (renameInputRef.value && renameInputRef.value.length) {
      renameInputRef.value[0].focus()
      renameInputRef.value[0].select()
    }
  })
}

function finishRenamePage() {
  if (!renamingPageId.value) return
  const page = pages.value.find(p => p.id === renamingPageId.value)
  if (page && renameValue.value.trim()) {
    page.name = renameValue.value.trim()
    pages.value = [...pages.value]
    savePages()
  }
  renamingPageId.value = null
}

function cancelRenamePage() {
  renamingPageId.value = null
}

// ── Sensors ──

function createSensor(cardId: string, entityId: string) {
  if (sensorInstances.has(cardId)) return // already running
  const sensor = useSensor(entityId)
  sensorInstances.set(cardId, sensor)
  sensors[cardId] = { state: null, loading: true, error: null }

  watch(sensor.state, (s) => { if (sensors[cardId]) sensors[cardId].state = s })
  watch(sensor.loading, (l) => { if (sensors[cardId]) sensors[cardId].loading = l })
  watch(sensor.error, (e) => { if (sensors[cardId]) sensors[cardId].error = e })

  if (token.value) sensor.start(token.value)
}

function destroySensor(cardId: string) {
  const sensor = sensorInstances.get(cardId)
  if (sensor) { sensor.stop(); sensorInstances.delete(cardId) }
  delete sensors[cardId]
}

// Init
const savedPages = loadPages()
pages.value = savedPages
const savedActiveId = localStorage.getItem('ha_active_page')
activePageId.value = savedPages.find(p => p.id === savedActiveId)?.id ?? savedPages[0].id
for (const c of activeCards.value) { if (c.type !== 'heading') createSensor(c.id, c.entityId) }

// In panel mode, start sensors when token first arrives
watch(token, (newToken, oldToken) => {
  if (newToken && !oldToken) {
    for (const [, sensor] of sensorInstances) sensor.start(newToken)
  }
})

// When WS connects and HA user data loads, sync pages + settings from server
onUserDataReady((data) => {
  if (!data?.pages?.length) return
  // Stop sensors for current cards
  for (const card of activeCards.value) destroySensor(card.id)
  // Replace pages with server data
  pages.value = data.pages.map((p: any) => ({
    id: p.id,
    name: p.name || 'Seite',
    cards: (p.cards || []).map((c: any) => ({
      id: c.id,
      type: c.type ?? 'card',
      entityId: c.entityId ?? '',
      label: c.label,
      cols: c.cols ?? 2,
      rows: c.rows ?? 2,
      gridCol: c.gridCol,
      gridRow: c.gridRow,
    })),
  }))
  // Restore active page
  const savedId = data.activePage ?? localStorage.getItem('ha_active_page')
  activePageId.value = pages.value.find(p => p.id === savedId)?.id ?? pages.value[0].id
  // Persist synced data to localStorage as backup
  localStorage.setItem('ha_pages', JSON.stringify(pages.value))
  localStorage.setItem('ha_active_page', activePageId.value)
  // Restart sensors for new page
  for (const card of activeCards.value) {
    if (card.type !== 'heading') createSensor(card.id, card.entityId)
  }
  // Sync auth key if set server-side
  if (data.authKey) {
    authKeyInput.value = data.authKey
  }
  // Restore group configs (pills) from HA
  if (data.groups) {
    for (const [key, cfg] of Object.entries(data.groups)) {
      localStorage.setItem(`ha_group_${key}`, JSON.stringify(cfg))
    }
  }
  // Restore card settings (titles) from HA
  if (data.cardSettings) {
    for (const [entityId, settings] of Object.entries(data.cardSettings)) {
      if (settings.title !== undefined) localStorage.setItem(`ha_title_${entityId}`, settings.title)
      if (settings.showTitle !== undefined) localStorage.setItem(`ha_showtitle_${entityId}`, String(settings.showTitle))
    }
  }
})

function addCard() {
  const id = generateId()
  const entityId = 'sensor.wohnzimmer_soll_temperatur'
  const page = activePage.value
  if (!page) return
  page.cards = [...page.cards, { id, type: 'card', entityId, cols: 2, rows: 2 }]
  pages.value = [...pages.value]
  createSensor(id, entityId)
  savePages()
}

function addHeading() {
  const id = generateId()
  const page = activePage.value
  if (!page) return
  page.cards = [...page.cards, { id, type: 'heading', entityId: '', label: 'Überschrift', cols: 4, rows: 1 }]
  pages.value = [...pages.value]
  savePages()
}

function onUpdateHeading(cardId: string, label: string) {
  const page = activePage.value
  if (!page) return
  const card = page.cards.find(c => c.id === cardId)
  if (!card) return
  card.label = label
  pages.value = [...pages.value]
  savePages()
}

function removeCard(id: string) {
  destroySensor(id)
  const page = activePage.value
  if (!page) return
  page.cards = page.cards.filter(c => c.id !== id)
  pages.value = [...pages.value]
  savePages()
}

function onToken(t: string) {
  localToken.value = t
  for (const [, sensor] of sensorInstances) sensor.start(t)
}

function onChangeEntity(cardId: string, newId: string) {
  const page = activePage.value
  if (!page) return
  const card = page.cards.find(c => c.id === cardId)
  if (!card) return
  card.entityId = newId
  const sensor = sensorInstances.get(cardId)
  if (sensor && token.value) sensor.start(token.value, newId)
  pages.value = [...pages.value]
  savePages()
}

function onResizeCard(cardId: string, cols: number, rows: number) {
  const page = activePage.value
  if (!page) return
  const card = page.cards.find(c => c.id === cardId)
  if (!card) return
  card.cols = cols
  card.rows = rows
  pages.value = [...pages.value]
  savePages()
}

function logout() {
  for (const [id] of sensorInstances) destroySensor(id)
  pages.value = [{ id: generateId(), name: 'Home', cards: [] }]
  activePageId.value = pages.value[0].id
  disconnectWs()
  localStorage.removeItem('ha_token')
  localStorage.removeItem('ha_pages')
  localStorage.removeItem('ha_active_page')
  localStorage.removeItem('ha_auth_key')
  setAuthKey(null)
  authKeyInput.value = ''
  localToken.value = null
}

// ── Drag & Drop ──
const gridRef = ref<HTMLElement | null>(null)
const dragCardId = ref<string | null>(null)
const dragGhostEl = ref<HTMLElement | null>(null)
const placeholderCol = ref(1)
const placeholderRow = ref(1)
const placeholderCols = ref(2)
const placeholderRows = ref(2)

const CELL = 120 // 100px cell + 20px gap
const PAD_TOP = 36
const PAD_LEFT = 32

function cardStyle(card: CardData) {
  const col = card.gridCol ? `${card.gridCol} / span ${card.cols}` : `span ${card.cols}`
  const row = card.gridRow ? `${card.gridRow} / span ${card.rows}` : `span ${card.rows}`
  return { gridColumn: col, gridRow: row }
}

const placeholderStyle = computed(() => ({
  gridColumn: `${placeholderCol.value} / span ${placeholderCols.value}`,
  gridRow: `${placeholderRow.value} / span ${placeholderRows.value}`,
}))

function onDragStart(e: MouseEvent | TouchEvent, cardId: string) {
  // Don't drag if clicking edit button, resize handle, or interactive elements
  const target = e.target as HTMLElement
  if (target.closest('.edit-ctrl-btn') || target.closest('.resize-handle') || target.closest('button') || target.closest('input')) return

  const cardEl = (target.closest('[data-card-id]') ?? target) as HTMLElement
  const rect = cardEl.getBoundingClientRect()
  const startX = 'touches' in e ? e.touches[0].clientX : e.clientX
  const startY = 'touches' in e ? e.touches[0].clientY : e.clientY
  const offsetX = startX - rect.left
  const offsetY = startY - rect.top
  let dragging = false

  const foundCard = activeCards.value.find(c => c.id === cardId)
  if (!foundCard) return
  const card: CardData = foundCard

  function onMove(ev: MouseEvent | TouchEvent) {
    const cx = 'touches' in ev ? ev.touches[0].clientX : ev.clientX
    const cy = 'touches' in ev ? ev.touches[0].clientY : ev.clientY

    if (!dragging) {
      const dx = cx - startX
      const dy = cy - startY
      if (Math.abs(dx) < 5 && Math.abs(dy) < 5) return
      // Start dragging
      dragging = true
      dragCardId.value = cardId
      placeholderCols.value = card.cols
      placeholderRows.value = card.rows

      // Create ghost
      const ghost = cardEl.cloneNode(true) as HTMLElement
      ghost.classList.add('drag-ghost')
      ghost.style.position = 'fixed'
      ghost.style.width = rect.width + 'px'
      ghost.style.height = rect.height + 'px'
      ghost.style.zIndex = '1000'
      ghost.style.pointerEvents = 'none'
      ghost.style.opacity = '0.85'
      ghost.style.transform = 'scale(1.04)'
      ghost.style.transition = 'none'
      ghost.style.boxShadow = '12px 12px 24px #c8cdd5, -12px -12px 24px #ffffff'
      document.body.appendChild(ghost)
      dragGhostEl.value = ghost

      cardEl.style.opacity = '0.25'
      document.body.style.userSelect = 'none'
    }

    // Move ghost
    if (dragGhostEl.value) {
      dragGhostEl.value.style.left = (cx - offsetX) + 'px'
      dragGhostEl.value.style.top = (cy - offsetY) + 'px'
    }

    // Calculate snap position
    if (gridRef.value) {
      const gridRect = gridRef.value.getBoundingClientRect()
      const relX = cx - offsetX - gridRect.left - PAD_LEFT + (rect.width / 2)
      const relY = cy - offsetY - gridRect.top - PAD_TOP + (rect.height / 2)
      const col = Math.max(1, Math.round(relX / CELL))
      const row = Math.max(1, Math.round(relY / CELL))
      placeholderCol.value = col
      placeholderRow.value = row
    }
  }

  function onUp() {
    document.removeEventListener('mousemove', onMove)
    document.removeEventListener('mouseup', onUp)
    document.removeEventListener('touchmove', onMove)
    document.removeEventListener('touchend', onUp)
    document.body.style.userSelect = ''

    if (dragging) {
      // Remove ghost
      if (dragGhostEl.value) {
        dragGhostEl.value.remove()
        dragGhostEl.value = null
      }
      cardEl.style.opacity = ''

      // Apply new position
      if (card) {
        card.gridCol = placeholderCol.value
        card.gridRow = placeholderRow.value
        pages.value = [...pages.value]
        savePages()
      }
      dragCardId.value = null
    }
  }

  document.addEventListener('mousemove', onMove)
  document.addEventListener('mouseup', onUp)
  document.addEventListener('touchmove', onMove, { passive: false })
  document.addEventListener('touchend', onUp)
}

function saveAuthKey() {
  const val = authKeyInput.value.trim()
  setAuthKey(val || null)
  showAuthKeyInput.value = false
  // Persist to HA user data
  saveHaUserData(buildUserData())
}

// Burger menu
const burgerOpen = ref(false)

function onDocClick(e: Event) {
  if (burgerOpen.value) burgerOpen.value = false
}

onMounted(() => document.addEventListener('click', onDocClick))
onUnmounted(() => document.removeEventListener('click', onDocClick))

// Clock
const time = ref('')
const date = ref('')

function updateClock() {
  const now = new Date()
  time.value = now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })
  date.value = now.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' })
}

let clockTimer: ReturnType<typeof setInterval>
onMounted(() => { updateClock(); clockTimer = setInterval(updateClock, 1000) })
onUnmounted(() => {
  for (const [id] of sensorInstances) destroySensor(id)
  clearInterval(clockTimer)
})
</script>

<style scoped>
.dashboard {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.dashboard-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 32px;
  background: #e8ecf1;
  position: relative;
  z-index: 10;
  box-shadow: 0 4px 12px -2px #c8cdd5;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.app-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #2d3748;
  letter-spacing: -0.02em;
  margin-right: 6px;
}

.header-right {
  display: flex;
  align-items: center;
}

.clock {
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: right;
}

.clock-time {
  font-size: 1.9rem;
  font-weight: 700;
  color: #2d3748;
  letter-spacing: -0.03em;
  line-height: 1;
}

.clock-date {
  font-size: 0.78rem;
  color: #a0aec0;
  font-weight: 500;
  letter-spacing: 0.01em;
}

.dashboard-main {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-auto-rows: 100px;
  grid-auto-flow: dense;
  gap: 20px;
  padding: 36px 32px;
  align-content: start;
}

.dashboard-main :deep(.card) {
  width: auto;
  min-height: unset;
}

.dashboard-main :deep(.heading) {
  max-height: 50px;
  align-self: end;
}


/* Page tabs */
.page-tabs {
  display: flex;
  justify-content: center;
  padding: 0 32px;
  margin-bottom: 20px;
}

.page-tabs-inner {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 16px;
  background: #e8ecf1;
  box-shadow: inset 2px 2px 4px #c8cdd5, inset -2px -2px 4px #ffffff;
}

.page-tab {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 16px;
  border-radius: 12px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 0.78rem;
  font-weight: 500;
  color: #a0aec0;
  transition: all 0.2s;
}

.page-tab.active {
  background: #e8ecf1;
  color: #2d3748;
  font-weight: 600;
  box-shadow: 3px 3px 6px #c8cdd5, -3px -3px 6px #ffffff;
}

.page-tab:not(.active):hover {
  color: #718096;
}

.page-tab-label {
  white-space: nowrap;
}

.page-tab-input {
  background: transparent;
  border: none;
  border-bottom: 1.5px solid #2563eb;
  outline: none;
  font-size: 0.78rem;
  font-weight: 600;
  color: #2d3748;
  width: 80px;
  padding: 0;
  text-align: center;
}


/* Delete confirmation modal */
.page-delete-modal {
  max-width: 340px;
}

.page-delete-text {
  font-size: 0.85rem;
  color: #4a5568;
  line-height: 1.5;
  margin: 0 0 20px;
  text-align: center;
}

.page-delete-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.page-delete-cancel,
.page-delete-confirm {
  padding: 8px 20px;
  border-radius: 10px;
  border: none;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: box-shadow 0.15s, background 0.15s;
}

.page-delete-cancel {
  background: #e8ecf1;
  color: #718096;
  box-shadow: 3px 3px 6px #c8cdd5, -3px -3px 6px #ffffff;
}

.page-delete-cancel:active {
  box-shadow: inset 2px 2px 4px #c8cdd5, inset -2px -2px 4px #ffffff;
}

.page-delete-confirm {
  background: #e53e3e;
  color: #fff;
  box-shadow: 3px 3px 6px #c8cdd5, -3px -3px 6px #ffffff;
}

.page-delete-confirm:active {
  box-shadow: inset 2px 2px 4px rgba(0,0,0,0.2);
}

/* Burger menu */
.burger-wrap {
  position: fixed;
  bottom: 28px;
  left: 28px;
  z-index: 60;
}

.burger-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #e8ecf1;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  box-shadow: 5px 5px 10px #c8cdd5, -5px -5px 10px #ffffff;
  transition: box-shadow 0.15s;
}

.burger-btn:active {
  box-shadow: inset 3px 3px 6px #c8cdd5, inset -3px -3px 6px #ffffff;
}

.burger-line {
  display: block;
  width: 20px;
  height: 2px;
  border-radius: 1px;
  background: #718096;
}

.burger-menu {
  position: absolute;
  bottom: 58px;
  left: 0;
  min-width: 190px;
  background: #e8ecf1;
  border-radius: 14px;
  padding: 8px 0;
  box-shadow: 6px 6px 14px #c8cdd5, -6px -6px 14px #ffffff;
  transform-origin: bottom left;
}

.burger-pop-enter-active {
  transition: opacity 0.15s, transform 0.15s;
}
.burger-pop-leave-active {
  transition: opacity 0.1s, transform 0.1s;
}
.burger-pop-enter-from,
.burger-pop-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(8px);
}

.burger-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 10px 18px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 0.82rem;
  font-weight: 500;
  color: #2d3748;
  text-align: left;
  transition: background 0.1s;
}

.burger-item:hover {
  background: rgba(0, 0, 0, 0.04);
}

.burger-item-icon {
  font-size: 0.9rem;
  font-weight: 600;
  width: 18px;
  text-align: center;
  color: #718096;
}

.burger-item-danger {
  color: #e53e3e;
}

.burger-item-danger .burger-item-icon {
  color: #e53e3e;
}

.burger-item-muted {
  color: #a0aec0;
  font-size: 0.76rem;
}

.burger-divider {
  height: 1px;
  background: #d2d8e0;
  margin: 4px 14px;
}

.burger-auth-key {
  padding: 6px 14px 10px;
}

.burger-auth-input {
  width: 100%;
  padding: 6px 10px;
  border: none;
  border-radius: 8px;
  background: #e8ecf1;
  box-shadow: inset 2px 2px 4px #c8cdd5, inset -2px -2px 4px #ffffff;
  font-size: 0.75rem;
  color: #2d3748;
  outline: none;
  box-sizing: border-box;
}

.burger-auth-actions {
  display: flex;
  gap: 6px;
  margin-top: 6px;
}

.burger-auth-save,
.burger-auth-clear {
  padding: 4px 12px;
  border: none;
  border-radius: 8px;
  font-size: 0.72rem;
  font-weight: 600;
  cursor: pointer;
  background: #e8ecf1;
  color: #2d3748;
  box-shadow: 2px 2px 4px #c8cdd5, -2px -2px 4px #ffffff;
}

.burger-auth-save:active,
.burger-auth-clear:active {
  box-shadow: inset 2px 2px 4px #c8cdd5, inset -2px -2px 4px #ffffff;
}

.burger-auth-clear {
  color: #e53e3e;
}

/* ── Drag & Drop ── */
.card-dragging {
  opacity: 0.25;
}

.drop-placeholder {
  border-radius: 20px;
  background: rgba(37, 99, 235, 0.06);
  border: 2px dashed rgba(37, 99, 235, 0.25);
  box-shadow: inset 3px 3px 6px #c8cdd5, inset -3px -3px 6px #ffffff;
  pointer-events: none;
  transition: grid-column 0.15s, grid-row 0.15s;
}
</style>
