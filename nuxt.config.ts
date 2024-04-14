// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/ui", "@nuxtjs/sitemap", "@nuxt/content"],

  colorMode: {
    preference: 'system'
  },

  sitemap: {
    // xslTips: false,
  },

  content: {
    // ... options
  },

  runtimeConfig: {
    public: {
      endpoint: process.env.NUXT_PUBLIC_API_ENDPOINT,
      siteURL: process.env.NUXT_PUBLIC_SITE_URL
    },
  },

  devtools: { enabled: true }
})
