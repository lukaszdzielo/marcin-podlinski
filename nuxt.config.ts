// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devServer: {
  //   host: '0',
  // },
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
})
