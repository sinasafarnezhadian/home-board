import { ref, reactive } from 'vue'

export interface HaState {
  entity_id: string
  state: string
  attributes: Record<string, unknown>
  last_changed: string
  last_updated: string
}

// ── Panel mode ──

let _panelMode = false
const _panelToken = ref<string | null>(null)

export function setPanelMode(v: boolean) { _panelMode = v }
export function isPanelMode() { return _panelMode }
export function setPanelToken(token: string) { _panelToken.value = token }
export function getPanelToken() { return _panelToken }

// ── Auth Key (long-lived access token, overrides panel token for REST calls) ──

const _authKey = ref<string | null>(localStorage.getItem('ha_auth_key'))

export function getAuthKey() { return _authKey }
export function setAuthKey(key: string | null) {
  _authKey.value = key
  if (key) localStorage.setItem('ha_auth_key', key)
  else localStorage.removeItem('ha_auth_key')
}

/** Returns the best available token: auth key > panel token > local token */
export function getEffectiveToken(fallback?: string): string {
  return _authKey.value || fallback || ''
}

// ── HA URL helpers ──

export function getHaBaseUrl(): string {
  if (_panelMode) return ''
  return localStorage.getItem('ha_url')?.replace(/\/$/, '') ?? ''
}

export function getHaWsUrl(): string {
  const base = getHaBaseUrl()
  if (base) {
    try {
      const u = new URL(base)
      const proto = u.protocol === 'https:' ? 'wss:' : 'ws:'
      return `${proto}//${u.host}/api/websocket`
    } catch { /* fall through */ }
  }
  const proto = location.protocol === 'https:' ? 'wss:' : 'ws:'
  return `${proto}//${location.host}/api/websocket`
}

export function getHaApiPath(path: string): string {
  const base = getHaBaseUrl()
  return base ? `${base}${path}` : path
}

// ── REST API helpers ──

export async function callService(
  token: string,
  entityId: string,
  service: string,
  serviceData?: Record<string, unknown>
) {
  const domain = entityId.split('.')[0]
  await fetch(getHaApiPath(`/api/services/${domain}/${service}`), {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ entity_id: entityId, ...serviceData }),
  })
}

