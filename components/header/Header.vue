<template>

  <!-- Navbar Dropdown 2 rows -->

  <!-- Navbar Dropdown 1 row -->

  <!-- Navbar Dropdown 1 row -->
  <section>
    <div class="h-auto w-screen bg-black text-white">
      <!-- NAVBAR -->
      <nav class="font-inter mx-auto h-auto w-full max-w-[1600px] lg:relative lg:top-0"
        x-data="{isOpen: false, menuOne:false}">
        <!-- CONTAINER -->
        <div class="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20">
          <!-- SVG LOGO - YOU CAN REPLACE THIS -->
          <a href="#">
            <img
              src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26c_%5BA%5D--Navbar%20Brand.png"
              alt="" class="inline-block max-h-6" />
          </a>
          <!-- MENU CONTENT 1 -->
          <div class="mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0"
            x-bind:class="isOpen ? 'show' : 'hidden'">
            <!-- DROPDOWN -->

            <NuxtLink v-if="has_payment" :to="localePath('/pricing')"
              class="font-inter rounded-lg hover:text-[#c9fd02] lg:px-6 lg:py-4">
              {{ t('pricing') }}
            </NuxtLink>

            <NuxtLink :to="localePath('/faqs')"
              class="font-inter rounded-lg pb-8 hover:text-[#c9fd02] lg:px-6 lg:py-4 lg:pb-0">
              {{ t('faqs') }}
            </NuxtLink>
          </div>

          <!-- MENU CONTENT 2 -->
          <div v-if="has_login" class="flex flex-col space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0"
            x-bind:class="isOpen ? 'show' : 'hidden'">

            <USelect :options="supportedLocaleNames" model-value="{{locale.name}}" @change="onLocaleChanged">
              <!-- <template #leading>
                            <UIcon name="i-heroicons-academic-cap" class="w-5 h-5" />
                        </template> -->
            </USelect>

            <template v-if="store.userInfo.email">
              <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }"
                :popper="{ placement: 'bottom-start' }">
                <UAvatar :src="store.userInfo.image" />

                <template #account="{ item }">
                  <div class="text-left">
                    <p>
                      Signed in as
                    </p>
                    <p class="truncate font-medium text-gray-900 dark:text-white">
                      {{ item.label }}
                    </p>
                    <p v-if="has_payment">
                      credit: {{ store.userInfo.credits }}
                    </p>
                  </div>

                </template>

                <template #item="{ item }">
                  <span class="truncate">{{ item.label }}</span>

                  <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
                </template>
              </UDropdown>
            </template>

            <template v-else>
              <NuxtLink :to="localePath('/auth/login')" target="_blank"
                class="inline-block rounded-full bg-white px-5 py-3 text-center font-bold text-black transition hover:border-black hover:bg-[#c9fd02]">
                {{ t('login') }}
              </NuxtLink>
            </template>
          </div>
          <!-- BURGER MENU -->
          <a href="#" class="absolute right-5 lg:hidden" x-on:click.prevent="isOpen = !isOpen">
            <svg width="1.25rem" height="1rem" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7Z"
                fill="currentColor"></path>
              <path
                d="M19 0H7C6.44772 0 6 0.447715 6 1C6 1.55228 6.44772 2 7 2H19C19.5523 2 20 1.55228 20 1C20 0.447715 19.5523 0 19 0Z"
                fill="currentColor"></path>
              <path
                d="M19 14H11C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16H19C19.5523 16 20 15.5523 20 15C20 14.4477 19.5523 14 19 14Z"
                fill="currentColor"></path>
            </svg>
          </a>
        </div>
      </nav>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useMainStore } from '~/store'
const { locale, locales, t } = useI18n()
const localePath = useLocalePath()
const { notify } = useNotify()

const supportedLocaleNames = computed(() => {
  return locales.value.map(i => i.name)
})

const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

function onLocaleChanged(event: Event) {
  const selectedLocale = locales.value.find(i => i.name === event)

  router.push({ path: switchLocalePath(selectedLocale.code) })
}
const config = useRuntimeConfig().public

const has_login = config.has_login



let { data: payment_info } = await useAsyncData("payment_info", async () => {
  let resp = await request("/api/v1/payment_info", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return resp.data;
});

const has_payment = payment_info.value.has_payment


let store = useMainStore()

watch(() => store.token, async (newToken) => {
  if (has_login) {
    await store.setToken(newToken)
    getUserInfo()
  }
})

// let email = ref(null)
// watch(() => store.userInfo, (newUser) => {
//   if (has_login){
//     email.value = newUser.email
//   }
// })

if (has_login) {
  // await getUserInfo()
}

async function getUserInfo(): Promise<void> {
  const resp = await request("/api/v1/user_info", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });

  if (resp.status == 200) {
    // notify('success', 'get user info success')
    store.setUserInfo(resp.data)
  } else {
    // notify('error', 'get user info failed:' + resp.data.errors)
    store.setUserInfo({})
  }
}

async function logout(): Promise<void> {
  const resp = await request("/auth/sign_out", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  });

  if (resp.status === 200) {
    notify('success', 'Sign out success')

    store.setUserInfo({})

    navigateTo({
      path: localePath("/auth/login")
    });
  } else {
    notify('error', 'Sign out failed:' + resp.data.errors)
  }

}

const items = [
  [{
    label: store.userInfo.email,
    slot: 'account',
    disabled: true
  }]]

if (has_payment) {

  items.push([{
    label: 'Payment history',
    icon: 'i-heroicons-book-open',
    click: () => navigateTo('/payment_history')
  }, {
    label: 'Usage history',
    icon: 'i-heroicons-megaphone',
    click: () => navigateTo('/usage_history')
  }])
}

items.push([{
  label: 'Settings',
  icon: 'i-heroicons-cog-8-tooth'
}],
  [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    click: () => logout()
  }])
</script>