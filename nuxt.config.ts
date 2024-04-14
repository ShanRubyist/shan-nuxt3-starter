// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/ui"],

  colorMode: {
    preference: 'system'
  },

  devtools: { enabled: true }
})
