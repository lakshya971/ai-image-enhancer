import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/ai-image-enhancer/',
  plugins: [
    tailwindcss(),
  ],
})