import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    token: null,
    userInfo: {}
  }),
  actions: {
    setToken(token: string) {
      (this as any).token = token;

      let cookie = useCookie("token");
      cookie.value = token;
    },
    setUserInfo(userInfo: object) {
      (this as any).userInfo = userInfo;
    },
    init() {
      let cookie = useCookie("token");
      this.setToken(cookie.value);
    },
  },
});
