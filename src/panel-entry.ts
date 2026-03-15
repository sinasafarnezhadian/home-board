import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { setPanelMode, setPanelToken } from './composables/useHomeAssistant'

class HomeBoardPanel extends HTMLElement {
  private _app: ReturnType<typeof createApp> | null = null

  set hass(value: any) {
    const newToken = value?.auth?.data?.access_token ?? null
    if (newToken) {
      setPanelToken(newToken)
    }
    if (!this._app && newToken) {
      setPanelMode(true)

      // Create our own shadow root so we control the style boundary.
      // vite-plugin-css-injected-by-js puts all CSS into document.head,
      // but HA's panel host (ha-panel-custom) uses shadow DOM, so those
      // styles never reach our elements. We copy them into our own shadow.
      const shadow = this.attachShadow({ mode: 'open' })

      document.head.querySelectorAll('style').forEach(s => {
        if (s.textContent && s.textContent.includes('.dashboard')) {
          const clone = document.createElement('style')
          clone.textContent = s.textContent
          shadow.appendChild(clone)
        }
      })

      const container = document.createElement('div')
      container.style.height = '100%'
      shadow.appendChild(container)
      this._app = createApp(App, { panelMode: true })
      this._app.mount(container)
    }
  }
}

customElements.define('homeboard-panel', HomeBoardPanel)
