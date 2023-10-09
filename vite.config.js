import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react() ],
  // Didn't work, dont know why.
  // Tryiing to create path alias
  "paths": {
    "@components": [ "./src/components/*" ],
    "@pages": ["./pages/*"]
  }
})
