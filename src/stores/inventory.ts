import { defineStore } from "pinia";

import { useUserStore } from "./user";

export const useInventoryStore = defineStore("inventory", {
  state: () => ({
    items: [],
    loading: true,
  }),
  // getters: {},
  actions: {
    setItems(items: any) {
      this.items = items;
      this.loading = false;
    },
  },
});
