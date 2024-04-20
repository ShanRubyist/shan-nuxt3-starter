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
            <div class="relative flex flex-col">
              <NuxtLink :to="localePath('/')" x-on:click.prevent="menuOne = !menuOne"
                class="flex flex-row rounded-lg hover:text-[#c9fd02] lg:px-6 lg:py-4"
                x-bind:class="menuOne ? ' text-[#c9fd02] ' : 'text-white  ' ">
                {{ t('pricing') }}
                <svg x-bind:class="menuOne ? 'rotate-180' : 'rotate-0' " class="fill-current transition"
                  style="width: 24px; height: 24px" viewBox="0 0 24 24">
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </NuxtLink>
              <!-- DROP DOWN MENU ONE -->
              <div
                class="lg:px-75 z-50 flex w-full flex-col rounded-lg bg-[#181818] px-5 py-5 lg:absolute lg:top-20 lg:w-[800px] lg:flex-row lg:flex-wrap lg:py-7 lg:shadow-[0_16px_64px_-15px_rgba(45,96,173,0.15)] xl:w-[950px]"
                x-show="menuOne" x-on:click.outside="menuOne = false">
                <!-- ITEM -->
                <a class="flex grow flex-col rounded-lg px-5 py-5 lg:basis-[248px] xl:px-8" href="#">
                  <!-- ICON -->
                  <div class="relative">
                    <img class="w-[40px]"
                      src="https://uploads-ssl.webflow.com/64745e0b9655a141ddb0db54/64745e0b9655a141ddb0db35_Ellipse%2030.svg"
                      alt="" />
                  </div>
                  <!-- TEXT -->
                  <h2 class="font-inter mb-1 mt-5 text-lg font-medium"> Analytics </h2>
                  <p class="font-inter max-w-[250px] text-[14px] leading-[24px] text-[#636262] lg:max-w-[400px]">
                    Get a better understanding of where your traffic is coming from </p>
                </a>
                <!-- ITEM -->
                <a class="flex grow flex-col rounded-lg px-5 py-5 lg:basis-[248px] xl:px-8" href="#">
                  <!-- ICON -->
                  <div class="relative">
                    <img class="w-[40px]"
                      src="https://uploads-ssl.webflow.com/64745e0b9655a141ddb0db54/64745e0b9655a141ddb0db35_Ellipse%2030.svg"
                      alt="" />
                  </div>
                  <!-- TEXT -->
                  <h2 class="font-inter mb-1 mt-5 text-lg font-medium"> Engagement </h2>
                  <p class="font-inter max-w-[250px] text-[14px] leading-[24px] text-[#636262] lg:max-w-[400px]">
                    Speak directly to your customers in a more meaningful way </p>
                </a>
                <!-- ITEM -->
                <a class="flex grow flex-col rounded-lg px-5 py-5 lg:basis-[248px] xl:px-8" href="#">
                  <!-- ICON -->
                  <div class="relative">
                    <img class="w-[40px]"
                      src="https://uploads-ssl.webflow.com/64745e0b9655a141ddb0db54/64745e0b9655a141ddb0db35_Ellipse%2030.svg"
                      alt="" />
                  </div>
                  <!-- TEXT -->
                  <h2 class="font-inter mb-1 mt-5 text-lg font-medium"> Automations </h2>
                  <p class="font-inter max-w-[250px] text-[14px] leading-[24px] text-[#636262] lg:max-w-[400px]">
                    Build strategic funnels that will drive your customers to convert </p>
                </a>
              </div>
            </div>
            <NuxtLink :to="localePath('/pricing')" class="font-inter rounded-lg hover:text-[#c9fd02] lg:px-6 lg:py-4">
              {{ t('pricing') }}
            </NuxtLink>

            <NuxtLink :to="localePath('/faqs')"
              class="font-inter rounded-lg pb-8 hover:text-[#c9fd02] lg:px-6 lg:py-4 lg:pb-0">
              {{ t('faqs') }}
            </NuxtLink>
          </div>

          <USelect :options="supportedLocaleNames" model-value="{{locale.name}}" @change="onLocaleChanged">
            <!-- <template #leading>
                            <UIcon name="i-heroicons-academic-cap" class="w-5 h-5" />
                        </template> -->
          </USelect>

          <!-- MENU CONTENT 2 -->
          <div v-if="has_login" class="flex flex-col space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0"
            x-bind:class="isOpen ? 'show' : 'hidden'">
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

const has_login = useRuntimeConfig().public.has_login
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
  await getUserInfo()
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
  }], [{
    label: 'Settings',
    icon: 'i-heroicons-cog-8-tooth'
  }], [{
    label: 'Documentation',
    icon: 'i-heroicons-book-open'
  }, {
    label: 'Changelog',
    icon: 'i-heroicons-megaphone'
  }, {
    label: 'Status',
    icon: 'i-heroicons-signal'
  }],
  [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    click: () => logout()
  }]]
</script>