<template>
  <!-- Light control button (top-left) -->
  <button
    class="light-ctrl-btn"
    @click.stop="showLightModal = true"
    title="Helligkeit & Farbe"
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  </button>

  <!-- Light bulb button body -->
  <div class="body-center" :class="{ compact: isCompact, short: isShort, narrow: isNarrow }">
    <div class="center-wrap">
      <button
        class="bulb-btn"
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
          <path d="M9 18h6"/>
          <path d="M10 22h4"/>
          <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>
        </svg>
      </button>
    </div>
    <div v-if="lastUpdated" class="updated">
      Aktualisiert: {{ lastUpdated }}
    </div>
  </div>

  <!-- Light control modal -->
  <Teleport to="body">
    <div v-if="showLightModal" class="ha-modal-overlay" @click.self="showLightModal = false">
      <div class="ha-modal-box" @click.stop>
        <div class="ha-modal-header-row">
          <h3 class="ha-modal-title">Lichtsteuerung</h3>
          <button class="ha-modal-close" @click="showLightModal = false">&#x2715;</button>
        </div>

        <!-- Brightness slider -->
        <div class="ha-light-section">
          <label class="ha-light-label">Helligkeit</label>
          <div class="ha-light-slider-wrap">
            <input
              type="range"
              min="0"
              max="255"
              :value="lightBrightness"
              class="ha-light-slider"
              @input="onBrightnessChange"
            />
            <span class="ha-light-slider-value">{{ Math.round(lightBrightness / 255 * 100) }}%</span>
          </div>
        </div>

        <!-- Hue slider -->
        <div v-if="supportsColor" class="ha-light-section">
          <label class="ha-light-label">Farbe</label>
          <div class="ha-light-slider-wrap">
            <input
              type="range"
              min="0"
              max="360"
              :value="lightHue"
              class="ha-light-slider ha-light-slider--hue"
              @input="onHueChange"
            />
            <span class="ha-light-color-preview" :style="{ background: `hsl(${lightHue}, 100%, 50%)` }"></span>
          </div>
        </div>

        <!-- Saturation slider -->
        <div v-if="supportsColor" class="ha-light-section">
          <label class="ha-light-label">S&auml;ttigung</label>
          <div class="ha-light-slider-wrap">
            <input
              type="range"
              min="0"
              max="100"
              :value="lightSaturation"
              class="ha-light-slider ha-light-slider--sat"
              :style="satSliderStyle"
              @input="onSatChange"
            />
            <span class="ha-light-slider-value">{{ lightSaturation }}%</span>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
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

// ── Shared computeds ──

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

// ── Light control ──

const showLightModal = ref(false)

const lightBrightness = computed(() => {
  if (!props.state) return 0
  return (props.state.attributes.brightness as number) ?? 0
})

const supportsColor = computed(() => {
  if (!props.state) return false
  const modes = props.state.attributes.supported_color_modes as string[] | undefined
  return modes?.some(m => ['rgb', 'rgbw', 'rgbww', 'hs', 'xy'].includes(m)) ?? false
})

const lightHue = computed(() => {
  if (!props.state) return 0
  const hs = props.state.attributes.hs_color as [number, number] | undefined
  return Math.round(hs?.[0] ?? 0)
})

const lightSaturation = computed(() => {
  if (!props.state) return 100
  const hs = props.state.attributes.hs_color as [number, number] | undefined
  return Math.round(hs?.[1] ?? 100)
})

const satSliderStyle = computed(() => {
  const h = lightHue.value
  return {
    '--sat-color': `hsl(${h}, 100%, 50%)`,
  }
})

let brightnessTimer: ReturnType<typeof setTimeout> | null = null
let colorTimer: ReturnType<typeof setTimeout> | null = null

function onBrightnessChange(e: Event) {
  const val = parseInt((e.target as HTMLInputElement).value)
  if (brightnessTimer) clearTimeout(brightnessTimer)
  brightnessTimer = setTimeout(() => {
    if (val === 0) {
      callService(props.token, props.entityId, 'turn_off')
    } else {
      callService(props.token, props.entityId, 'turn_on', { brightness: val })
    }
  }, 150)
}

