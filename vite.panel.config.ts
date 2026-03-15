import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin()],
  build: {
    outDir: 'custom_components/homeboard/frontend',
    emptyOutDir: true,
    lib: {
      entry: 'src/panel-entry.ts',
      formats: ['es'],
      fileName: () => 'homeboard-panel.js',
    },
    cssCodeSplit: false,
    assetsInlineLimit: 100000,
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
})
