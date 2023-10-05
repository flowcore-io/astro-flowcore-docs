import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.flowcore.io/',
	integrations: [
		starlight({
			title: 'Flowcore Platform Documentation',
			social: {
				linkedin: 'https://www.linkedin.com/company/flowcore',
			},
			editLink: {
				baseUrl: 'https://github.com/flowcore-io/astro-flowcore-docs/tree/main/website',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
