<template>

    <footer class="block">
        <!-- Container -->
        <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <!-- Component -->
            <div class="mb-4 mt-16 w-full [border-bottom:1.7px_solid_rgb(0,_0,_0)]"></div>
            <div
                class="flex flex-row justify-between max-[991px]:items-center max-[767px]:flex-col max-[767px]:items-start max-[479px]:flex-col-reverse">
                <div class="max-[991px]: text-center font-semibold max-[991px]:py-1 max-[479px]:mb-4 sm:text-center">

                    <template v-for="i in links">
                        <NuxtLink :to="localePath(i.path)"
                            class="inline-block py-1.5 pr-6 font-normal text-[#636262] transition hover:text-[#276EF1] sm:py-2 sm:pr-6 lg:pr-12">
                            {{ i.name }}
                        </NuxtLink>
                    </template>

                </div>
                <div class="max-[991px]:flex-none">
                    <p class="text-[#636262] max-[479px]:text-sm"> Copyright © 2024 {{ config.siteName }}. All rights
                        reserved. </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const config = useRuntimeConfig().public

let links = computed(() => {
    return [
        {
            name: t('footer.privacy_policy'),
            path: '/privacy-policy'
        },
        {
            name: t('footer.terms_of_service'),
            path: '/terms-of-service'
        }
    ]
})

</script>