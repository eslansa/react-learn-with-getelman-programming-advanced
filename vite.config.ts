import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Se usa ViteJs para q utilice el pluguin de React
//Si quisiera hacer testing, solo agrego el pluguin de testing
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
