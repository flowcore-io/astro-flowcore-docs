import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.flowcore.io/',
	integrations: [
		starlight({
			title: 'Flowcore Wiki',
			social: {
				linkedin: 'https://www.linkedin.com/company/flowcore',
			},
			editLink: {
				baseUrl: 'https://github.com/flowcore-io/astro-flowcore-docs/tree/main/website',
			}
		}),
	],
});
