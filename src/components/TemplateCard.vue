<template>
  <div class="card template-card" :class="{ small: isCompact, short: isShort }">
    <!-- Edit button -->
    <button class="edit-ctrl-btn" @click.stop="openEdit" title="Bearbeiten">
      <span class="dot" /><span class="dot" /><span class="dot" />
    </button>

    <!-- Rendered content -->
    <div class="template-content" v-html="rendered" />

    <!-- Edit modal -->
    <Teleport to="body">
      <div v-if="editing" class="ha-modal-overlay" @click.self="cancelEdit">
        <div class="ha-modal-box template-modal" @click.stop>
          <div class="ha-modal-header-row">
            <h3 class="ha-modal-title">Template bearbeiten</h3>
            <button class="ha-modal-close" @click="cancelEdit">&#x2715;</button>
          </div>

          <div class="template-editor-wrap">
            <textarea
              ref="editorRef"
              v-model="editTemplate"
              class="template-editor"
              placeholder="Jinja2 / HTML Template..."
              spellcheck="false"
              @keydown.tab.prevent="insertTab"
            />
          </div>

          <!-- Live preview -->
          <div class="template-preview-label">Vorschau:</div>
          <div class="template-preview" v-html="previewRendered" />

          <div class="template-hint">
            <code v-text="hintStates" />
            <code v-text="hintIf" />
          </div>

          <div class="ha-modal-actions">
            <button class="ha-modal-btn confirm" @click="confirmEdit">&#x2713; Speichern</button>
            <button class="ha-modal-btn cancel" @click="cancelEdit">&#x2715; Abbrechen</button>
          </div>
          <button class="ha-modal-delete-btn" @click="$emit('remove'); editing = false">
            Card entfernen
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
import { ref, computed, watch, onUnmounted, nextTick } from 'vue'
import { subscribeRenderTemplate } from '../composables/useHomeAssistant'

const props = withDefaults(defineProps<{
  template: string
  cols?: number
  rows?: number
}>(), { cols: 2, rows: 2 })

const emit = defineEmits<{
  (e: 'update-template', template: string): void
  (e: 'remove'): void
  (e: 'resize', cols: number, rows: number): void
}>()

const hintStates = "{{ states('sensor.xxx') }}"
const hintIf = "{% if is_state('light.xxx', 'on') %}An{% endif %}"

const isCompact = computed(() => props.cols <= 1 && props.rows <= 1)
const isShort = computed(() => props.rows <= 1 && props.cols > 1)

// ── Live rendering via WS subscription ──
const rendered = ref('<span style="color:#a0aec0">Lade...</span>')
let currentSub: { unsubscribe: () => void } | null = null

function startSubscription(tmpl: string) {
  currentSub?.unsubscribe()
  currentSub = null
  if (!tmpl.trim()) {
    rendered.value = '<span style="color:#a0aec0">Template leer</span>'
    return
  }
  currentSub = subscribeRenderTemplate(
    tmpl,
    (result) => { rendered.value = result },
    (err) => { rendered.value = `<span style="color:#e53e3e">${err}</span>` },
  )
}

startSubscription(props.template)

watch(() => props.template, (tmpl) => {
  startSubscription(tmpl)
})

onUnmounted(() => {
  currentSub?.unsubscribe()
})

// ── Edit modal ──
const editing = ref(false)
const editTemplate = ref('')
const editorRef = ref<HTMLTextAreaElement | null>(null)

// Live preview while editing
const previewRendered = ref('')
let previewSub: { unsubscribe: () => void } | null = null
let previewDebounce: ReturnType<typeof setTimeout> | null = null

function openEdit() {
  editTemplate.value = props.template
  editing.value = true
  previewRendered.value = rendered.value
  nextTick(() => editorRef.value?.focus())
  startPreviewSub(editTemplate.value)
}

function startPreviewSub(tmpl: string) {
  previewSub?.unsubscribe()
  previewSub = null
  if (!tmpl.trim()) {
    previewRendered.value = '<span style="color:#a0aec0">Template leer</span>'
    return
  }
  previewSub = subscribeRenderTemplate(
    tmpl,
    (result) => { previewRendered.value = result },
    (err) => { previewRendered.value = `<span style="color:#e53e3e">${err}</span>` },
  )
}

watch(editTemplate, (tmpl) => {
  if (previewDebounce) clearTimeout(previewDebounce)
  previewDebounce = setTimeout(() => startPreviewSub(tmpl), 400)
})

