import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimizaciones de build
    minify: 'esbuild',
    cssMinify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        // Separar chunks para mejor caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'analytics': ['react-ga4']
        }
      }
    },
    // Chunk size warning limit
    chunkSizeWarningLimit: 1000
  },
  // Optimizaciones de servidor de desarrollo
  server: {
    hmr: true
  },
  // Optimizaciones de preview
  preview: {
    port: 4173,
    strictPort: true
  }
})
