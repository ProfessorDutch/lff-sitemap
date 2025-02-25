import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-sitemap',
      closeBundle: async () => {
        // Copy sitemap.xml from public to dist if it exists
        if (fs.existsSync('public/sitemap.xml')) {
          fs.copyFileSync('public/sitemap.xml', 'dist/sitemap.xml');
        }
      }
    }
  ],
  build: {
    sourcemap: true,
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-helmet-async'],
          contentful: ['contentful', '@contentful/rich-text-react-renderer']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-helmet-async'],
    exclude: ['lucide-react']
  }
});