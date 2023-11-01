// tailwind.config.mjs
import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#edb7cd', 600: '#bc1779', 900: '#571538', 950: '#3c1327' };
const gray = { 100: '#f5f6fa', 200: '#ebedf6', 300: '#bfc1cc', 400: '#878a9e', 500: '#545769', 700: '#343748', 800: '#232535', 900: '#16181f' };

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