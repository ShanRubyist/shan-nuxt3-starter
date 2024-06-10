<template>
  <HomeHero></HomeHero>
  <HomeFeatures></HomeFeatures>
  <HomeCallToAction></HomeCallToAction>
</template>

<script setup lang="ts">

import request from "@/utils/request";
import { useRoute } from "vue-router";
import { useMainStore } from '~/store'

const { t } = useI18n()
const localePath = useLocalePath()

const store = useMainStore()
const config = useRuntimeConfig().public
const has_login = config.has_login

useHead({
  title: t("title"),
  meta: [
    { name: "description", content: t("description") },
  ]
})

const route = useRoute()
const params = route.query

const { notify } = useNotify()

if (params.code) {
  const resp = await request("/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      {
        code: params.code,
      }
    )
  });

  if (resp.status === 200) {
    let data = resp.data.data;

    let token = data["Authorization"].replace('Bearer ', '')

    let store = useMainStore()
    await store.setToken(token)

    useRouter().replace(localePath('/'))
  } else {
    notify('error', resp.data.errors)
  }
}
else {
  let { data: user_info } = await useAsyncData("user_info", async () => {
    if (has_login) {
      await getUserInfo()
    }
  })
}

async function getUserInfo() {
  const resp = await request("/api/v1/user_info", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });

  if (resp.status == 200) {
    await store.setUserInfo(resp.data)
  } else {
    await store.setUserInfo({})
  }
}

</script>