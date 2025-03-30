// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import vue from '@astrojs/vue';
import node from '@astrojs/node'
import clerk from '@clerk/astro'
import {esES} from '@clerk/localizations'
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [vue(), clerk({localization: esES})],
  adapter: node({ mode: 'standalone' }),
  output: 'static',

});