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
