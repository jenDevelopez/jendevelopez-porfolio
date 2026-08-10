// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	adapter: node({ mode: 'standalone' }),
	vite: {
		plugins: [tailwindcss()],
	},
	// Dominio propio en Clouding (ajusta SITE_URL en .env si hace falta)
	site: process.env.SITE_URL || 'https://jldev.es',
	base: '/',
});
