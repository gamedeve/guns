import { defineStore } from "pinia";

import { useUserStore } from "./user";

export const useMissionsStore = defineStore("missions", {
  state: () => ({
    items: [],
    loading: true,
  }),
  // getters: {},
  actions: {
    setItems(items) {
      this.items = items;
      this.loading = false;
    },
  },
});