export async function fetchAllStates(token: string): Promise<HaState[]> {
  const res = await fetch(getHaApiPath('/api/states'), {
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

// ── HA User Data Storage (cross-device sync via HA server) ──

const HA_STORAGE_KEY = 'homeboard'

export interface HaUserData {
  pages?: any[]
  authKey?: string | null
  activePage?: string
  groups?: Record<string, { included: string[]; excluded: string[] }>
  cardSettings?: Record<string, { title?: string; showTitle?: boolean }>
}

const _userDataLoaded = ref(false)
const _userData = ref<HaUserData | null>(null)
const _userDataCallbacks: ((data: HaUserData | null) => void)[] = []

export function isUserDataLoaded() { return _userDataLoaded }

export function onUserDataReady(cb: (data: HaUserData | null) => void) {
  if (_userDataLoaded.value) {
    cb(_userData.value)
  } else {
    _userDataCallbacks.push(cb)
  }
}

// ── Shared WebSocket connection ──

type StateListener = (state: HaState) => void

let ws: WebSocket | null = null
let wsToken = ''
let msgId = 1
let reconnectTimer: ReturnType<typeof setTimeout> | null = null
const listeners = new Map<string, Set<StateListener>>()
const stateCache = new Map<string, HaState>()
const _stateCacheVersion = ref(0)
let authenticated = false
let pendingAuth: (() => void)[] = []

// Pending responses for service calls with return_response
const pendingResponses = new Map<number, { resolve: (data: any) => void; reject: (err: Error) => void }>()

function getWsUrl() {
  return getHaWsUrl()
}

function connectWs(token: string) {
  wsToken = token // always store latest token for reconnects
  if (ws && (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING)) return
  authenticated = false

  ws = new WebSocket(getWsUrl())

  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data)

    if (msg.type === 'auth_required') {
      ws!.send(JSON.stringify({ type: 'auth', access_token: token }))
      return
    }

    if (msg.type === 'auth_ok') {
      authenticated = true
      // Fetch all current states
      const id = msgId++
      ws!.send(JSON.stringify({ id, type: 'get_states' }))
      // Subscribe to state changes
      const subId = msgId++
      ws!.send(JSON.stringify({ id: subId, type: 'subscribe_events', event_type: 'state_changed' }))
      // Load user data from HA server (cross-device sync)
      const udId = msgId++
      pendingResponses.set(udId, {
        resolve: (result: any) => {
          const data: HaUserData | null = result?.value ?? null
          console.log('[HomeBoard] HA user data loaded:', data ? { hasPages: !!data.pages?.length, hasGroups: !!data.groups && Object.keys(data.groups).length, hasAuthKey: !!data.authKey, groupKeys: data.groups ? Object.keys(data.groups) : [] } : 'null/empty')
          _userData.value = data
          _userDataLoaded.value = true
          if (data?.authKey) {
            _authKey.value = data.authKey
            localStorage.setItem('ha_auth_key', data.authKey)
          }
          for (const cb of _userDataCallbacks) cb(data)
          _userDataCallbacks.length = 0
        },
        reject: (err) => {
          console.error('[HomeBoard] Failed to load HA user data:', err)
          _userDataLoaded.value = true
          for (const cb of _userDataCallbacks) cb(null)
          _userDataCallbacks.length = 0
        },
      })
      ws!.send(JSON.stringify({ id: udId, type: 'frontend/get_user_data', key: HA_STORAGE_KEY }))
      // Resolve pending auth
      for (const cb of pendingAuth) cb()
      pendingAuth = []
      return
    }

    if (msg.type === 'auth_invalid') {
      console.error('HA WebSocket auth failed')
      return
    }

    // Check pending service call responses FIRST (before get_states handler)
    if (msg.type === 'result' && pendingResponses.has(msg.id)) {
      const { resolve, reject } = pendingResponses.get(msg.id)!
      pendingResponses.delete(msg.id)
      if (msg.success) resolve(msg.result)
      else reject(new Error(msg.error?.message ?? 'Service call failed'))
      return
    }

    // get_states result
    if (msg.type === 'result' && msg.success && Array.isArray(msg.result)) {
      for (const s of msg.result as HaState[]) {
        stateCache.set(s.entity_id, s)
        notifyListeners(s.entity_id, s)
      }
      _stateCacheVersion.value++
      return
    }

    // Subscription events (render_template, etc.)
    if (msg.type === 'event' && _subscriptionHandlers.has(msg.id)) {
      _subscriptionHandlers.get(msg.id)!(msg.event)
      return
    }

    // state_changed event
    if (msg.type === 'event' && msg.event?.event_type === 'state_changed') {
      const newState = msg.event.data.new_state as HaState | null
      if (newState) {
        stateCache.set(newState.entity_id, newState)
        _stateCacheVersion.value++
        notifyListeners(newState.entity_id, newState)
      }
    }
  }

  ws.onclose = () => {
    authenticated = false
    // Reconnect after 5s
    if (reconnectTimer) clearTimeout(reconnectTimer)
    reconnectTimer = setTimeout(() => {
      ws = null
      connectWs(token)
    }, 5000)
  }

  ws.onerror = () => {
    ws?.close()
  }
}

function notifyListeners(entityId: string, state: HaState) {
  const set = listeners.get(entityId)
  if (set) {
    for (const cb of set) cb(state)
  }
}

function subscribe(entityId: string, cb: StateListener) {
  if (!listeners.has(entityId)) listeners.set(entityId, new Set())
  listeners.get(entityId)!.add(cb)
  // If we already have cached state, notify immediately
  const cached = stateCache.get(entityId)
  if (cached) cb(cached)
}

function unsubscribe(entityId: string, cb: StateListener) {
  const set = listeners.get(entityId)
  if (set) {
    set.delete(cb)
    if (set.size === 0) listeners.delete(entityId)
  }
}

function disconnectWs() {
  if (reconnectTimer) { clearTimeout(reconnectTimer); reconnectTimer = null }
  if (ws) { ws.close(); ws = null }
  authenticated = false
  stateCache.clear()
  listeners.clear()
  _subscriptionHandlers.clear()
  _userDataLoaded.value = false
  _userData.value = null
}

// ── HA User Data Save ──

export async function saveHaUserData(data: HaUserData): Promise<void> {
  _userData.value = data
  if (!ws || !authenticated) {
    console.warn('[HomeBoard] Cannot save to HA: WS not connected', { ws: !!ws, authenticated })
    return
  }
  console.log('[HomeBoard] Saving to HA:', { hasPages: !!data.pages?.length, hasGroups: !!data.groups && Object.keys(data.groups).length, groupKeys: data.groups ? Object.keys(data.groups) : [] })
  const id = msgId++
  return new Promise((resolve, reject) => {
    pendingResponses.set(id, {
      resolve: () => { console.log('[HomeBoard] Save to HA successful'); resolve() },
      reject: (err) => { console.error('[HomeBoard] Save to HA failed:', err); reject(err) },
    })
    ws!.send(JSON.stringify({ id, type: 'frontend/set_user_data', key: HA_STORAGE_KEY, value: data }))
  })
}

// ── Debounced settings sync ──
// Collects groups and card settings from localStorage, merges into user data, saves to HA

let _syncTimer: ReturnType<typeof setTimeout> | null = null

export function collectLocalSettings(): Pick<HaUserData, 'groups' | 'cardSettings'> {
  const groups: Record<string, { included: string[]; excluded: string[] }> = {}
  const cardSettings: Record<string, { title?: string; showTitle?: boolean }> = {}

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (!key) continue

    if (key.startsWith('ha_group_')) {
      const groupName = key.slice('ha_group_'.length)
      try {
        const parsed = JSON.parse(localStorage.getItem(key)!)
        groups[groupName] = {
          included: Array.isArray(parsed.included) ? parsed.included : [],
          excluded: Array.isArray(parsed.excluded) ? parsed.excluded : [],
        }
      } catch { /* ignore */ }
    }

    if (key.startsWith('ha_title_')) {
      const entityId = key.slice('ha_title_'.length)
      if (!cardSettings[entityId]) cardSettings[entityId] = {}
      cardSettings[entityId].title = localStorage.getItem(key) ?? ''
    }

    if (key.startsWith('ha_showtitle_')) {
      const entityId = key.slice('ha_showtitle_'.length)
      if (!cardSettings[entityId]) cardSettings[entityId] = {}
      cardSettings[entityId].showTitle = localStorage.getItem(key) !== 'false'
    }
  }

  return { groups, cardSettings }
}

