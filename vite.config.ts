import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, existsSync } from 'fs';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-redirects',
      closeBundle() {
        if (existsSync('./_redirects')) {
          copyFileSync('./_redirects', './dist/_redirects');
          console.log('✅ Copied _redirects into dist/');
        } else {
          console.warn('⚠️ No _redirects file found!');
        }
      },
    },
  ],
  publicDir: 'public',
});
