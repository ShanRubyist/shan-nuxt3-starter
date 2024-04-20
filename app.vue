<template>
  <div>
    <NuxtLayout>
      <Header />
        <NuxtPage />
      <Footer />
      
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">

const { t } = useI18n()
const config = useRuntimeConfig().public

const i18nHead = useLocaleHead({
  addSeoAttributes: {
    canonicalQueries: ['foo']
  }
})

useHead({
  title: "",
  titleTemplate: (title) => { return title === '' ? config.siteName : `${title} | ${config.siteName}` },
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs!.lang
  },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "description", content: t("hello") },
    { name: "format-detection", content: "telephone=no" },
    ...i18nHead.value.meta
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ...i18nHead.value.link
  ],
})
</script>