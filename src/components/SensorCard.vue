<template>
  <div class="card" :class="{ active: isActive, small: isCompact, short: isShort, narrow: isNarrow }">
    <!-- Edit button (top-right) -->
    <button class="edit-ctrl-btn" @click.stop="openEdit" title="Bearbeiten">
      <span class="dot" /><span class="dot" /><span class="dot" />
    </button>

    <div v-if="showTitle" class="card-header">
      <span class="label">{{ customTitle || label }}</span>
    </div>

    <!-- Edit modal -->
    <Teleport to="body">
      <div v-if="editing" class="ha-modal-overlay" @click.self="cancelEdit">
        <div class="ha-modal-box" @click.stop>
          <h3 class="ha-modal-title">Sensor ändern</h3>
          <div class="ha-modal-fields">
            <div class="ha-modal-input-wrap">
              <input
                ref="inputRef"
                v-model="editInput"
                class="ha-modal-input"
                placeholder="sensor.mein_sensor"
                autocomplete="off"
                @input="onInput"
                @keydown.enter.prevent="onEnter"
                @keydown.escape="cancelEdit"
                @keydown.arrow-down.prevent="moveDown"
                @keydown.arrow-up.prevent="moveUp"
              />
              <ul v-if="suggestions.length" class="ha-modal-suggestions">
                <li
                  v-for="(s, i) in suggestions"
                  :key="s.entity_id"
                  :class="['ha-modal-suggestion-item', { active: i === activeIdx }]"
                  @mousedown.prevent="selectSuggestion(s.entity_id)"
                >
                  <span class="ha-modal-s-entity">{{ s.entity_id }}</span>
                  <span class="ha-modal-s-name">{{ s.attributes.friendly_name ?? '' }}</span>
                </li>
              </ul>
            </div>
            <input
              v-model="editTitle"
              class="ha-modal-input"
              placeholder="Alternativer Titel (optional)"
              autocomplete="off"
              @keydown.enter.prevent="confirmEdit"
              @keydown.escape="cancelEdit"
            />
          </div>
          <div class="ha-toggle-row">
            <span class="ha-toggle-label">Titel anzeigen</span>
            <button
              class="ha-toggle"
              :class="{ on: editShowTitle }"
              @click="editShowTitle = !editShowTitle"
              type="button"
            >
              <span class="ha-toggle-knob" />
            </button>
          </div>
          <div class="ha-modal-hint">
            Entity-ID eingeben · ↑↓ navigieren · Enter übernehmen
          </div>
          <div class="ha-modal-actions">
            <button class="ha-modal-btn confirm" title="Übernehmen" @click="confirmEdit">✓ Übernehmen</button>
            <button class="ha-modal-btn cancel" title="Abbrechen" @click="cancelEdit">✕ Abbrechen</button>
          </div>
          <button class="ha-modal-delete-btn" @click="emitRemove">Card entfernen</button>
        </div>
      </div>
    </Teleport>

    <!-- Loading / Error states -->
    <div v-if="loading" class="state loading">
      <span class="spinner" />
    </div>

    <div v-else-if="error" class="state error">
      <span>⚠️</span>
      {{ error }}
    </div>

    <!-- Sensor body components -->
    <WeatherBody
      v-else-if="isWeather"
      :entity-id="entityId"
      :token="token"
      :state="state"
      :is-compact="isCompact"
      :is-short="isShort"
      :is-narrow="isNarrow"
      :label="customTitle || label"
      :custom-title="customTitle"
    />

    <LightBody
      v-else-if="isLight"
      :entity-id="entityId"
      :token="token"
      :state="state"
      :is-compact="isCompact"
      :is-short="isShort"
      :is-narrow="isNarrow"
    />

    <BinaryBody
      v-else-if="isBinary"
      :entity-id="entityId"
      :token="token"
      :state="state"
      :is-compact="isCompact"
      :is-short="isShort"
      :is-narrow="isNarrow"
    />

    <ValueBody
      v-else
      :entity-id="entityId"
      :token="token"
      :state="state"
      :is-compact="isCompact"
      :is-short="isShort"
      :is-narrow="isNarrow"
    />

    <!-- Resize handle -->
    <div
      class="resize-handle"
      @mousedown.prevent="startResize"
      @touchstart.prevent="startResize"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick, watch as vueWatch } from 'vue'
