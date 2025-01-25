import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/Card-game-react/', // Base path for deployment
  plugins: [react()],       // React plugin for Vite
});
