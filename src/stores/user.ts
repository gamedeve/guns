import { defineStore } from "pinia";
import axios from "axios";
import { useNotifyStore } from "./notify";
import { useInventoryStore } from "./inventory";
import { useMissionsStore } from "./missions";
import { useCounterStore } from "./counter";
import type {
  ErrorMessage,
  MissionItemType,
  UserType,
  BoostItemType,
} from "./types";
export const useUserStore = defineStore("user", {
  state: () => ({
    isLoggedIn: false,
    // user: JSON.parse(localStorage.getItem("user") || "{}"),
    user: {},
  }),
  getters: {},
  actions: {
    async loadUser() {
      // console.log(window.Telegram.WebApp.initData);

      await new Promise((resolve, reject) => {
        axios
          .post(
            // "/load_user?fdf"
            "/load_user?" + this.tg.initData
            // JSON.parse(
            //   '{"' +
            //     decodeURI(this.tg.initData)
            //       .replace(/"/g, '\\"')
            //       .replace(/&/g, '","')
            //       .replace(/=/g, '":"') +
            //     '"}'
            // )
          )
          .then((response) => {
            let data = response.data;
            if (data.access_token && data.user) {
              axios.defaults.headers.common["Authorization"] =
                "Bearer " + data.access_token;

              this.user = data.user;
              this.isLoggedIn = true;
              this.updateUserCounter(data.user);

              console.log("user loaded22.");
              // console.log(data);
              // console.log(useCounterStore().claim_at);
              // console.log(useCounterStore().next_claim_at);

              if (data.inventory) {
                useInventoryStore().setItems(data.inventory);
              }
              // this.setList();
              this.setMissions();
            }

            // resolve(response);
          })
          .catch((error) => {
            // reject(error);
            // console.log(error);
            useNotifyStore().setError(error);
          });
      });
      // setTimeout(() => {}, 5000);
    },
    async claimMoney() {
      // console.log(window.Telegram.WebApp.initData);

      await new Promise((resolve, reject) => {
        axios
          .post("/claim")
          .then((response) => {
            let data = response.data;
            if (data.user) {
              // console.log(data.user);
              this.user = data.user;
              this.updateUserCounter(data.user);
            }

            // resolve(response);
          })
          .catch((error) => {
            // reject(error);
            // console.log(error);
            useNotifyStore().setError(error);
          });
      });
      // setTimeout(() => {}, 5000);
    },
    updateUserCounter(user: any) {
      useCounterStore().claim_at = user.claim_at;
      useCounterStore().next_claim_at = user.next_claim_at;
      useCounterStore().startTimer();
      // useCounterStore().claimSpeed = user.claim_speed.toFixed(2);
      useCounterStore().claimSpeed = user.claim_speed;
      console.log("claim_speed", useCounterStore().claimSpeed);
    },
    setList() {
      let list = [];
      for (let i = 0; i < 25; i++) {
        let inv: InventoryItem = {
          id: i,
          name: "name " + 1,
          image: import.meta.env.VITE_APP_API_URL + "/images/gun_45g.png",
          rare: "diamond",
        };
        list.push(inv);
      }

      console.log(list);
      useInventoryStore().setItems(list);
    },
    setMissions() {
      let list = [];
      for (let i = 0; i < 25; i++) {
        let inv: MissionItem = {
          id: i,
          name: "name " + 1,
          image: import.meta.env.VITE_APP_API_URL + "/images/gun.png",
          reward: 11 + i,
          completed: i % 2 === 0,
        };
        list.push(inv);
      }
      useMissionsStore().setItems(list);
    },
    getImageUrl(name: string) {
      return new URL(`../assets/icons/${name}`, import.meta.url).href;
    },
  },
});