import { fetchAllStates, scheduleSettingsSync } from '../composables/useHomeAssistant'
import type { HaState } from '../composables/useHomeAssistant'
import WeatherBody from './WeatherBody.vue'
import LightBody from './LightBody.vue'
import BinaryBody from './BinaryBody.vue'
import ValueBody from './ValueBody.vue'

const props = withDefaults(defineProps<{
  entityId: string
  token: string
  cols?: number
  rows?: number
  state: HaState | null
  loading: boolean
  error: string | null
}>(), { cols: 2, rows: 2 })

const emit = defineEmits<{
  (e: 'change-entity', id: string): void
  (e: 'remove'): void
  (e: 'resize', cols: number, rows: number): void
}>()

const isCompact = computed(() => props.cols === 1 && props.rows === 1)
const isShort = computed(() => props.rows === 1 && props.cols > 1)
const isNarrow = computed(() => props.cols === 1 && props.rows > 1)

// ── Entity type detection ──
const isWeather = computed(() => props.entityId.startsWith('weather.'))
const isLight = computed(() => props.entityId.startsWith('light.'))

const BINARY_STATES = new Set(['on', 'off', 'open', 'closed', 'locked', 'unlocked', 'home', 'away'])
const isBinary = computed(() => {
  if (!props.state) return false
  if (isLight.value || isWeather.value) return false
  return BINARY_STATES.has(props.state.state)
})

const isActive = computed(() => {
  if (!props.state) return false
  const s = props.state.state
  if (s === 'on' || s === 'home' || s === 'open' || s === 'unlocked') return true
  const num = parseFloat(s)
  return !isNaN(num) && num > 0
})

// ── Label ──
const TITLE_KEY = computed(() => `ha_title_${props.entityId}`)
const customTitle = ref(localStorage.getItem(`ha_title_${props.entityId}`) ?? '')
const showTitle = ref(localStorage.getItem(`ha_showtitle_${props.entityId}`) !== 'false')

vueWatch(() => props.entityId, (id) => {
  customTitle.value = localStorage.getItem(`ha_title_${id}`) ?? ''
  showTitle.value = localStorage.getItem(`ha_showtitle_${id}`) !== 'false'
})

const label = computed(() => {
  if (!props.state) return props.entityId
  return (props.state.attributes.friendly_name as string) ?? props.state.entity_id
})

// ── Edit modal ──
const editing = ref(false)
const editInput = ref('')
const editTitle = ref('')
const editShowTitle = ref(true)
const inputRef = ref<HTMLInputElement | null>(null)

const allEntities = ref<HaState[]>([])
const suggestions = ref<HaState[]>([])
const activeIdx = ref(-1)

async function loadEntities() {
  try {
    allEntities.value = await fetchAllStates(props.token)
  } catch { /* ignore */ }
}

function onInput() {
  activeIdx.value = -1
  const q = editInput.value.trim().toLowerCase()
  if (!q) { suggestions.value = []; return }
  suggestions.value = allEntities.value
    .filter(e =>
      e.entity_id.toLowerCase().includes(q) ||
      ((e.attributes.friendly_name as string) ?? '').toLowerCase().includes(q)
    )
    .slice(0, 8)
}

function moveDown() {
  if (!suggestions.value.length) return
  activeIdx.value = (activeIdx.value + 1) % suggestions.value.length
}

function moveUp() {
  if (!suggestions.value.length) return
  activeIdx.value = (activeIdx.value - 1 + suggestions.value.length) % suggestions.value.length
}

function selectSuggestion(id: string) {
  editInput.value = id
  suggestions.value = []
  activeIdx.value = -1
}

function onEnter() {
  if (activeIdx.value >= 0 && suggestions.value[activeIdx.value]) {
    selectSuggestion(suggestions.value[activeIdx.value].entity_id)
  } else {
    confirmEdit()
  }
}

function openEdit() {
  editInput.value = props.entityId
  editTitle.value = customTitle.value
  editShowTitle.value = showTitle.value
  suggestions.value = []
  activeIdx.value = -1
  editing.value = true
  loadEntities()
  nextTick(() => inputRef.value?.select())
}

