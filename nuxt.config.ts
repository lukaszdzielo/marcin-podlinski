// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/marcin-podlinski/',
  },
  css: [
    'assets/scss/main.scss',
  ],
  // modules: ['@nuxtjs/tailwindcss'],
})
