<template>
  <div class="body-center" :class="{ compact: isCompact, short: isShort, narrow: isNarrow }">
    <div class="center-wrap">
      <button
        class="power-btn"
        :class="{ on: isActive, pressing }"
        @mousedown="pressing = true"
        @mouseup="pressing = false"
        @mouseleave="pressing = false"
        @touchstart.passive="pressing = true"
        @touchend="pressing = false"
        @click="toggle"
        :title="isActive ? 'Ausschalten' : 'Einschalten'"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
          <line x1="12" y1="2" x2="12" y2="12" />
        </svg>
      </button>
    </div>
    <div v-if="lastUpdated" class="updated">
      Aktualisiert: {{ lastUpdated }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { callService } from '../composables/useHomeAssistant'
import type { HaState } from '../composables/useHomeAssistant'

const props = defineProps<{
  entityId: string
  token: string
  state: HaState | null
  isCompact: boolean
  isShort: boolean
  isNarrow: boolean
}>()

const isActive = computed(() => {
  if (!props.state) return false
  const s = props.state.state
  if (s === 'on' || s === 'home' || s === 'open' || s === 'unlocked') return true
  const num = parseFloat(s)
  return !isNaN(num) && num > 0
})

const pressing = ref(false)

async function toggle() {
  if (!props.state) return
  await callService(props.token, props.entityId, 'toggle')
}

const lastUpdated = computed(() => {
  if (!props.state) return null
  return new Date(props.state.last_updated).toLocaleTimeString('de-DE')
})
</script>

<style scoped>
/* ── Body center: fills remaining card space, centers content vertically ── */
.body-center {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.body-center .center-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.body-center .updated {
  margin-top: auto;
  padding-top: 12px;
}

.updated {
  font-size: 0.7rem;
  color: #c0c7d0;
  letter-spacing: 0.02em;
  text-align: center;
}

/* ── Power button ── */

.power-btn {
  background: #e8ecf1;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b0bac6;
  box-shadow: 6px 6px 12px #c8cdd5, -6px -6px 12px #ffffff;
  transition: box-shadow 0.15s, color 0.15s;
  outline: none;
  -webkit-tap-highlight-color: transparent;
}

.power-btn svg {
  width: 28px;
  height: 28px;
  transition: color 0.2s, filter 0.2s;
}

/* OFF → fully raised */
.power-btn:not(.on):not(.pressing) {
  box-shadow: 6px 6px 12px #c8cdd5, -6px -6px 12px #ffffff;
}

/* ON → slightly raised + green glow */
.power-btn.on:not(.pressing) {
  color: #22c55e;
  box-shadow:
    3px 3px 7px #c8cdd5,
    -3px -3px 7px #ffffff,
    0 0 16px rgba(34, 197, 94, 0.35),
    0 0 4px rgba(34, 197, 94, 0.2) inset;
}

.power-btn.on svg {
  filter: drop-shadow(0 0 5px rgba(34, 197, 94, 0.6));
}

/* Pressing → inset */
.power-btn.pressing {
  box-shadow: inset 4px 4px 8px #c8cdd5, inset -4px -4px 8px #ffffff;
  color: #718096;
}

/* Short card */
.body-center.short .power-btn {
  width: 48px;
  height: 48px;
}

.body-center.short .power-btn svg {
  width: 22px;
  height: 22px;
}

.body-center.short .updated {
  display: none;
}

/* Compact card (1x1) */
.body-center.compact .power-btn {
  width: 40px;
  height: 40px;
  box-shadow: 4px 4px 8px #c8cdd5, -4px -4px 8px #ffffff;
}

.body-center.compact .power-btn svg {
  width: 18px;
  height: 18px;
}

.body-center.compact .power-btn.on:not(.pressing) {
  box-shadow:
    2px 2px 5px #c8cdd5,
    -2px -2px 5px #ffffff,
    0 0 10px rgba(34, 197, 94, 0.35),
    0 0 3px rgba(34, 197, 94, 0.2) inset;
}

.body-center.compact .power-btn.pressing {
  box-shadow: inset 3px 3px 6px #c8cdd5, inset -3px -3px 6px #ffffff;
}

.body-center.compact .updated {
  display: none;
}
</style>
