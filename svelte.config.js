import preprocess from "svelte-preprocess";
import staticAdapter from '@sveltejs/adapter-static'

const config = {
  preprocess: [preprocess({
    "postcss": true
  })],
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    paths: {
      base: process.env.BASE_HREF ? ('/' + process.env.BASE_HREF) : ''
    },
    adapter: staticAdapter(),
  }
};

export default config;