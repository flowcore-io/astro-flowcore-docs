import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.flowcore.io/',
  integrations: [starlight({
    title: 'Flowcore Platform Documentation',
    social: {
      linkedin: 'https://www.linkedin.com/company/flowcore'
    },
    editLink: {
      baseUrl: 'https://github.com/flowcore-io/astro-flowcore-docs/tree/main/website'
    },
    customCss: [
      // Path to your Tailwind base styles:
      './src/tailwind.css',
    ],
  }), tailwind({
    // Disable the default base styles:
    applyBaseStyles: false
  })]
});