// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/ui", "@nuxtjs/sitemap", "@nuxt/content", "@nuxtjs/i18n", "@pinia/nuxt"],

  colorMode: {
    preference: 'system'
  },

  sitemap: {
    // xslTips: false,
      strictNuxtContentPaths: true
      // sitemaps: {
      //   posts: {
      //     include: [
      //       '/',
      //       '/content/blog/**',
      //     ],
      //   }
      // }
  },

  content: {
    // documentDriven: true,
    markdown: {
      anchorLinks: false,
    },
  },

  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL,
    defaultLocale: 'en',
    locales: [{
      name: 'English',
      code: 'en',
      iso: 'en-US',
      file: 'en-US.json'
    },
    {
      name: '简体中文',
      code: 'zh',
      iso: 'zh-CN',
      file: 'zh-CN.json'
    },
    {
      name: '繁體中文',
      code: 'zh-TW',
      iso: 'zh-TW',
      file: 'zh-TW.json'
    },
    {
      name: '한국어',
      code: 'ko',
      iso: 'ko-KR',
      file: 'ko-KR.json'
    },
    {
      name: '日本語',
      code: 'ja',
      iso: 'ja-JP',
      file: 'ja-JP.json'
    },
    {
      name: 'Français',
      code: 'fr',
      iso: 'fr-FR',
      file: 'fr-FR.json'
    },
    {
      name: 'Nederlands',
      code: 'nl',
      iso: 'nl-NL',
      file: 'nl-NL.json'
    },
    {
      name: 'Deutsch',
      code: 'de',
      iso: 'de-DE',
      file: 'de-DE.json'
    }],
    langDir: 'locales/',
  },

  runtimeConfig: {
    public: {
      endpoint: process.env.NUXT_PUBLIC_API_ENDPOINT,
      siteURL: process.env.NUXT_PUBLIC_SITE_URL,
      siteName: process.env.NUXT_PUBLIC_SITE_NAME,
      email: process.env.NUXT_PUBLIC_EMAIL,
      has_login: process.env.NUXT_PUBLIC_HAS_LOGIN,
      email_login: process.env.NUXT_PUBLIC_EMAIL_LOGIN,
      google_oauth_login: process.env.NUXT_PUBLIC_GOOGLE_OAUTH_LOGIN,
      pay_success_url: process.env.NUXT_PUBLIC_PAY_SUCCESS_URL,
    },
  },

  experimental: {
    defaults: {
      nuxtLink: {
        externalRelAttribute: 'noopener noreferrer nofollow'
      }
    }
  },

  router: {
    // middleware: "auth",
  },

  devtools: { enabled: true }
})
