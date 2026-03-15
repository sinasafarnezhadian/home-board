<template>
  <button
    class="pill"
    @click="showModal = true"
  >
    <span class="pill-icon">🌡</span>
    <span class="pill-label">{{ tempLabel }}</span>
  </button>

  <Teleport to="body">
    <div v-if="showModal" class="ha-modal-overlay" @click.self="showModal = false">
      <div class="ha-modal-box" @click.stop>
        <div class="ha-modal-header-row">
          <h3 class="ha-modal-title">Klima</h3>
          <div class="ha-modal-header-actions">
            <button class="ha-modal-icon-btn" :class="{ active: editMode }" @click="toggleEdit" title="Bearbeiten">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </button>
            <button class="ha-modal-close" @click="showModal = false; editMode = false">✕</button>
          </div>
        </div>

        <!-- Normal view -->
        <template v-if="!editMode">
          <div v-if="!group.entities.value.length" class="ha-modal-empty">
            Keine Klimasensoren gefunden
          </div>
          <ul v-else class="ha-modal-entity-list">
            <li
              v-for="e in group.entities.value"
              :key="e.entity_id"
              class="ha-modal-entity-row"
            >
              <span class="ha-modal-entity-name">{{ e.attributes.friendly_name ?? e.entity_id }}</span>
              <span class="ha-modal-entity-value">{{ formatTemp(e) }}</span>
            </li>
          </ul>
        </template>

        <!-- Edit mode -->
        <template v-else>
          <!-- Add entity -->
          <div class="ha-modal-input-wrap">
            <input
              v-model="searchQuery"
              class="ha-modal-input"
              placeholder="Entity suchen und hinzufügen..."
              autocomplete="off"
              @input="onSearch"
              @keydown.enter.prevent="addFirst"
              @keydown.escape="searchQuery = ''; searchResults = []"
            />
            <ul v-if="searchResults.length" class="ha-modal-suggestions">
              <li
                v-for="s in searchResults"
                :key="s.entity_id"
                class="ha-modal-suggestion-item"
                @mousedown.prevent="addEntity(s.entity_id)"
              >
                <span class="ha-modal-s-entity">{{ s.entity_id }}</span>
                <span class="ha-modal-s-name">{{ s.attributes.friendly_name ?? '' }}</span>
              </li>
            </ul>
          </div>

          <!-- Current entities with remove button -->
          <ul class="ha-modal-entity-list">
            <li
              v-for="id in group.entityIds.value"
              :key="id"
              class="ha-modal-entity-row"
            >
              <span class="ha-modal-entity-name">{{ entityName(id) }}</span>
              <button class="ha-modal-remove-btn" @click="group.removeEntity(id)" title="Entfernen">✕</button>
            </li>
          </ul>
          <div v-if="!group.entityIds.value.length" class="ha-modal-empty">
            Keine Sensoren ausgewählt
          </div>
        </template>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref, toRef } from 'vue'
import { useEntityGroup } from '../composables/useEntityGroup'
import { getAllStates } from '../composables/useHomeAssistant'
import type { HaState } from '../composables/useHomeAssistant'

const props = defineProps<{ token: string }>()

const group = useEntityGroup({
  key: 'climate',
  autoDetect: (e) =>
    e.entity_id.startsWith('climate.') ||
    (e.entity_id.startsWith('sensor.') && e.attributes.device_class === 'temperature'),
  token: toRef(() => props.token) as any,
})

const { cache, version } = getAllStates()

function getTemp(e: HaState): number | null {
  if (e.entity_id.startsWith('climate.')) {
    const t = e.attributes.current_temperature
    return typeof t === 'number' ? t : null
  }
  const val = parseFloat(e.state)
  return isNaN(val) ? null : val
}

function formatTemp(e: HaState): string {
  const t = getTemp(e)
  if (t === null) return e.state
  const unit = (e.attributes.unit_of_measurement as string) ?? '°C'
  return `${t.toFixed(1)} ${unit}`
}

const tempLabel = computed(() => {
  const temps = group.entities.value.map(getTemp).filter((t): t is number => t !== null)
  if (!temps.length) return '-- °C'
  const min = Math.min(...temps)
  const max = Math.max(...temps)
  if (min === max) return `${min.toFixed(1)} °C`
  return `${min.toFixed(1)}–${max.toFixed(1)} °C`
})

function entityName(id: string): string {
  version.value
  const e = cache.get(id)
  return (e?.attributes.friendly_name as string) ?? id
}

const showModal = ref(false)
const editMode = ref(false)
const searchQuery = ref('')
const searchResults = ref<HaState[]>([])

function toggleEdit() {
  editMode.value = !editMode.value
  searchQuery.value = ''
  searchResults.value = []
}

function onSearch() {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) { searchResults.value = []; return }
  const currentIds = new Set(group.entityIds.value)
  const results: HaState[] = []
  version.value
  for (const [, e] of cache) {
    if (currentIds.has(e.entity_id)) continue
    if (
      e.entity_id.toLowerCase().includes(q) ||
      ((e.attributes.friendly_name as string) ?? '').toLowerCase().includes(q)
    ) {
      results.push(e)
      if (results.length >= 8) break
    }
  }
  searchResults.value = results
}

function addEntity(id: string) {
  group.addEntity(id)
  searchQuery.value = ''
  searchResults.value = []
}

function addFirst() {
  if (searchResults.value.length) {
    addEntity(searchResults.value[0].entity_id)
  }
}
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
  color: #718096;
  box-shadow: 3px 3px 6px #c8cdd5, -3px -3px 6px #ffffff;
  transition: box-shadow 0.15s, color 0.15s;
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
