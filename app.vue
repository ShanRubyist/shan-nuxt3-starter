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
useHead({
  title: "",
  titleTemplate: (title) => { return title },
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "description", content: "" },
    { name: "format-detection", content: "telephone=no" },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
})
</script>