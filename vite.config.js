import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@components': path.resolve('./src/components'),
      '@pages': path.resolve('./src/pages'),
    }
  },
  plugins: [ react() ],
});
