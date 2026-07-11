import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // আপনার Tailwind v4 এর প্লাগইন

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/starReactOne/', // শুরুতে এবং শেষে অবশ্যই / থাকতে হবে
})