function confirmEdit() {
  const id = editInput.value.trim()
  if (id) {
    const titleVal = editTitle.value.trim()
    localStorage.setItem(`ha_title_${id}`, titleVal)
    localStorage.setItem(`ha_showtitle_${id}`, String(editShowTitle.value))
    scheduleSettingsSync()
    if (id === props.entityId) {
      customTitle.value = titleVal
      showTitle.value = editShowTitle.value
    }
    emit('change-entity', id)
  }
  suggestions.value = []
  editing.value = false
}

function cancelEdit() {
  suggestions.value = []
  editing.value = false
}

function emitRemove() {
  editing.value = false
  emit('remove')
}

// ── Drag-to-resize ──
function startResize(e: MouseEvent | TouchEvent) {
  const card = (e.target as HTMLElement).closest('.card') as HTMLElement
  if (!card) return

  const rect = card.getBoundingClientRect()
  const startX = 'touches' in e ? e.touches[0].clientX : e.clientX
  const startY = 'touches' in e ? e.touches[0].clientY : e.clientY
  const startW = rect.width
  const startH = rect.height
  const UNIT = 120

  document.body.style.userSelect = 'none'

  function onMove(ev: MouseEvent | TouchEvent) {
    const cx = 'touches' in ev ? ev.touches[0].clientX : ev.clientX
    const cy = 'touches' in ev ? ev.touches[0].clientY : ev.clientY
    const newW = startW + (cx - startX)
    const newH = startH + (cy - startY)
    const c = Math.max(1, Math.min(6, Math.round((newW + 20) / UNIT)))
    const r = Math.max(1, Math.min(6, Math.round((newH + 20) / UNIT)))
    card.style.gridColumn = `span ${c}`
    card.style.gridRow = `span ${r}`
    card.dataset.previewCols = String(c)
    card.dataset.previewRows = String(r)
  }

  function onUp() {
    document.body.style.userSelect = ''
    document.removeEventListener('mousemove', onMove)
    document.removeEventListener('mouseup', onUp)
    document.removeEventListener('touchmove', onMove)
    document.removeEventListener('touchend', onUp)
    const c = parseInt(card.dataset.previewCols || String(props.cols))
    const r = parseInt(card.dataset.previewRows || String(props.rows))
    delete card.dataset.previewCols
    delete card.dataset.previewRows
    if (c !== props.cols || r !== props.rows) {
      emit('resize', c, r)
    }
  }

  document.addEventListener('mousemove', onMove)
  document.addEventListener('mouseup', onUp)
  document.addEventListener('touchmove', onMove)
  document.addEventListener('touchend', onUp)
}
</script>

<style scoped>
/* ── Card shell ── */
.card {
  background: #e8ecf1;
  border: none;
  border-radius: 20px;
  padding: 24px 20px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  position: relative;
  box-shadow: 8px 8px 16px #c8cdd5, -8px -8px 16px #ffffff;
  transition: box-shadow 0.4s, transform 0.4s;
  overflow: hidden;
}

.card::after {
  content: '';
  position: absolute;
  bottom: -18px;
  left: 15%;
  right: 15%;
  height: 28px;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, rgba(255, 160, 60, 0.0) 0%, transparent 100%);
  filter: blur(10px);
  transition: background 0.5s, opacity 0.5s;
  pointer-events: none;
  z-index: -1;
}

.card.active::after {
  background: radial-gradient(ellipse at center, rgba(255, 155, 40, 0.65) 0%, rgba(255, 120, 20, 0.2) 60%, transparent 100%);
}

.card.active {
  box-shadow:
    8px 8px 16px #c8cdd5,
    -8px -8px 16px #ffffff,
    0 18px 32px -8px rgba(255, 140, 30, 0.25);
}

/* ── Header ── */
.card-header {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 24px;
}

.label {
  font-size: 0.72rem;
  color: #a0aec0;
  font-weight: 600;
  letter-spacing: 0.06em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-transform: uppercase;
  text-align: center;
  max-width: 100%;
}

/* ── Edit button (top-right) ── */
.edit-ctrl-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 15;
  background: #e8ecf1;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 6px 7px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: center;
  justify-content: center;
  color: #a0aec0;
  opacity: 0;
  box-shadow: 3px 3px 6px #c8cdd5, -3px -3px 6px #ffffff;
  transition: opacity 0.2s, box-shadow 0.15s;
}

