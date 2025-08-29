// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // Base URL for GitHub Pages deployment
  // If you deploy to your custom domain (www.sannawiklund.se), keep "/"
  // If you deploy to GitHub project pages (like /portfolio/), change to "/portfolio/"
  base: '/',

  resolve: {
    alias: {
      '@': '/src'
    }
  },

  server: {
    port: 3000
  }
});
