import tailwindcss from '@tailwindcss/vite'
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite';
import ViteYaml from '@modyfi/vite-plugin-yaml';

const base = process.env.BASE_HREF ? '/' + process.env.BASE_HREF : '';

export default defineConfig(async () => ({
  plugins: [
    sveltekit({
      adapter: (await import('@sveltejs/adapter-static')).default(),
      paths: { base },
    }),
    tailwindcss(),
    ViteYaml(),
  ],
  server: {
    fs: {
      allow: ['addons']
    }
  },
  resolve: {
    alias: {
      '#lib': '/src/lib',
    },
  },
}))
