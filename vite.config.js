import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://Melina369.github.io/expense-tracker/",
  plugins: [react()],
})
