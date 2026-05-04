import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import babel from '@rolldown/plugin-babel';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vanillaExtractPlugin(), react(), babel({ presets: [reactCompilerPreset()] })],
  resolve: {
    alias: {
      '@styles': fileURLToPath(new URL('./src/shared/styles', import.meta.url)),
    },
  },
});
