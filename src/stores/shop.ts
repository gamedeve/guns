import { defineStore } from "pinia";
import { useNotifyStore } from "./notify";
import { useUserStore } from "./user";
import axios from "axios";
export const useShopStore = defineStore("shop", {
  state: () => ({
    boxes: [],
    loading: true,
    loadingBuy: false,
  }),
  // getters: {},
  actions: {
    setBoxes(items: any) {
      this.boxes = items;
      this.loading = false;
    },
    getBoxes() {
      // console.log(window.Telegram.WebApp.initData);
      this.loading = true;
      return new Promise((resolve, reject) => {
        axios
          .get("/boxes")
          .then((response) => {
            let data = response.data;
            if (data.boxes) {
              this.setBoxes(data.boxes);
            }

            resolve(response);
          })
          .catch((error) => {
            reject(error);
            // console.log(error);
            useNotifyStore().setError(error);
          });

        // resolve(22222222222);
      });

      // setTimeout(() => {}, 5000);
    },
    buyBox(boxId: number) {
      // console.log(window.Telegram.WebApp.initData);
      this.loadingBuy = true;
      return new Promise((resolve, reject) => {
        axios
          .post("/buy-box", {
            boxId: boxId,
          })
          .then((response) => {
            let data = response.data;
            if (data.user) {
              useUserStore().user = data.user;
            }

            // if (data.message != undefined && data.message != "") {
            //   useNotifyStore().setSuccess({
            //     message: data.message,
            //   });
            // }
            resolve(response);
            this.loadingBuy = false;
          })
          .catch((error) => {
            this.loadingBuy = false;
            reject(error);
            // console.log(error);
            useNotifyStore().setError(error);
          });
      });
      // setTimeout(() => {}, 5000);
    },
  },
});
