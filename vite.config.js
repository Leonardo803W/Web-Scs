import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,   // <-- QUESTA È LA PARTE IMPORTANTE
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist'
  },
  base: './'
})