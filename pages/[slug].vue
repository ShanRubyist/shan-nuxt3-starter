<template>

    <section>
        <div class="flex flex-col items-center justify-center px-5 md:px-10">
            <!-- Title Container -->
            <div class="flex h-auto min-w-[100vw] flex-col items-center justify-end bg-[#f2f2f7] py-6 md:h-64">
                <div class="flex flex-col items-center gap-y-4 py-5">
                    <h1 class="text-3xl font-bold md:text-5xl">{{ title }}</h1>
                    <!-- <p class="text-sm text-[#808080] sm:text-base">Last Updated as of October 17, 2022</p> -->
                </div>
            </div>
            <!-- Content Container -->
            <div class="mx-auto w-full max-w-5xl py-12 md:py-16 lg:py-20">

                <!-- Content -->
                <!-- <ContentDoc class="prose" /> -->
                <ContentRendererMarkdown :value="md" :data="mdcVars" class="prose"/>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

let { slug } = useRoute().params
const { locale, t } = useI18n()
const config = useRuntimeConfig().public

if (slug != "privacy-policy" && slug != "terms-of-service") {
    navigateTo({
        path: '/'
    })
}

useHead({
    title: t('privacy-policy'),
})

const { data: md } = await useAsyncData(() => queryContent(locale.value, slug).findOne());
const mdcVars = ref({
    site_name: config.siteName,
    email: config.email,
    site_url: config.siteURL
});


let title = t('privacy-policy') + ' | ' + config.siteName
</script>