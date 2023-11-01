// tailwind.config.mjs
import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#b3c7ff', 600: '#364bff', 900: '#182775', 950: '#131e4f' };
const gray = { 100: '#f5f6f8', 200: '#eceef2', 300: '#c0c2c7', 400: '#888b96', 500: '#545861', 700: '#353841', 800: '#24272f', 900: '#17181c' };

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: { accent, gray },
            fontFamily: {
                // Your preferred text font. Starlight uses a system font stack by default.
                sans: ['"Atkinson Hyperlegible"'],
                // Your preferred code font. Starlight uses system monospace fonts by default.
                mono: ['"IBM Plex Mono"'],
            },
        },
    },
    plugins: [starlightPlugin()],
};