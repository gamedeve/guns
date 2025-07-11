import { defineStore } from "pinia";
import { useNotifyStore } from "./notify";
import { useUserStore } from "./user";
import axios from "axios";
export const useMissionsStore = defineStore("missions", {
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
    getMissions() {
      // console.log(window.Telegram.WebApp.initData);
      this.loading = true;
      return new Promise((resolve, reject) => {
        axios
          .get("/missions")
          .then((response) => {
            let data = response.data;
            if (data.missions) {
              this.setItems(data.missions);
            }

            resolve(response);
          })
          .catch((error) => {
            reject(error);
            // console.log(error);
            useNotifyStore().setError(error);
          });
      });
      // setTimeout(() => {}, 5000);
    },
    checkMission(missionId: number) {
      // console.log(window.Telegram.WebApp.initData);

      return new Promise((resolve, reject) => {
        axios
          .post("/check-mission", {
            missionId: missionId,
          })
          .then((response) => {
            let data = response.data;
            if (data.user) {
              useUserStore().user = data.user;
            }
            if (data.missions) {
              this.setItems(data.missions);
            }

            if (data.message != undefined && data.message != "") {
              useNotifyStore().setSuccess({
                message: data.message,
              });
            }

            console.log(data.message);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
            // console.log(error);
            useNotifyStore().setError(error);
          });
      });
      // setTimeout(() => {}, 5000);
    },
  },
});
