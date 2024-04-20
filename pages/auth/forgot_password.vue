<template>
  <div>forgot password</div>
  <input v-model="email" type="email"
    class="mb-4 block h-9 w-full border border-black bg-white px-3 py-6 pl-14 text-sm text-[#333333]" maxlength="256"
    name="name" placeholder="Email Address" required="" />

  <button @click="forgot_password">reset</button>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const config = useRuntimeConfig().public

const { t } = useI18n()
useHead({
  title: t("forgot_password"),
  meta: [
    { name: "description", content: t("description") },
  ]
})

let email

async function forgot_password(): Promise<void> {
  const { notify } = useNotify()

  const resp = await request("/auth/password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      redirect_url: config.siteURL + '/auth/password_reset',
    }),
  });

  if (resp.status === 200) {
    navigateTo({
      path: localePath("/auth/email_verifications"),
      query: {
        email: email,
        type: 'reset_password'
      }
    });
  }
  else {
    notify('error', resp.data.errors)
  }
}
</script>