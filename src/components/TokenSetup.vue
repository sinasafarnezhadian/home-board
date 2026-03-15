<template>
  <div class="setup">
    <div class="setup-card">
      <h2>Home Assistant</h2>
      <p>
        IP-Adresse deiner Home Assistant Instanz und ein<br>
        Long-Lived Access Token aus<br>
        <strong>Profil → Sicherheit → Long-lived access tokens</strong>
      </p>

      <div class="field-group">
        <label class="field-label">URL / IP-Adresse</label>
        <input
          v-model="urlInput"
          type="text"
          placeholder="http://192.168.1.x:8123"
          autocomplete="off"
          spellcheck="false"
          @keydown.enter="tokenRef?.focus()"
        />
      </div>

      <div class="field-group">
        <label class="field-label">Access Token</label>
        <input
          ref="tokenRef"
          v-model="tokenInput"
          type="password"
          placeholder="Token einfügen..."
          @keydown.enter="submit"
        />
      </div>

      <button @click="submit" :disabled="!canSubmit">Verbinden</button>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const emit = defineEmits<{ (e: 'token', token: string): void }>()

const urlInput = ref(localStorage.getItem('ha_url') ?? 'http://homeassistant.local:8123')
const tokenInput = ref('')
const error = ref('')
const tokenRef = ref<HTMLInputElement | null>(null)

const canSubmit = computed(() => urlInput.value.trim() && tokenInput.value.trim())

async function submit() {
  const url = urlInput.value.trim().replace(/\/$/, '')
  const token = tokenInput.value.trim()
  if (!url || !token) return

  error.value = ''

  // Store URL first so the composable can use it
  localStorage.setItem('ha_url', url)

  try {
    // Try direct connection first, fall back to proxy (relative path)
    let res: Response | null = null
    try {
      res = await fetch(`${url}/api/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
    } catch {
      // CORS blocked — try via Vite dev proxy
      res = await fetch('/api/', {
        headers: { Authorization: `Bearer ${token}` },
      })
    }
    if (!res.ok) {
      error.value = 'Token ungültig oder Verbindung fehlgeschlagen.'
      localStorage.removeItem('ha_url')
      return
    }
    localStorage.setItem('ha_token', token)
    emit('token', token)
  } catch {
    localStorage.removeItem('ha_url')
    error.value = 'Home Assistant nicht erreichbar. URL und Netzwerk prüfen.'
  }
}
</script>

<style scoped>
.setup {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.setup-card {
  background: #e8ecf1;
  border: none;
  border-radius: 28px;
  padding: 40px;
  max-width: 420px;
  width: calc(100% - 48px);
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 12px 12px 24px #c8cdd5, -12px -12px 24px #ffffff;
}

h2 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2d3748;
  letter-spacing: -0.01em;
}

p {
  font-size: 0.83rem;
  color: #a0aec0;
  line-height: 1.7;
}

p strong {
  color: #718096;
  font-weight: 600;
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field-label {
  font-size: 0.72rem;
  font-weight: 600;
  color: #a0aec0;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

input {
  background: #e8ecf1;
  border: none;
  border-radius: 12px;
  color: #2d3748;
  font-size: 0.9rem;
  padding: 12px 16px;
  width: 100%;
  outline: none;
  box-shadow: inset 4px 4px 8px #c8cdd5, inset -4px -4px 8px #ffffff;
  transition: box-shadow 0.2s;
}

input:focus {
  box-shadow: inset 4px 4px 8px #c8cdd5, inset -4px -4px 8px #ffffff, 0 0 0 2px rgba(37,99,235,0.3);
}

input::placeholder { color: #c0c7d0; }

button {
  background: #e8ecf1;
  border: none;
  border-radius: 12px;
  color: #2563eb;
  cursor: pointer;
  font-size: 0.92rem;
  font-weight: 700;
  padding: 13px;
  width: 100%;
  box-shadow: 6px 6px 12px #c8cdd5, -6px -6px 12px #ffffff;
  transition: box-shadow 0.15s, color 0.15s;
  letter-spacing: 0.01em;
}

button:disabled {
  color: #c0c7d0;
  cursor: not-allowed;
  box-shadow: 3px 3px 6px #c8cdd5, -3px -3px 6px #ffffff;
}

button:hover:not(:disabled) {
  box-shadow: 4px 4px 8px #c8cdd5, -4px -4px 8px #ffffff;
}

button:active:not(:disabled) {
  box-shadow: inset 4px 4px 8px #c8cdd5, inset -4px -4px 8px #ffffff;
}

.error {
  color: #e53e3e;
  font-size: 0.82rem;
  background: rgba(229,62,62,0.06);
  border-radius: 10px;
  padding: 10px 14px;
  box-shadow: inset 2px 2px 5px #c8cdd5, inset -2px -2px 5px #ffffff;
}
</style>
