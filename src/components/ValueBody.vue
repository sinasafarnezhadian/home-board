<template>
  <div class="body-center" :class="{ compact: isCompact, short: isShort, narrow: isNarrow }">
    <div class="state value center-wrap">
      <span class="number">{{ formattedValue }}</span>
      <span class="unit">{{ unit }}</span>
    </div>
    <div v-if="lastUpdated && !isCompact" class="updated">
      Aktualisiert: {{ lastUpdated }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { HaState } from '../composables/useHomeAssistant'

const props = defineProps<{
  entityId: string
  token: string
  state: HaState | null
  isCompact: boolean
  isShort: boolean
  isNarrow: boolean
}>()

const formattedValue = computed(() => {
  if (!props.state) return '--'
  const val = parseFloat(props.state.state)
  return isNaN(val) ? props.state.state : val.toFixed(1)
})

const unit = computed(() => {
  return (props.state?.attributes.unit_of_measurement as string) ?? ''
})

const lastUpdated = computed(() => {
  if (!props.state) return null
  return new Date(props.state.last_updated).toLocaleTimeString('de-DE')
})
</script>

<style scoped>
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

.state {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 6px;
}

.state.value { padding: 8px 0 4px; }

.number {
  font-size: 3.4rem;
  font-weight: 700;
  color: #2d3748;
  line-height: 1;
  letter-spacing: -0.03em;
}

.unit {
  font-size: 1.3rem;
  color: #a0aec0;
  font-weight: 400;
}

.updated {
  font-size: 0.7rem;
  color: #c0c7d0;
  letter-spacing: 0.02em;
  text-align: center;
}

/* Short card (1 row, wide) */
.body-center.short .number {
  font-size: 1.4rem;
}

.body-center.short .unit {
  font-size: 0.72rem;
}

.body-center.short .updated {
  display: none;
}

/* Compact card (1x1) */
.body-center.compact .number {
  font-size: 1.6rem;
}

.body-center.compact .unit {
  font-size: 0.65rem;
}

/* Narrow card (1 col, 2+ rows) */
.body-center.narrow .number {
  font-size: 1.8rem;
}

.body-center.narrow .unit {
  font-size: 0.8rem;
}
</style>
