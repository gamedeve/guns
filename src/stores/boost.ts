import { defineStore } from "pinia";
import axios from "axios";
import { useNotifyStore } from "./notify";
import { useUserStore } from "./user";
import type { BoostItemType } from "./types";
export const useBoostStore = defineStore("boost", {
  state: () => ({
    upgradeLoding: false,
  }),
  getters: {
    boostItems(state): BoostItemType[] {
      return [
        {
          id: 1,
          type: "speed",
          image: this.getImageUrl("miner-icon.png"),
          name: "Miner",
          description: "Increase passive mining speed",
          price: useUserStore().user?.upgrade_claim_speed_price,
          level: useUserStore().user?.level_speed,
          next_level: useUserStore().user?.next_level_speed,
          current:
            "Earn " + useUserStore().user?.claim_speed + " coin per hour",
          next_current:
            "Earn " + useUserStore().user?.next_claim_speed + " coin per hour",
        },
        {
          id: 2,
          type: "hours",
          image: this.getImageUrl("storage-icon.png"),
          name: "Storage",
          description: "Increase the fill time to claim less often",
          price: useUserStore().user?.upgrade_claim_hours_price,
          level: useUserStore().user?.level_time,
          next_level: useUserStore().user?.next_level_time,
          current: "Claim every " + useUserStore().user?.claim_hours + "h",
          next_current:
            "Claim every " + useUserStore().user?.next_claim_hours + "h",
        },
      ];
    },
  },
  actions: {
    upgradeSpeed() {
      // console.log(window.Telegram.WebApp.initData);
      this.upgradeLoding = true;
      return new Promise((resolve, reject) => {
        axios
          .post("/upgrade-speed")
          .then((response) => {
            let data = response.data;
            if (data.user) {
              // console.log(data.user);
              useUserStore().user = data.user;
            }
            this.upgradeLoding = false;
            useNotifyStore().setSuccess({
              message: "Upgrade success",
            });
            // resolve(response);
          })
          .catch((error) => {
            // reject(error);
            // console.log(error);
            useNotifyStore().setError(error);
            this.upgradeLoding = false;
          });
      });
    },
    upgradeHours() {
      // console.log(window.Telegram.WebApp.initData);
      this.upgradeLoding = true;
      return new Promise((resolve, reject) => {
        axios
          .post("/upgrade-hours")
          .then((response) => {
            let data = response.data;
            if (data.user) {
              // console.log(data.user);
              useUserStore().user = data.user;
            }
            useNotifyStore().setSuccess({
              message: "Upgrade success",
            });
            this.upgradeLoding = false;
            // resolve(response);
          })
          .catch((error) => {
            // reject(error);
            // console.log(error);
            useNotifyStore().setError(error);
            this.upgradeLoding = false;
          });
      });
    },
    getImageUrl(name: string) {
      return new URL(`../assets/icons/${name}`, import.meta.url).href;
    },
  },
});
