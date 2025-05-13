import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  server: {
    fs: {
      allow: ['.']  // Allow serving from root
    }
  },

  optimizeDeps: {
    exclude: ['lucide-react'],
    include: [
      'src/lib/extensions.js',
      'chatagentstyle.css'  // Direct reference
    ]
  },

  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        extensions: './src/lib/extensions.js',
        styles: './chatagentstyle.css'  // Direct path
      }
    }
  },

  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "chatagentstyle.css";`  // Global import
      }
    }
  }
});