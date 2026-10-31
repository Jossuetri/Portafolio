import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Tailwind v4 va por el plugin; evita que Vite tome el postcss.config.js de la carpeta padre
  css: { postcss: {} },
})
