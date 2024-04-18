import { defineStore } from "pinia";
import axios from "axios";
import { useErrorsStore } from "./errors";
import { useInventoryStore } from "./inventory";
import type { ErrorMessage, InventoryItem } from "./types";
export const useUserStore = defineStore("user", {
  state: () => ({
    countInHour: 0.1,
    timerMaxTime: 7200, //max seconds
    lastTime: 7190,
    isLoggedIn: false,
    user: JSON.parse(localStorage.getItem("user") || "{}"),
    access_token: localStorage.getItem("access_token"),
  }),
  getters: {},
  actions: {
    claimMoney() {
      console.log("claim money");
    },
    async loadUser() {
      await new Promise((resolve, reject) => {
        axios
          .post("/login", {
            email: "email",
            password: "password",
          })
          .then((response) => {
            let data = response.data;
            if (data.access_token && data.user) {
              axios.defaults.headers.common["Authorization"] =
                "Bearer " + data.access_token;

              this.user = data.user;
              this.isLoggedIn = true;
              console.log("user loaded.");
              this.setList();
            }

            // resolve(response);
          })
          .catch((error) => {
            // reject(error);
            useErrorsStore().setError({
              code: error.code,
              message: error.message,
            });
          });
      });
      setTimeout(() => {}, 5000);
    },
    setList() {
      let list = [];
      for (let i = 0; i < 25; i++) {
        let inv: InventoryItem = {
          id: i,
          name: "name " + 1,
          image: import.meta.env.VITE_APP_API_URL + "/images/gun.png",
          rare: "diamond",
        };
        list.push(inv);
      }
      useInventoryStore().setItems(list);
    },
  },
});
