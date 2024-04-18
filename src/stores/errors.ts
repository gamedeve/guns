import { defineStore } from "pinia";
import type { ErrorMessage } from "./types";
export const useErrorsStore = defineStore("errors", {
  state: () => ({
    error: {},
  }),
  getters: {},
  actions: {
    setError(error: ErrorMessage) {
      this.error = error;
    },
  },
});
