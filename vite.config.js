


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/port_do_averson/', // 👈 OBRIGATÓRIO
  plugins: [react(), tailwindcss()],
})
