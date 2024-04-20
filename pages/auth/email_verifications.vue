<template>
    <template v-if="type == 'account_confirm'">
        {{ type }}
        Email sended to {{ email }}
        <button>go to check email</button>
        <a>resend</a>
    </template>
    <template v-else-if="type == 'reset_password'">
        {{ type }}

        Email sended to {{ email }}
        <button>go to check email</button>
        <a>resend</a>
    </template>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const localePath = useLocalePath()
const {t} = useI18n()
useHead({
  title: t("email_verifications"),
  meta: [
    { name: "description", content: t("description") },
  ]
})

const params = useRoute().query
const email = params.email
const type = params.type

const account_confirmation_success = params.account_confirmation_success

if (account_confirmation_success) {
    navigateTo({
        path: localePath("/"),
    });
}
</script>