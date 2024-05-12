import { defineStore } from "pinia";
import type { ErrorMessage } from "./types";
export const useNotifyStore = defineStore("notify", {
  state: () => ({
    error: {},
    success: {},
    info: {},
  }),
  getters: {},
  actions: {
    // setError(error: ErrorMessage) {
    //   this.error = error;
    // },
    setError(notify: any) {
      console.log("_____________________");
      console.log(notify);
      this.error = notify;
    },
    setSuccess(notify: any) {
      console.log("_____________________");
      console.log(notify);
      this.success = notify;
    },
    setInfo(notify: any) {
      console.log("_____________________");
      console.log(notify);
      this.info = notify;
    },
  },
});
