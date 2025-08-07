import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import staticAdapter from '@sveltejs/adapter-static';

const base = process.env.BASE_HREF ? '/' + process.env.BASE_HREF : '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
      adapter: staticAdapter(),
      paths: { base },
	}
	// compilerOptions: {
	// 	runes: true
	// }
}

export default config;
