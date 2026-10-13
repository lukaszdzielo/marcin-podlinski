// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	compatibilityDate: '2026-10-01',
	devtools: { enabled: true },

	modules: ['@nuxt/image'],

	css: ['~/assets/css/main.css'],

	// Zdjęcia: w repo tylko oryginały (app/assets/img/photos),
	// warianty AVIF/WebP generuje @nuxt/image (IPX) przy `nuxt generate`
	image: {
		dir: 'assets/img/photos',
		format: ['avif', 'webp'],
	},

	vite: {
		plugins: [tailwindcss()],
	},

	app: {
		// Strona na GitHub Pages: https://lukaszdzielo.github.io/marcin-podlinski/
		// Po podpięciu własnej domeny zmień na '/'
		baseURL: '/marcin-podlinski/',
		head: {
			htmlAttrs: { lang: 'pl' },
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/marcin-podlinski/favicon.ico' }],
			meta: [{ name: 'theme-color', content: '#191919' }],
		},
	},

	nitro: {
		prerender: {
			// Wszystkie podstrony generowane statycznie (nuxt generate)
			crawlLinks: true,
		},
	},
})
