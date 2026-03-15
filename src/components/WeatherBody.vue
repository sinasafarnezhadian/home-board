<template>
  <!-- Weather detail button (top-left, only for weather entities) -->
  <button
    class="light-ctrl-btn"
    @click.stop="openWeatherForecast"
    title="Vorhersage"
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/>
      <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
    </svg>
  </button>

  <!-- Weather card body -->
  <div class="body-center weather-body" :class="{ compact: isCompact, short: isShort, narrow: isNarrow }">
    <div class="weather-layout">
      <div class="weather-left">
        <span class="weather-temp">{{ weatherTemp }}°</span>
        <span class="weather-condition">{{ weatherConditionLabel }}</span>
        <div v-if="!isCompact" class="weather-meta">
          <span v-if="weatherHumidity !== null" class="weather-meta-item">💧 {{ weatherHumidity }}%</span>
          <span v-if="weatherWind !== null" class="weather-meta-item">💨 {{ Math.round(weatherWind!) }} km/h</span>
        </div>
      </div>
      <div class="weather-right">
        <div class="weather-svg-icon" v-html="weatherSvgIcon"></div>
      </div>
    </div>
  </div>

  <!-- Weather forecast modal -->
  <Teleport to="body">
    <div v-if="showForecast" class="ha-modal-overlay" @click.self="showForecast = false">
      <div class="ha-modal-box ha-modal-box--wide" @click.stop>
        <div class="ha-modal-header-row">
          <h3 class="ha-modal-title">{{ customTitle || label }}</h3>
          <button class="ha-modal-close" @click="showForecast = false">✕</button>
        </div>

        <!-- Current weather summary -->
        <div class="wf-current">
          <div class="wf-current-left">
            <div class="wf-current-icon" v-html="getWeatherSvg(state?.state ?? 'cloudy', 52)"></div>
            <div class="wf-current-info">
              <span class="wf-current-condition">{{ weatherConditionLabel }}</span>
              <span class="wf-current-ago">{{ weatherUpdatedAgo }}</span>
            </div>
          </div>
          <div class="wf-current-right">
            <span class="wf-current-temp">{{ weatherTemp }}°C</span>
            <span v-if="weatherTempHigh !== null && weatherTempLow !== null" class="wf-current-hilo">{{ weatherTempHigh }}°C / {{ weatherTempLow }}°C</span>
          </div>
        </div>

        <!-- Detail rows -->
        <div class="wf-details">
          <div v-if="weatherPressure !== null" class="wf-detail-row">
            <span class="wf-detail-label">Luftdruck</span>
            <span class="wf-detail-value">{{ formatDecimal(weatherPressure!) }} hPa</span>
          </div>
          <div v-if="weatherHumidity !== null" class="wf-detail-row">
            <span class="wf-detail-label">Luftfeuchtigkeit</span>
            <span class="wf-detail-value">{{ weatherHumidity }} %</span>
          </div>
          <div v-if="weatherWind !== null" class="wf-detail-row">
            <span class="wf-detail-label">Windgeschwindigkeit</span>
            <span class="wf-detail-value">{{ formatDecimal(weatherWind!) }} km/h{{ weatherWindDir ? ` (${weatherWindDir})` : '' }}</span>
          </div>
        </div>

        <!-- Tabs -->
        <div class="wf-tabs">
          <button class="wf-tab" :class="{ active: forecastTab === 'daily' }" @click="switchForecastTab('daily')">Täglich</button>
          <button class="wf-tab" :class="{ active: forecastTab === 'hourly' }" @click="switchForecastTab('hourly')">Stündlich</button>
        </div>

        <!-- Daily forecast -->
        <template v-if="forecastTab === 'daily'">
          <div v-if="forecastDays.length" class="weather-forecast-row">
            <div
              v-for="day in forecastDays"
              :key="day.date"
              class="weather-forecast-day"
            >
              <span class="wf-date">{{ day.weekday }}</span>
              <div class="wf-icon" v-html="getWeatherSvg(day.condition, 36)"></div>
              <span class="wf-temps">{{ day.tempHigh }}°</span>
              <span class="wf-temps-low">{{ day.tempLow }}°</span>
            </div>
          </div>
          <div v-else class="ha-modal-empty">Keine Vorhersagedaten verfügbar</div>
        </template>

        <!-- Hourly forecast -->
        <template v-if="forecastTab === 'hourly'">
          <div v-if="forecastHourly.length" class="wf-hourly-scroll">
            <div
              v-for="group in forecastHourlyGrouped"
              :key="group.day"
              class="wf-hourly-group"
            >
              <span class="wf-hourly-day-label">{{ group.day }}</span>
              <div class="weather-forecast-row">
                <div
                  v-for="h in group.hours"
                  :key="h.time"
                  class="weather-forecast-day"
                >
                  <span class="wf-date">{{ h.time }}</span>
                  <div class="wf-icon" v-html="getWeatherSvg(h.condition, 32)"></div>
                  <span class="wf-temps">{{ h.temp }}°</span>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="ha-modal-empty">Keine stündlichen Daten verfügbar</div>
        </template>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { callServiceWs } from '../composables/useHomeAssistant'
