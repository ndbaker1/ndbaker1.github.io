import preprocess from 'svelte-preprocess';
import staticAdapter from '@sveltejs/adapter-static';

const base = process.env.BASE_HREF ? '/' + process.env.BASE_HREF : '';

const config = {
  preprocess: [preprocess({ postcss: true })],
  kit: {
    adapter: staticAdapter(),
    paths: {
      base,
    },
  },
};

export default config;
