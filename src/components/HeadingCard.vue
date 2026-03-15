<template>
  <div class="heading" :class="{ short: rows === 1 }">
    <h2
      v-if="!editing"
      class="heading-text"
      @dblclick="startEdit"
    >{{ label }}</h2>
    <input
      v-else
      ref="inputRef"
      v-model="editValue"
      class="heading-input"
      @blur="finishEdit"
      @keydown.enter="finishEdit"
      @keydown.escape="cancelEdit"
    />

    <!-- Edit / delete button -->
    <button class="heading-edit-btn" @click.stop="openMenu" title="Bearbeiten">
      <span class="dot" /><span class="dot" /><span class="dot" />
    </button>

    <Teleport to="body">
      <div v-if="menuOpen" class="ha-modal-overlay" @click.self="menuOpen = false">
        <div class="ha-modal-box" @click.stop>
          <div class="ha-modal-header-row">
            <h3 class="ha-modal-title">Überschrift</h3>
            <button class="ha-modal-close" @click="menuOpen = false">✕</button>
          </div>
          <div class="ha-modal-fields">
            <input
              v-model="menuLabel"
              class="ha-modal-input"
              placeholder="Überschrift..."
              @keydown.enter.prevent="confirmMenu"
              @keydown.escape="menuOpen = false"
            />
          </div>
          <div class="ha-modal-actions">
            <button class="ha-modal-btn confirm" @click="confirmMenu">✓ Übernehmen</button>
            <button class="ha-modal-btn cancel" @click="menuOpen = false">✕ Abbrechen</button>
          </div>
          <button class="ha-modal-delete-btn" @click="$emit('remove'); menuOpen = false">
            Überschrift entfernen
          </button>
        </div>
      </div>
    </Teleport>

    <!-- Resize handle -->
    <div
      class="resize-handle"
      @mousedown.prevent="startResize"
      @touchstart.prevent="startResize"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

const props = withDefaults(defineProps<{
  label: string
  cols?: number
  rows?: number
}>(), { cols: 3, rows: 1 })

const emit = defineEmits<{
  (e: 'update-label', label: string): void
  (e: 'remove'): void
  (e: 'resize', cols: number, rows: number): void
}>()

// Inline editing (double-click)
const editing = ref(false)
const editValue = ref('')
const inputRef = ref<HTMLInputElement | null>(null)

function startEdit() {
  editValue.value = props.label
  editing.value = true
  nextTick(() => inputRef.value?.select())
}

function finishEdit() {
  editing.value = false
  const v = editValue.value.trim()
  if (v && v !== props.label) emit('update-label', v)
}

function cancelEdit() {
  editing.value = false
}

// Modal editing
const menuOpen = ref(false)
const menuLabel = ref('')

function openMenu() {
  menuLabel.value = props.label
  menuOpen.value = true
}

function confirmMenu() {
  const v = menuLabel.value.trim()
  if (v && v !== props.label) emit('update-label', v)
  menuOpen.value = false
}

// Resize (same logic as SensorCard)
function startResize(e: MouseEvent | TouchEvent) {
  const el = (e.target as HTMLElement).closest('.heading') as HTMLElement
  if (!el) return

  const rect = el.getBoundingClientRect()
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
    const c = Math.max(1, Math.min(12, Math.round((newW + 20) / UNIT)))
    const r = Math.max(1, Math.min(4, Math.round((newH + 20) / UNIT)))
    el.style.gridColumn = `span ${c}`
    el.style.gridRow = `span ${r}`
    el.dataset.previewCols = String(c)
    el.dataset.previewRows = String(r)
  }

  function onUp() {
    document.body.style.userSelect = ''
    document.removeEventListener('mousemove', onMove)
    document.removeEventListener('mouseup', onUp)
    document.removeEventListener('touchmove', onMove)
    document.removeEventListener('touchend', onUp)

    const c = parseInt(el.dataset.previewCols ?? '') || props.cols
    const r = parseInt(el.dataset.previewRows ?? '') || props.rows
    delete el.dataset.previewCols
    delete el.dataset.previewRows
    el.style.gridColumn = ''
    el.style.gridRow = ''
    emit('resize', c, r)
  }

  document.addEventListener('mousemove', onMove)
  document.addEventListener('mouseup', onUp)
  document.addEventListener('touchmove', onMove, { passive: false })
  document.addEventListener('touchend', onUp)
}
</script>

<style scoped>
.heading {
  display: flex;
  align-items: flex-end;
  padding: 0 4px 6px;
  position: relative;
  overflow: hidden;
  user-select: none;
}

.heading.short {
  align-items: center;
  padding: 0 4px;
}

.heading-text {
  font-size: 1.6rem;
  font-weight: 800;
  color: #2d3748;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin: 0;
  cursor: default;
  word-break: break-word;
}

.heading.short .heading-text {
  font-size: 1.2rem;
}

.heading-input {
  font-size: 1.6rem;
  font-weight: 800;
  color: #2d3748;
  letter-spacing: -0.02em;
  line-height: 1.1;
  background: transparent;
  border: none;
  border-bottom: 2px solid #2563eb;
  outline: none;
  width: 100%;
  padding: 0;
}

.heading-edit-btn {
  position: absolute;
  top: 4px;
  right: 4px;
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

.heading:hover .heading-edit-btn {
  opacity: 1;
}

.heading-edit-btn:hover {
  box-shadow: 2px 2px 4px #c8cdd5, -2px -2px 4px #ffffff;
}

.heading-edit-btn:active {
  box-shadow: inset 2px 2px 4px #c8cdd5, inset -2px -2px 4px #ffffff;
}

.dot {
  display: block;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #a0aec0;
}

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
  border-radius: 0 0 3px;
}

.heading:hover .resize-handle {
  opacity: 1;
}
</style>
