<template>
  <div class="mine-laoder-block">
    <span class="mine-info mine-percent">{{ counterStore.currentCount }}</span>
    <div class="mine-laoder">
      <div class="fill" :style="{ width: counterStore.percentFill + '%' }"></div>
    </div>
    <span class="mine-info mine-time">{{ counterStore.timeString }} to fill</span>
    <button class="btn-blue claim-button" :disabled="!counterStore.claimActive" @click="counterStore.claimMoney">
      <!-- <img src="@/assets/buttons/Btn06Orange_p.png" alt=""> -->
      <span>Claim</span>
    </button>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()

import { useUserStore } from '@/stores/user'
const userStore = useUserStore()


userStore.$subscribe((mutation, state) => {
  console.log('a change happened')
  console.log(mutation, state)
})
onMounted(() => {
  // counterStore.startTimer();
  // if (userStore.isLoggedIn) {
  //   counterStore.startTimer();
  // }
});
onBeforeUnmount(() => {
  clearInterval(counterStore.updateTimeInterval);
});

userStore.$subscribe((mutation, state) => {
  if (state.isLoggedIn) {
    counterStore.startTimer();
  }
})

</script>