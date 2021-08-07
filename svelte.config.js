import preprocess from "svelte-preprocess";
import staticAdapter from '@sveltejs/adapter-static'

const config = {
  preprocess: [preprocess({
    "postcss": true
  })],
  kit: {
    adapter: staticAdapter(),
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte'
  }
};

export default config;