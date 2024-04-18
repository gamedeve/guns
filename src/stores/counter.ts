import { defineStore } from "pinia";

import { useUserStore } from "./user";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    secondsUpdate: 1, //сек между обновлениями
    counterIntervalID: 0, //interval function
    // countInHour: 0.3,
    // timerMaxTime: 10, //max seconds
    currentTime: 0, //current time in mine
    // lastTime: 0,
    claimActive: false,
  }),
  getters: {
    countInSecond: (state) => useUserStore().countInHour / 3600,
    secondsToFill: (state) => {
      return useUserStore().timerMaxTime - state.currentTime;
    },
    // currentCount: (state) => {
    //   return +(this.secondsToFill * this.countInSecond?).toFixed(5);
    // },
    currentCount(state): number {
      return +(this.secondsToFill * this.countInSecond).toFixed(5);
    },
    timeString: (state) => {
      const pad = (n: number) => (n < 10 ? `0${n}` : n);
      const h = Math.floor(state.currentTime / 3600);
      const m = Math.floor(state.currentTime / 60) - h * 60;
      const s = Math.floor(state.currentTime - h * 3600 - m * 60);
      return `${pad(h)}h ${pad(m)}m ${pad(s)}s`;
    },
    percentFill: (state) => {
      return (
        100 - Math.ceil((state.currentTime / useUserStore().timerMaxTime) * 100)
      );
    },
  },
  actions: {
    startTimer() {
      if (this.counterIntervalID === 0) {
        this.currentTime =
          useUserStore().timerMaxTime - useUserStore().lastTime;
        this.counterIntervalID = setInterval(
          this.updateCurrentTime,
          this.secondsUpdate * 1000
        );
      }
      // console.log(timerMaxTime.value)
    },
    updateCurrentTime() {
      if (this.currentTime > 0) {
        this.currentTime -= this.secondsUpdate;
        // console.log(this.currentTime);
        // console.log(this.counterIntervalID);
      } else {
        this.stopTimer();
        this.claimActive = true;
        console.log("timer stop");
      }
    },
    stopTimer() {
      clearInterval(this.counterIntervalID);
      this.counterIntervalID = 0;
    },
    claimMoney() {
      this.claimActive = false;
      console.log(this.counterIntervalID);
      this.startTimer();
      useUserStore().claimMoney();
    },
  },
});
