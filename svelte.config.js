import firebase from 'svelte-adapter-firebase';
import preprocess from 'svelte-preprocess';
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [preprocess(), sveltePreprocess()],

  kit: {
    adapter: firebase(),
    vite: {
      ssr: {
        noExternal: ['dayjs']
      }
    },
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte'
  }
};

export default config;
