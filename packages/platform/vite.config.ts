import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, '../shared/src'),
      '@sneakers-project': path.resolve(__dirname, '../sneakers-project/src'),
      '@shorts-project': path.resolve(__dirname, '../shorts-project/src'),
    },
  },
  server: {
    port: 5000,
  },
});
