<template>
  <h1>{{ t("pay history") }}</h1>

     <UTable :rows="rows" />

     <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
      <UPagination v-model="page" :page-count="pageCount" :total="list.length" />
    </div>
</template>

<script setup lang="ts">

import request from "@/utils/request";

const { t } = useI18n()
const localePath = useLocalePath()
const config = useRuntimeConfig().public


useHead({
  title: t("pay history"),
  meta: [
    { name: "description", content: t("description") },
  ]
})

let {data:list}= await useAsyncData("charges_history", async () => {
  let resp = await request("/charges_history", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return resp.data;
});

console.log(list)

const page = ref(1)
const pageCount = 10

const rows = computed(() => {
  return list.value.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})

</script>