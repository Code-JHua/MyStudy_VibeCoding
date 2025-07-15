import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',

        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/klingai': {
        target: 'https://api.kling.ai',
        rewrite: (path) => path.replace(/^\/klingai/, ''),
      }
    }
  }
})
