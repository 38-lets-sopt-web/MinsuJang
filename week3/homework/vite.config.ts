import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@types': path.resolve(__dirname, './src/types'),
      '@constants': path.resolve(__dirname, './src/constants'),
    },
  },
  plugins: [vanillaExtractPlugin(), react(), babel({ presets: [reactCompilerPreset()] })],
});
