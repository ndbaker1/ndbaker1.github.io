import tailwindcss from '@tailwindcss/vite'
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite';
import ViteYaml from '@modyfi/vite-plugin-yaml';

export default defineConfig({
  plugins: [
    sveltekit(),
    tailwindcss(),
    ViteYaml(),
  ],
  server: {
    fs: {
      allow: ['addons']
    }
  },
})
