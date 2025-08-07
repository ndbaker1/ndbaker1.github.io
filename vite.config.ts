import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte'
import ViteYaml from '@modyfi/vite-plugin-yaml';

export default defineConfig({
  plugins: [svelte(), ViteYaml()],
  server: {
    fs: {
      allow: ['addons']
    }
  },
})
