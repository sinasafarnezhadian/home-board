import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const haTarget = env.HA_URL || 'http://homeassistant.local:8123'

  return {
    plugins: [vue()],
    server: {
      proxy: {
        '/api': {
          target: haTarget,
          changeOrigin: true,
          ws: true,
        },
      },
    },
  }
})