export function scheduleSettingsSync() {
  if (_syncTimer) clearTimeout(_syncTimer)
  _syncTimer = setTimeout(() => {
    _syncTimer = null
    if (!ws || !authenticated) {
      console.warn('[HomeBoard] scheduleSettingsSync skipped: WS not ready', { ws: !!ws, authenticated })
      return
    }
    const local = collectLocalSettings()
    console.log('[HomeBoard] scheduleSettingsSync firing:', { groupKeys: local.groups ? Object.keys(local.groups) : [] })
    const merged: HaUserData = { ...(_userData.value ?? {}), ...local }
    saveHaUserData(merged)
  }, 500)
}

// ── WebSocket service call with response ──

export async function callServiceWs(
  entityId: string,
  domain: string,
  service: string,
  serviceData?: Record<string, unknown>
): Promise<any> {
  if (!ws || !authenticated) throw new Error('WebSocket not connected')
  const id = msgId++
  return new Promise((resolve, reject) => {
    pendingResponses.set(id, { resolve, reject })
    ws!.send(JSON.stringify({
      id,
      type: 'call_service',
      domain,
      service,
      service_data: serviceData ?? {},
      target: { entity_id: entityId },
      return_response: true,
    }))
    setTimeout(() => {
      if (pendingResponses.has(id)) {
        pendingResponses.delete(id)
        reject(new Error('Timeout'))
      }
    }, 10000)
  })
}

// ── Template rendering via WS subscription ──
// HA sends continuous updates when referenced entities change

const _subscriptionHandlers = new Map<number, (event: any) => void>()

export function subscribeRenderTemplate(
  template: string,
  onResult: (rendered: string) => void,
  onError?: (err: string) => void,
): { unsubscribe: () => void } {
  let subId: number | null = null

  function start() {
    if (!ws || !authenticated) {
      pendingAuth.push(start)
      return
    }
    const id = msgId++
    subId = id
    // Register event handler for this subscription
    _subscriptionHandlers.set(id, (event: any) => {
      const result = event?.result
      if (typeof result === 'string') onResult(result)
    })
    pendingResponses.set(id, {
      resolve: () => { /* subscription confirmed, events will flow via _subscriptionHandlers */ },
      reject: (err) => {
        _subscriptionHandlers.delete(id)
        onError?.(err.message)
        subId = null
      },
    })
    ws!.send(JSON.stringify({ id, type: 'render_template', template }))
  }

  start()

  return {
    unsubscribe: () => {
      if (subId !== null) {
        _subscriptionHandlers.delete(subId)
        if (ws && authenticated) {
          const id = msgId++
          ws.send(JSON.stringify({ id, type: 'unsubscribe_events', subscription: subId }))
        }
      }
      subId = null
    },
  }
}

// ── Per-entity sensor composable ──

export function useSensor(initialEntityId: string) {
  let entityId = initialEntityId
  const state = ref<HaState | null>(null)
  const error = ref<string | null>(null)
  const loading = ref(true)
  let listener: StateListener | null = null

  function onState(s: HaState) {
    state.value = s
    error.value = null
    loading.value = false
  }

  function start(token: string, newEntityId?: string) {
    stop()
    if (newEntityId) entityId = newEntityId
    loading.value = true
    error.value = null
    connectWs(token)
    listener = onState
    subscribe(entityId, listener)

    // If WS not yet authenticated, fetch once via REST as fallback
    if (!authenticated) {
      fetch(getHaApiPath(`/api/states/${entityId}`), {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      })
        .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json() })
        .then(s => {
          if (loading.value) { state.value = s; loading.value = false; error.value = null }
        })
        .catch(e => {
          if (loading.value) { error.value = e instanceof Error ? e.message : 'Fehler'; loading.value = false }
        })
    }
  }

  function stop() {
    if (listener) {
      unsubscribe(entityId, listener)
      listener = null
    }
  }

  return { state, error, loading, start, stop }
}

export function getAllStates() {
  return { cache: stateCache, version: _stateCacheVersion }
}

export { disconnectWs, connectWs }
