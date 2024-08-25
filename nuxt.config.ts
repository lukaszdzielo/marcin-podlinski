// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	vue: {
		compilerOptions: {
			isCustomElement: (tag) => tag.startsWith('swiper-'),
		},
	},
	devServer: {
		// host: '0.0.0.0',
	},
	devtools: { enabled: true },
	app: {
		baseURL: '/marcin-podlinski/',
		rootAttrs: {
			'class': '',
		},
	},
	modules: ['@nuxtjs/tailwindcss'],
	css: [
		'assets/scss/main.scss',
	],
	compatibilityDate: '2024-08-12',
})