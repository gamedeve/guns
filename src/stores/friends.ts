import { defineStore } from "pinia";
import { useNotifyStore } from "./notify";
import { useUserStore } from "./user";
import axios from "axios";
export const useFriendsStore = defineStore("friends", {
  state: () => ({
    items: [],
    inviteText: "weweqwe",
    shareLink: "cxzzczxc",
    loading: true,
  }),
  // getters: {},
  actions: {
    setItems(items: any) {
      this.items = items;
      this.loading = false;
    },
    getFriends() {
      // console.log(window.Telegram.WebApp.initData);
      this.loading = true;
      return new Promise((resolve, reject) => {
        axios
          .get("/friends")
          .then((response) => {
            let data = response.data;
            if (data.friends) {
              this.setItems(data.friends);
            }
            if (data.inviteText) {
              this.inviteText = data.inviteText;
            }
            if (data.shareLink) {
              this.shareLink = data.shareLink;
            }
            console.log(data);
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