function onHueChange(e: Event) {
  const hue = parseInt((e.target as HTMLInputElement).value)
  if (colorTimer) clearTimeout(colorTimer)
  colorTimer = setTimeout(() => {
    callService(props.token, props.entityId, 'turn_on', {
      hs_color: [hue, lightSaturation.value],
    })
  }, 150)
}

function onSatChange(e: Event) {
  const sat = parseInt((e.target as HTMLInputElement).value)
  if (colorTimer) clearTimeout(colorTimer)
  colorTimer = setTimeout(() => {
    callService(props.token, props.entityId, 'turn_on', {
      hs_color: [lightHue.value, sat],
    })
  }, 150)
}
</script>

<style scoped>
/* ── Light control button (top-left) ── */
.light-ctrl-btn {
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 15;
  background: #e8ecf1;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d69e2e;
  opacity: 0;
  box-shadow: 3px 3px 6px #c8cdd5, -3px -3px 6px #ffffff;
  transition: opacity 0.2s, box-shadow 0.15s;
}

:global(.card:hover) .light-ctrl-btn { opacity: 1; }

.light-ctrl-btn:hover {
  box-shadow: 2px 2px 4px #c8cdd5, -2px -2px 4px #ffffff;
}

.light-ctrl-btn:active {
  box-shadow: inset 2px 2px 4px #c8cdd5, inset -2px -2px 4px #ffffff;
}

:global(.card.small .light-ctrl-btn) {
  padding: 4px;
  border-radius: 8px;
  top: 5px;
  left: 5px;
}

:global(.card.small .light-ctrl-btn) svg {
  width: 12px;
  height: 12px;
}

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

/* ── Light bulb button ── */
.bulb-btn {
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

.bulb-btn svg {
  width: 32px;
  height: 32px;
  transition: color 0.2s, filter 0.2s;
}

.bulb-btn:not(.on):not(.pressing) {
  box-shadow: 6px 6px 12px #c8cdd5, -6px -6px 12px #ffffff;
}

/* ON state: warm yellow glow */
.bulb-btn.on:not(.pressing) {
  color: #eab308;
  box-shadow:
    3px 3px 7px #c8cdd5,
    -3px -3px 7px #ffffff,
    0 0 18px rgba(234, 179, 8, 0.4),
    0 0 5px rgba(234, 179, 8, 0.25) inset;
}

.bulb-btn.on svg {
  fill: rgba(234, 179, 8, 0.15);
  filter: drop-shadow(0 0 6px rgba(234, 179, 8, 0.6));
}

.bulb-btn.pressing {
  box-shadow: inset 4px 4px 8px #c8cdd5, inset -4px -4px 8px #ffffff;
  color: #718096;
}

/* Short card */
.body-center.short .bulb-btn {
  width: 48px;
  height: 48px;
}

.body-center.short .bulb-btn svg {
  width: 24px;
  height: 24px;
}

.body-center.short .updated {
  display: none;
}

/* Compact card (1x1) */
.body-center.compact .bulb-btn {
  width: 40px;
  height: 40px;
  box-shadow: 4px 4px 8px #c8cdd5, -4px -4px 8px #ffffff;
}

.body-center.compact .bulb-btn svg {
  width: 20px;
  height: 20px;
}

.body-center.compact .bulb-btn.on:not(.pressing) {
  box-shadow:
    2px 2px 5px #c8cdd5,
    -2px -2px 5px #ffffff,
    0 0 10px rgba(234, 179, 8, 0.35),
    0 0 3px rgba(234, 179, 8, 0.2) inset;
}

.body-center.compact .bulb-btn.pressing {
  box-shadow: inset 3px 3px 6px #c8cdd5, inset -3px -3px 6px #ffffff;
}

/* ── Updated timestamp ── */
.updated {
  font-size: 0.7rem;
  color: #c0c7d0;
  letter-spacing: 0.02em;
  text-align: center;
}

.body-center.compact .updated {
  display: none;
}
</style>
