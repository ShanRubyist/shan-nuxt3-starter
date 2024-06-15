<template>
  <section>
    <!-- Container -->
    <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
      <!-- Component -->
      <div class="flex flex-col items-center">
        <!-- Heading Div -->
        <div class="mb-8 max-w-[800px] text-center md:mb-12 lg:mb-16">
          <h2 class="mb-4 mt-6 text-3xl font-extrabold md:text-5xl">{{ t('blog.h2') }}</h2>
          <p class="mx-auto mt-4 max-w-[528px] text-[#636262]">{{ t('blog.h2_p') }}</p>
        </div>
        <!-- Blog Content -->
        <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

          <template v-if="blog_posts?.length && blog_posts?.length > 0">
            <div v-for="article in blog_posts" :key="article._path">
              <!-- Blog Item -->
              <a :href="article_url(article._path)" _target="_blank"
                class="flex max-w-full flex-col gap-4 rounded-md px-4 md:px-2">
                <img :alt="article.title" :src="`${config.siteURL}/${article.title}.png`"
                  class="inline-block h-60 w-full rounded-2xl object-cover" />
                <div class="flex h-full w-full flex-col items-start justify-around px-0 py-4">
                  <div class="mb-4 flex flex-col items-start gap-4">
                    <div class="rounded-md bg-[#f6ad1b] px-2 py-1.5">
                      <p>{{ t('blog.tag') }}</p>
                    </div>
                    <p class="text-xl font-bold md:text-2xl">{{ article.title }}</p>
                  </div>
                  <!-- Info -->
                  <div class="flex flex-col items-start md:flex-row lg:items-center">
                    <p class="text-sm text-[#636262]">{{ article.body?.children?.[0]?.children?.[0]?.value }}</p>
                    <p class="ml-2 mr-2 hidden text-sm text-[#636262] md:block"></p>
                    <p class="text-sm text-[#636262]"></p>
                  </div>
                </div>
              </a>
            </div>
          </template>

          <template v-else>
            <p>{{ t('blog.no_article_found') }}</p>
          </template>
        </div>

        <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
          <UPagination v-model="page" :page-count="pageCount" :total="total_blog_posts_count" :max="5" />
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
const { t, locale } = useI18n()
const config = useRuntimeConfig().public

let current_locale = locale.value || config.defaultLocale

let path = `${current_locale}/blog`

useHead({
  title: t("blog.title"),
  meta: [
    { name: "description", content: t("blog.description") },
  ]
})

const page = ref(1)
const pageCount = ref(9)

const { data: total_blog_posts_count } = await useAsyncData(() => queryContent(path).count());

const { data: blog_posts } = await useAsyncData(() => get_blog_posts())
watch(() => page.value, async (newPage) => {
  let resp = await get_blog_posts()
  blog_posts.value = resp
})

function get_blog_posts() {
  return queryContent(path).sort({ date: -1 }).skip((page.value - 1) * pageCount.value).limit(pageCount.value).find()
}

function article_url(article_path: string) {
  let regex = new RegExp(`/${current_locale}`, "g");
  let real_article_path = article_path.replace(regex, '')

  return `${config.siteURL}${real_article_path}`
}
</script>