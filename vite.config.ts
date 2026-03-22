import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          if (id.includes('three')) return 'three';
          if (id.includes('framer-motion')) return 'motion';
          if (id.includes('react-dom') || id.includes('react-router') || (id.includes('node_modules/react') && !id.includes('react-router'))) return 'vendor';
          return undefined;
        }
      }
    },
    chunkSizeWarningLimit: 800,
    sourcemap: false,
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    minify: 'esbuild',
  },
  server: {
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
    }
  }
})
