import { ref, computed, type Ref, type ComputedRef } from 'vue'
import { getAllStates, connectWs, scheduleSettingsSync } from './useHomeAssistant'
import type { HaState } from './useHomeAssistant'

interface GroupConfig {
  included: string[]
  excluded: string[]
}

// Global registry of all group instances for reloading after HA data sync
const _groupInstances = new Map<string, { reload: () => void }>()

/** Reload all group configs from localStorage (call after HA user data restores localStorage) */
export function reloadAllGroups() {
  for (const [, instance] of _groupInstances) {
    instance.reload()
  }
}

export function useEntityGroup(options: {
  key: string
  autoDetect: (entity: HaState) => boolean
  token: Ref<string | null>
}) {
  const { cache, version } = getAllStates()

  // Load persisted config
  function loadConfig(): GroupConfig {
    try {
      const raw = localStorage.getItem(`ha_group_${options.key}`)
      if (raw) {
        const parsed = JSON.parse(raw)
        return {
          included: Array.isArray(parsed.included) ? parsed.included : [],
          excluded: Array.isArray(parsed.excluded) ? parsed.excluded : [],
        }
      }
    } catch { /* ignore */ }
    return { included: [], excluded: [] }
  }

  const config = ref<GroupConfig>(loadConfig())

  function saveConfig() {
    localStorage.setItem(`ha_group_${options.key}`, JSON.stringify(config.value))
    scheduleSettingsSync()
  }

  // Register for global reload
  _groupInstances.set(options.key, {
    reload: () => { config.value = loadConfig() },
  })

  // Auto-detected entity IDs (reactive via version counter)
  const autoDetectedIds: ComputedRef<string[]> = computed(() => {
    version.value // dependency tracking
    const ids: string[] = []
    for (const [, entity] of cache) {
      if (options.autoDetect(entity)) ids.push(entity.entity_id)
    }
    return ids.sort()
  })

  // Effective entity IDs = (autoDetected - excluded) + included
  const entityIds: ComputedRef<string[]> = computed(() => {
    const excluded = new Set(config.value.excluded)
    const result = new Set<string>()
    for (const id of autoDetectedIds.value) {
      if (!excluded.has(id)) result.add(id)
    }
    for (const id of config.value.included) {
      result.add(id)
    }
    return [...result].sort()
  })

  // Current states of all effective entities
  const entities: ComputedRef<HaState[]> = computed(() => {
    version.value // dependency tracking
    return entityIds.value
      .map(id => cache.get(id))
      .filter((s): s is HaState => s != null)
  })

  function addEntity(id: string) {
    if (!config.value.included.includes(id)) {
      config.value.included.push(id)
    }
    config.value.excluded = config.value.excluded.filter(e => e !== id)
    saveConfig()
  }

  function removeEntity(id: string) {
    config.value.included = config.value.included.filter(e => e !== id)
    if (autoDetectedIds.value.includes(id) && !config.value.excluded.includes(id)) {
      config.value.excluded.push(id)
    }
    saveConfig()
  }

  return {
    entities,
    entityIds,
    autoDetectedIds,
    config,
    addEntity,
    removeEntity,
  }
}
