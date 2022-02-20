import { defineConfig } from 'vite'

import { DEST_DIR, SRC_DIR } from './config/constants'

// https://vitejs.dev/config/
export const configObj = {
  build: {
    rollupOptions: {
      input: [
        `${SRC_DIR}/main.js`,
        'index.html',
      ],
      output: {
        dir: DEST_DIR,
      }
    },
    assetsDir: 'assets',
    sourcemap: false
  }
}

export default defineConfig(configObj)