function confirmEdit() {
  previewSub?.unsubscribe()
  previewSub = null
  editing.value = false
  if (editTemplate.value !== props.template) {
    emit('update-template', editTemplate.value)
  }
}

function cancelEdit() {
  previewSub?.unsubscribe()
  previewSub = null
  editing.value = false
}

function insertTab(e: Event) {
  const ta = editorRef.value
  if (!ta) return
  const start = ta.selectionStart
  const end = ta.selectionEnd
  editTemplate.value = editTemplate.value.substring(0, start) + '  ' + editTemplate.value.substring(end)
  nextTick(() => { ta.selectionStart = ta.selectionEnd = start + 2 })
}

// ── Resize ──
function startResize(e: MouseEvent | TouchEvent) {
  const el = (e.target as HTMLElement).closest('.card') as HTMLElement
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
    const r = Math.max(1, Math.min(6, Math.round((newH + 20) / UNIT)))
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
.template-card {
  background: #e8ecf1;
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 8px 8px 16px #c8cdd5, -8px -8px 16px #ffffff;
  overflow: hidden;
  position: relative;
}

.template-card.small {
  padding: 10px;
  border-radius: 14px;
  box-shadow: 5px 5px 10px #c8cdd5, -5px -5px 10px #ffffff;
}

.template-card.short {
  padding: 14px 18px;
}

.template-content {
  flex: 1;
  overflow: hidden;
  font-size: 0.85rem;
  color: #2d3748;
  line-height: 1.5;
  word-break: break-word;
}

.template-content :deep(h1),
.template-content :deep(h2),
.template-content :deep(h3) {
  margin: 0 0 4px;
  font-weight: 700;
  color: #2d3748;
}

.template-content :deep(h1) { font-size: 1.4rem; }
.template-content :deep(h2) { font-size: 1.1rem; }
.template-content :deep(h3) { font-size: 0.95rem; }

.template-content :deep(p) { margin: 0 0 4px; }
.template-content :deep(ul),
.template-content :deep(ol) { margin: 0; padding-left: 16px; }

.template-content :deep(span),
.template-content :deep(div) { color: inherit; }

/* Edit button */
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

.template-card:hover .edit-ctrl-btn { opacity: 1; }
.edit-ctrl-btn:hover { box-shadow: 2px 2px 4px #c8cdd5, -2px -2px 4px #ffffff; }
.edit-ctrl-btn:active { box-shadow: inset 2px 2px 4px #c8cdd5, inset -2px -2px 4px #ffffff; }

.dot {
  display: block;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #a0aec0;
}

/* Resize handle */
.resize-handle {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 18px;
  height: 18px;
  cursor: nwse-resize;
  opacity: 0;
  transition: opacity 0.2s;
  z-index: 5;
}

.resize-handle::before {
  content: '';
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 8px;
  height: 8px;
  border-right: 2px solid #b0bac6;
  border-bottom: 2px solid #b0bac6;
  border-radius: 0 0 3px;
}

.template-card:hover .resize-handle { opacity: 1; }

/* Editor modal */
.template-modal {
  max-width: 600px;
  width: 90vw;
}

.template-editor-wrap {
  margin-bottom: 12px;
}

.template-editor {
  width: 100%;
  min-height: 160px;
  max-height: 400px;
  padding: 12px;
  border: none;
  border-radius: 12px;
  background: #e8ecf1;
  box-shadow: inset 3px 3px 6px #c8cdd5, inset -3px -3px 6px #ffffff;
  font-family: 'SF Mono', Menlo, Consolas, monospace;
  font-size: 0.78rem;
  color: #2d3748;
  line-height: 1.6;
  resize: vertical;
  outline: none;
  box-sizing: border-box;
  tab-size: 2;
}

.template-preview-label {
  font-size: 0.72rem;
  font-weight: 600;
  color: #718096;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
}

.template-preview {
  padding: 12px;
  border-radius: 12px;
  background: #e8ecf1;
  box-shadow: inset 2px 2px 4px #c8cdd5, inset -2px -2px 4px #ffffff;
  font-size: 0.85rem;
  color: #2d3748;
  line-height: 1.5;
  min-height: 40px;
  max-height: 200px;
  overflow-y: auto;
  margin-bottom: 12px;
  word-break: break-word;
}

.template-hint {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}

.template-hint code {
  font-size: 0.65rem;
  background: rgba(0,0,0,0.04);
  padding: 2px 6px;
  border-radius: 4px;
  color: #718096;
  font-family: 'SF Mono', Menlo, Consolas, monospace;
}
</style>
