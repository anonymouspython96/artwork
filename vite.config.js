import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    noDiscovery: true, // ← Nuova sintassi corretta
    include: [], // ← Array vuoto invece di disabled
  },
})
