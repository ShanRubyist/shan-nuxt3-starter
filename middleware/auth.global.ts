import { useMainStore } from "~/store";

export default defineNuxtRouteMiddleware((to, from) => {
  let store = useMainStore();
  const config = useRuntimeConfig().public
  const localePath = useLocalePath()

  if (to.fullPath.includes('/auth') && (!config.has_login || store.userInfo.email != undefined)) {
    return navigateTo({
      path: localePath("/"),
    });
  }
});
