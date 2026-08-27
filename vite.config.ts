import path from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 9001, // Replace 3000 with your desired port
    strictPort: true, // Optional: if true, Vite will fail instead of automatically trying the next available port
  },
});
