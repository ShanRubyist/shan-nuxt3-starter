// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/ui", "@nuxtjs/sitemap"],

  colorMode: {
    preference: 'system'
  },

  sitemap: {
    // xslTips: false,
  },

  devtools: { enabled: true }
})