import type { HaState } from '../composables/useHomeAssistant'

const props = defineProps<{
  entityId: string
  token: string
  state: HaState | null
  isCompact: boolean
  isShort: boolean
  isNarrow: boolean
  label: string
  customTitle: string
}>()

const showForecast = ref(false)

const weatherConditionMap: Record<string, { label: string }> = {
  'sunny': { label: 'Sonnig' },
  'clear-night': { label: 'Klar' },
  'partlycloudy': { label: 'Teilw. bewölkt' },
  'cloudy': { label: 'Bewölkt' },
  'rainy': { label: 'Regen' },
  'pouring': { label: 'Starkregen' },
  'snowy': { label: 'Schnee' },
  'snowy-rainy': { label: 'Schneeregen' },
  'fog': { label: 'Nebel' },
  'hail': { label: 'Hagel' },
  'lightning': { label: 'Gewitter' },
  'lightning-rainy': { label: 'Gewitter & Regen' },
  'windy': { label: 'Windig' },
  'windy-variant': { label: 'Windig' },
  'exceptional': { label: 'Außergewöhnlich' },
}

// SVG weather icons
function getWeatherSvg(condition: string, size = 100): string {
  const s = size
  const cloud = `<path d="M${s*.17} ${s*.63}a${s*.17} ${s*.17} 0 0 1 0-${s*.33}h${s*.04}a${s*.23} ${s*.23} 0 0 1 ${s*.44}-${s*.1}a${s*.19} ${s*.19} 0 0 1 ${s*.19} ${s*.1}h${s*.02}a${s*.17} ${s*.17} 0 0 1 0 ${s*.33}z" fill="none" stroke="#cfd8e3" stroke-width="${s*.04}" stroke-linejoin="round"/>`

  const svgOpen = `<svg viewBox="0 0 ${s} ${s}" width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg">`
  const svgClose = '</svg>'

  switch (condition) {
    case 'sunny':
      return `${svgOpen}
        <circle cx="${s/2}" cy="${s/2}" r="${s*.16}" fill="#f6ad35" stroke="#e8961e" stroke-width="${s*.03}"/>
        ${[0,45,90,135,180,225,270,315].map(a => {
          const rad = a * Math.PI / 180
          const x1 = s/2 + Math.cos(rad) * s * .25
          const y1 = s/2 + Math.sin(rad) * s * .25
          const x2 = s/2 + Math.cos(rad) * s * .35
          const y2 = s/2 + Math.sin(rad) * s * .35
          return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#f6ad35" stroke-width="${s*.04}" stroke-linecap="round"/>`
        }).join('')}
      ${svgClose}`

    case 'clear-night':
      return `${svgOpen}<path d="M${s*.58} ${s*.15}a${s*.33} ${s*.33} 0 1 0 ${s*.27} ${s*.42} ${s*.25} ${s*.25} 0 0 1-${s*.27}-${s*.42}z" fill="#cfd8e3" stroke="#a0aec0" stroke-width="${s*.03}"/>${svgClose}`

    case 'partlycloudy':
      return `${svgOpen}
        <circle cx="${s*.62}" cy="${s*.3}" r="${s*.13}" fill="#f6ad35" stroke="#e8961e" stroke-width="${s*.03}"/>
        ${[0,45,90,135,180,225,270,315].map(a => {
          const rad = a * Math.PI / 180
          return `<line x1="${s*.62 + Math.cos(rad)*s*.19}" y1="${s*.3 + Math.sin(rad)*s*.19}" x2="${s*.62 + Math.cos(rad)*s*.25}" y2="${s*.3 + Math.sin(rad)*s*.25}" stroke="#f6ad35" stroke-width="${s*.03}" stroke-linecap="round"/>`
        }).join('')}
        ${cloud}
      ${svgClose}`

    case 'cloudy':
      return `${svgOpen}${cloud}${svgClose}`

    case 'rainy':
    case 'pouring':
      return `${svgOpen}${cloud}
        <line x1="${s*.3}" y1="${s*.71}" x2="${s*.25}" y2="${s*.85}" stroke="#5b9bd5" stroke-width="${s*.035}" stroke-linecap="round"/>
        <line x1="${s*.5}" y1="${s*.71}" x2="${s*.45}" y2="${s*.85}" stroke="#5b9bd5" stroke-width="${s*.035}" stroke-linecap="round"/>
        <line x1="${s*.7}" y1="${s*.71}" x2="${s*.65}" y2="${s*.85}" stroke="#5b9bd5" stroke-width="${s*.035}" stroke-linecap="round"/>
      ${svgClose}`

    case 'snowy':
      return `${svgOpen}${cloud}
        <line x1="${s*.35}" y1="${s*.73}" x2="${s*.35}" y2="${s*.88}" stroke="#5bbbf5" stroke-width="${s*.03}" stroke-linecap="round"/>
        <line x1="${s*.28}" y1="${s*.805}" x2="${s*.42}" y2="${s*.805}" stroke="#5bbbf5" stroke-width="${s*.03}" stroke-linecap="round"/>
        <line x1="${s*.65}" y1="${s*.73}" x2="${s*.65}" y2="${s*.88}" stroke="#5bbbf5" stroke-width="${s*.03}" stroke-linecap="round"/>
        <line x1="${s*.58}" y1="${s*.805}" x2="${s*.72}" y2="${s*.805}" stroke="#5bbbf5" stroke-width="${s*.03}" stroke-linecap="round"/>
      ${svgClose}`

    case 'snowy-rainy':
      return `${svgOpen}${cloud}
        <line x1="${s*.3}" y1="${s*.71}" x2="${s*.25}" y2="${s*.85}" stroke="#5b9bd5" stroke-width="${s*.035}" stroke-linecap="round"/>
        <line x1="${s*.65}" y1="${s*.73}" x2="${s*.65}" y2="${s*.86}" stroke="#5bbbf5" stroke-width="${s*.03}" stroke-linecap="round"/>
        <line x1="${s*.59}" y1="${s*.795}" x2="${s*.71}" y2="${s*.795}" stroke="#5bbbf5" stroke-width="${s*.03}" stroke-linecap="round"/>
      ${svgClose}`

    case 'fog':
      return `${svgOpen}
        <line x1="${s*.2}" y1="${s*.35}" x2="${s*.8}" y2="${s*.35}" stroke="#a0aec0" stroke-width="${s*.04}" stroke-linecap="round"/>
        <line x1="${s*.15}" y1="${s*.5}" x2="${s*.85}" y2="${s*.5}" stroke="#cfd8e3" stroke-width="${s*.04}" stroke-linecap="round"/>
        <line x1="${s*.2}" y1="${s*.65}" x2="${s*.8}" y2="${s*.65}" stroke="#a0aec0" stroke-width="${s*.04}" stroke-linecap="round"/>
      ${svgClose}`

    case 'lightning':
      return `${svgOpen}${cloud}
        <polygon points="${s*.45},${s*.62} ${s*.52},${s*.75} ${s*.47},${s*.75} ${s*.55},${s*.92}" fill="#f6ad35" stroke="#e8961e" stroke-width="${s*.015}" stroke-linejoin="round"/>
      ${svgClose}`

    case 'lightning-rainy':
      return `${svgOpen}${cloud}
        <polygon points="${s*.42},${s*.62} ${s*.48},${s*.75} ${s*.44},${s*.75} ${s*.5},${s*.9}" fill="#f6ad35" stroke="#e8961e" stroke-width="${s*.015}" stroke-linejoin="round"/>
        <line x1="${s*.65}" y1="${s*.71}" x2="${s*.6}" y2="${s*.85}" stroke="#5b9bd5" stroke-width="${s*.035}" stroke-linecap="round"/>
      ${svgClose}`

    case 'windy':
    case 'windy-variant':
      return `${svgOpen}
        <path d="M${s*.15} ${s*.4} Q${s*.4} ${s*.3} ${s*.65} ${s*.4}" fill="none" stroke="#a0aec0" stroke-width="${s*.04}" stroke-linecap="round"/>
        <path d="M${s*.2} ${s*.55} Q${s*.5} ${s*.45} ${s*.8} ${s*.55}" fill="none" stroke="#cfd8e3" stroke-width="${s*.04}" stroke-linecap="round"/>
        <path d="M${s*.15} ${s*.7} Q${s*.35} ${s*.6} ${s*.55} ${s*.7}" fill="none" stroke="#a0aec0" stroke-width="${s*.04}" stroke-linecap="round"/>
      ${svgClose}`

    case 'hail':
      return `${svgOpen}${cloud}
        <circle cx="${s*.3}" cy="${s*.8}" r="${s*.035}" fill="#5bbbf5"/>
        <circle cx="${s*.5}" cy="${s*.82}" r="${s*.035}" fill="#5bbbf5"/>
        <circle cx="${s*.7}" cy="${s*.78}" r="${s*.035}" fill="#5bbbf5"/>
      ${svgClose}`

    default:
      return `${svgOpen}${cloud}${svgClose}`
  }
}

const weatherSvgIcon = computed(() => {
  if (!props.state) return getWeatherSvg('cloudy')
  return getWeatherSvg(props.state.state)
})

const weatherConditionLabel = computed(() => {
  if (!props.state) return ''
  return weatherConditionMap[props.state.state]?.label ?? props.state.state
})

const weatherTemp = computed(() => {
  if (!props.state) return '--'
  const t = props.state.attributes.temperature as number | undefined
  return t != null ? Math.round(t) : '--'
})

const weatherHumidity = computed(() => {
  if (!props.state) return null
  return (props.state.attributes.humidity as number) ?? null
})

const weatherWind = computed(() => {
  if (!props.state) return null
  return (props.state.attributes.wind_speed as number) ?? null
})

const weatherPressure = computed(() => {
  if (!props.state) return null
  return (props.state.attributes.pressure as number) ?? null
})

// Forecast
interface ForecastDay {
  date: string
  weekday: string
  condition: string
  tempHigh: number
  tempLow: number
  precipitation: number | null
}

interface ForecastHour {
  datetime: string
  time: string
  condition: string
  temp: number
}

interface HourlyGroup {
  day: string
  hours: ForecastHour[]
}

const forecastDays = ref<ForecastDay[]>([])
const forecastHourly = ref<ForecastHour[]>([])
const forecastTab = ref<'daily' | 'hourly'>('daily')

const forecastHourlyGrouped = computed<HourlyGroup[]>(() => {
  const dayNames = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
  const groups: HourlyGroup[] = []
  let current: HourlyGroup | null = null
  for (const h of forecastHourly.value) {
    const d = new Date(h.datetime)
    const dayLabel = dayNames[d.getDay()]
    if (!current || current.day !== dayLabel) {
      current = { day: dayLabel, hours: [] }
      groups.push(current)
    }
    current.hours.push(h)
  }
  return groups
})

const weatherUpdatedAgo = computed(() => {
  if (!props.state) return ''
  const updated = new Date(props.state.last_updated)
  const now = new Date()
  const diffMin = Math.round((now.getTime() - updated.getTime()) / 60000)
  if (diffMin < 1) return 'Gerade eben'
  if (diffMin < 60) return `Vor ${diffMin} Min.`
  const diffH = Math.round(diffMin / 60)
  if (diffH < 24) return `Vor ${diffH} Stunde${diffH > 1 ? 'n' : ''}`
  return `Vor ${Math.round(diffH / 24)} Tag${Math.round(diffH / 24) > 1 ? 'en' : ''}`
})

const weatherTempHigh = computed(() => {
  if (!props.state) return null
  // From today's forecast or attributes
  if (forecastDays.value.length) return forecastDays.value[0].tempHigh
  return null
})

const weatherTempLow = computed(() => {
  if (!props.state) return null
  if (forecastDays.value.length) return forecastDays.value[0].tempLow
  return null
})

const weatherWindDir = computed(() => {
  if (!props.state) return ''
  const bearing = props.state.attributes.wind_bearing as number | undefined
  if (bearing == null) return ''
  const dirs = ['N', 'NNO', 'NO', 'ONO', 'O', 'OSO', 'SO', 'SSO', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
  return dirs[Math.round(bearing / 22.5) % 16]
})

function formatDecimal(n: number): string {
  return n.toLocaleString('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
}

async function openWeatherForecast() {
  showForecast.value = true
  forecastTab.value = 'daily'
  await fetchForecastData('daily')
}

async function switchForecastTab(tab: 'daily' | 'hourly') {
  forecastTab.value = tab
  if (tab === 'hourly' && forecastHourly.value.length === 0) {
    await fetchForecastData('hourly')
  }
}

async function fetchForecastData(type: 'daily' | 'hourly') {
  // Try forecast attribute first (older HA)
  if (type === 'daily') {
    const fc = props.state?.attributes.forecast as any[] | undefined
    if (fc && fc.length) {
      forecastDays.value = parseForecast(fc)
      return
    }
  }
  // Primary: WebSocket service call with return_response
  try {
    const result = await callServiceWs(props.entityId, 'weather', 'get_forecasts', { type })
    // Response: { context: {...}, response: { "weather.entity": { forecast: [...] } } }
    const responseData = result?.response ?? result
    const inner = responseData?.[props.entityId] ?? (responseData ? Object.values(responseData)[0] : null)
    const forecasts: any[] = (inner as any)?.forecast ?? []
    if (forecasts.length) {
      if (type === 'daily') forecastDays.value = parseForecast(forecasts)
      else forecastHourly.value = parseHourlyForecast(forecasts)
      return
    }
  } catch {
    // Fallback: REST API
    try {
      const res = await fetch(`/api/services/weather/get_forecasts`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${props.token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ entity_id: props.entityId, type }),
      })
      if (res.ok) {
        const data = await res.json()
        let forecasts: any[] = []
        if (data?.[props.entityId]) forecasts = data[props.entityId].forecast ?? []
        else if (Array.isArray(data)) forecasts = data[0]?.forecast ?? []
        else {
          const firstVal = Object.values(data)[0] as any
          forecasts = firstVal?.forecast ?? data?.forecast ?? []
        }
        if (forecasts.length) {
          if (type === 'daily') forecastDays.value = parseForecast(forecasts)
          else forecastHourly.value = parseHourlyForecast(forecasts)
          return
        }
      }
    } catch { /* ignore */ }
  }
  if (type === 'daily') forecastDays.value = []
  else forecastHourly.value = []
}

function parseForecast(fc: any[]): ForecastDay[] {
  const days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
  return fc.slice(0, 6).map(f => {
    const d = new Date(f.datetime)
    return {
      date: f.datetime,
      weekday: days[d.getDay()],
      condition: f.condition ?? 'cloudy',
      tempHigh: Math.round(f.temperature ?? f.templow ?? 0),
      tempLow: Math.round(f.templow ?? f.temperature ?? 0),
      precipitation: f.precipitation_probability ?? f.precipitation ?? null,
    }
  })
}

function parseHourlyForecast(fc: any[]): ForecastHour[] {
  return fc.slice(0, 24).map(f => {
    const d = new Date(f.datetime)
    return {
      datetime: f.datetime,
      time: d.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }),
      condition: f.condition ?? 'cloudy',
      temp: Math.round(f.temperature ?? 0),
    }
  })
}
</script>

<style scoped>
/* ── Weather card body ── */
.weather-body {
  justify-content: center;
}

.weather-layout {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 8px;
  flex: 1;
}

.weather-left {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.weather-temp {
  font-size: 2.6rem;
  font-weight: 700;
  color: #2d3748;
  line-height: 1;
  letter-spacing: -0.03em;
}

.weather-condition {
  font-size: 0.72rem;
  color: #a0aec0;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.weather-meta {
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-top: 4px;
}

.weather-meta-item {
  font-size: 0.68rem;
  color: #a0aec0;
  font-weight: 500;
}

.weather-right {
  flex-shrink: 0;
}

.weather-svg-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Short weather (1 row, wide) */
.weather-body.short .weather-temp {
  font-size: 1.4rem;
}

.weather-body.short .weather-meta {
  display: none;
}

.weather-body.short .weather-svg-icon :deep(svg) {
  width: 40px;
  height: 40px;
}

/* Narrow weather (1 col, 2+ rows) */
.weather-body.narrow .weather-temp {
  font-size: 1.8rem;
}

.weather-body.narrow .weather-condition {
  font-size: 0.6rem;
}

/* Compact weather (1x1) */
.weather-body.compact .weather-temp {
  font-size: 1.5rem;
}

.weather-body.compact .weather-condition {
  font-size: 0.55rem;
}

.weather-body.compact .weather-meta {
  display: none;
}

.weather-body.compact .weather-svg-icon :deep(svg) {
  width: 28px;
  height: 28px;
}

/* ── Forecast button (top-left, positioned absolutely inside parent card) ── */
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
</style>
