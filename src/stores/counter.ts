import { defineStore } from "pinia";

import { useUserStore } from "./user";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    secondsUpdate: 1, //сек между обновлениями
    counterIntervalID: 0, //interval function
    countInHour: 0,
    leftTime: 0, //time left
    timerMaxTime: 0,
    claim_at: "",
    next_claim_at: "",

    claimActive: false,
  }),
  getters: {
    countInSecond: (state) => state.countInHour / 3600,

    currentCount(state): number {
      if (state.leftTime <= 0) {
        return +(this.timerMaxTime * this.countInSecond).toFixed(5);
      }

      return +(
        (this.timerMaxTime - this.leftTime) *
        this.countInSecond
      ).toFixed(5);
    },
    timeString: (state) => {
      // console.log("leftTime", state.leftTime);
      const pad = (n: number) => (n < 10 ? `0${n}` : n);
      if (state.leftTime <= 0) {
        return `${pad(0)}h ${pad(0)}m ${pad(0)}s`;
      }

      const h = Math.floor(state.leftTime / 3600);
      const m = Math.floor(state.leftTime / 60) - h * 60;
      const s = Math.floor(state.leftTime - h * 3600 - m * 60);
      return `${pad(h)}h ${pad(m)}m ${pad(s)}s`;
    },
    percentFill: (state) => {
      if (state.leftTime <= 0) {
        return 100;
      }
      return 100 - Math.ceil((state.leftTime / state.timerMaxTime) * 100);
    },
  },
  actions: {
    startTimer() {
      if (this.counterIntervalID === 0) {
        // let dif =
        //   (Date.now() - Date.parse(this.next_claim_at)) / 1000;
        // this.currentTime = Math.abs(dif);
        // console.log("this.currentTime", this.currentTime);
        // this.currentTime = useUserStore().timerMaxTime;
        this.redrawTimer();
        this.counterIntervalID = setInterval(
          this.updateCurrentTime,
          this.secondsUpdate * 1000
        );
      }
      // console.log(timerMaxTime.value)
    },
    updateCurrentTime() {
      // console.log("Date.now()", Date.now());
      // console.log("new Date(", new Date());
      // console.log("this.next_claim_at", this.next_claim_at);
      // console.log("this.next_claim_at+", Date.parse(this.next_claim_at));
      if (Date.now() < Date.parse(this.next_claim_at)) {
        // this.currentTime -= this.secondsUpdate;
        // console.log(this.currentTime);
        // console.log(this.counterIntervalID);
        this.redrawTimer();
      } else {
        this.stopTimer();

        console.log("timer stop");
      }

      if (
        Date.parse(this.claim_at) + 3600000 < Date.now() &&
        !this.claimActive
      ) {
        console.log("__", Date.parse(this.claim_at) + 3600);
        console.log("__", Date.now());
        this.claimActive = true;
      }
    },
    redrawTimer() {
      // console.log("this.claim_at", this.claim_at);
      // // console.log("this.claim_at", Date.parse(this.claim_at));
      // console.log("this.next_claim_at", this.next_claim_at);
      // // console.log("this.next_claim_at", Date.parse(this.next_claim_at));
      // console.log("this.now", new Date().toISOString());
      // console.log("this.utc", new Date().toUTCString());

      // console.log("_________________________________");

      let leftDiff = (Date.parse(this.next_claim_at) - Date.now()) / 1000;
      this.leftTime = leftDiff;
      let maxDiff =
        (Date.parse(this.next_claim_at) - Date.parse(this.claim_at)) / 1000;
      this.timerMaxTime = Math.abs(maxDiff);
      // console.log("this.leftTime", this.leftTime);
      // console.log("this.timerMaxTime", this.timerMaxTime);
      //   (Date.now() - Date.parse(this.next_claim_at)) / 1000;
      // this.currentTime = Math.abs(dif)
    },
    stopTimer() {
      clearInterval(this.counterIntervalID);
      this.counterIntervalID = 0;
    },
    claimMoney() {
      this.stopTimer();
      this.claimActive = false;
      console.log(this.counterIntervalID);

      useUserStore().claimMoney();
    },
  },
});
