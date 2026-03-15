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
      const container = document.createElement('div')
      container.style.height = '100%'
      this.appendChild(container)
      this._app = createApp(App, { panelMode: true })
      this._app.mount(container)
    }
  }
}

customElements.define('homeboard-panel', HomeBoardPanel)
