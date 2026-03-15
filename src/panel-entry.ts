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

      // HA renders custom panels inside a shadow DOM (ha-panel-custom).
      // CSS injected into document.head can't penetrate shadow boundaries,
      // so we copy our styles into the shadow root we live in.
      const root = this.getRootNode()
      if (root instanceof ShadowRoot) {
        document.head.querySelectorAll('style').forEach(s => {
          if (s.textContent && s.textContent.includes('data-v-')) {
            const clone = document.createElement('style')
            clone.textContent = s.textContent
            root.prepend(clone)
          }
        })
      }

      const container = document.createElement('div')
      container.style.height = '100%'
      this.appendChild(container)
      this._app = createApp(App, { panelMode: true })
      this._app.mount(container)
    }
  }
}

customElements.define('homeboard-panel', HomeBoardPanel)
