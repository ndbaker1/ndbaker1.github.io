import { UserConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import yaml from '@rollup/plugin-yaml';

const config: UserConfig = {
  plugins: [sveltekit(), yaml()],
  server: {
    fs: {
      allow: ['addons']
    }
  },
  build: {
    target: 'esnext',
  },
};

export default config;