.card:hover .edit-ctrl-btn { opacity: 1; }

.edit-ctrl-btn:hover {
  box-shadow: 2px 2px 4px #c8cdd5, -2px -2px 4px #ffffff;
}

.edit-ctrl-btn:active {
  box-shadow: inset 2px 2px 4px #c8cdd5, inset -2px -2px 4px #ffffff;
}

.card.small .edit-ctrl-btn {
  padding: 4px 5px;
  border-radius: 8px;
  top: 5px;
  right: 5px;
  gap: 2px;
}

.card.small .edit-ctrl-btn .dot {
  width: 2px;
  height: 2px;
}

.dot {
  display: block;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #a0aec0;
}

/* ── Loading / Error ── */
.state {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 6px;
}

.state.loading { justify-content: center; padding: 16px 0; }
.state.error { color: #e53e3e; font-size: 0.875rem; gap: 8px; align-items: center; justify-content: center; }

.spinner {
  display: inline-block;
  width: 26px;
  height: 26px;
  border: 3px solid #d8dde5;
  border-top-color: #2563eb;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

/* ══════════════════════════════════════════════
   Narrow card overrides (1 col, 2+ rows)
   ══════════════════════════════════════════════ */
.card.narrow {
  padding: 16px 10px 12px;
  border-radius: 16px;
}

.card.narrow .label {
  font-size: 0.55rem;
  letter-spacing: 0.04em;
}

/* ══════════════════════════════════════════════
   Small card overrides
   ══════════════════════════════════════════════ */
.card.small {
  padding: 12px 10px 10px;
  border-radius: 14px;
  box-shadow: 8px 8px 16px #c8cdd5, -8px -8px 16px #ffffff;
}

.card.small.active {
  box-shadow:
    8px 8px 16px #c8cdd5,
    -8px -8px 16px #ffffff,
    0 12px 20px -6px rgba(255, 140, 30, 0.25);
}

.card.small .label {
  font-size: 0.55rem;
  letter-spacing: 0.04em;
}

.card.small .spinner {
  width: 18px;
  height: 18px;
  border-width: 2px;
}

.card.small::after {
  bottom: -12px;
  height: 18px;
}

/* ══════════════════════════════════════════════
   Short card overrides (1 row, multiple cols)
   ══════════════════════════════════════════════ */
.card.short {
  padding: 14px 16px 12px;
}

.card.short .label {
  font-size: 0.6rem;
}

/* ── Resize handle ── */
.resize-handle {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 16px;
  height: 16px;
  cursor: nwse-resize;
  opacity: 0;
  transition: opacity 0.2s;
  z-index: 5;
}

.resize-handle::before {
  content: '';
  position: absolute;
  bottom: 4px;
  right: 4px;
  width: 8px;
  height: 8px;
  border-right: 2px solid #b0bac6;
  border-bottom: 2px solid #b0bac6;
  border-radius: 0 0 3px 0;
}

.card:hover .resize-handle {
  opacity: 1;
}

/* ── Toggle row in edit modal ── */
.ha-toggle-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 4px;
}

.ha-toggle-label {
  font-size: 0.85rem;
  color: #4a5568;
  font-weight: 500;
}

.ha-toggle {
  position: relative;
  width: 44px;
  height: 24px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background: #e8ecf1;
  box-shadow: inset 2px 2px 4px #c8cdd5, inset -2px -2px 4px #ffffff;
  transition: box-shadow 0.25s, background 0.25s;
  padding: 0;
}

.ha-toggle.on {
  box-shadow:
    inset 2px 2px 4px rgba(34, 197, 94, 0.25),
    inset -2px -2px 4px rgba(255, 255, 255, 0.6),
    0 0 8px rgba(34, 197, 94, 0.3);
}

.ha-toggle-knob {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #e8ecf1;
  box-shadow: 2px 2px 4px #c8cdd5, -1px -1px 3px #ffffff;
  transition: transform 0.2s, background 0.2s, box-shadow 0.2s;
}

.ha-toggle.on .ha-toggle-knob {
  transform: translateX(20px);
  background: #22c55e;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15), 0 0 6px rgba(34, 197, 94, 0.4);
}
</style>
