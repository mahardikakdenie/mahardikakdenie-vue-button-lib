import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // eslint-disable-next-line no-undef
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'vue-button',
      fileName: (format) => `${format}.js`
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
