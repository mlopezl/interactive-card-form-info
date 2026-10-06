import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/interactive-card-form-info/',
  build: { outDir: 'docs' },
  plugins: [react(), tailwindcss()],
})
