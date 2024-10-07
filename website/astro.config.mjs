import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.flowcore.io/',
  head: [
    {
      tag: 'script',
      attrs: {
        src: 'theme-aware-image.js',
      }
    }
  ],
  integrations: [starlight({
    sidebar: [
      {
        label: "Platform",
        autogenerate: {
          directory: "Guides",
        },
      },
      {
        label: "Components",
        autogenerate: {
          directory: "Components",
        },
      },
      {
        label: "Automation",
        autogenerate: {
          directory: "Automation",
        },
      },
      {
        label: "Flowcathon",
        autogenerate: {
          directory: "Flowcathon",
        },
      }
    ],
    title: 'Flowcore Docs',
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
  })],
});