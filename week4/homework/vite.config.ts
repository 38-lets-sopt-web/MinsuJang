import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import babel from '@rolldown/plugin-babel';
import { fileURLToPath, URL } from 'node:url';

const resolveSrc = (path: string) => fileURLToPath(new URL(`./src/${path}`, import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    vanillaExtractPlugin(),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  resolve: {
    alias: {
      '@apps': resolveSrc('apps'),
      '@apis': resolveSrc('shared/apis'),
      '@icons': resolveSrc('shared/assets/icons'),
      '@images': resolveSrc('shared/assets/images'),
      '@layout': resolveSrc('shared/components/layout'),
      '@ui': resolveSrc('shared/components/ui'),
      '@shared': resolveSrc('shared'),
      '@styles': resolveSrc('shared/styles'),
    },
  },
});
