<template>
  <van-nav-bar title="" left-text="" @click-left="onClickLeft" :right-text="`@` + userStore.user.name">
    <!-- <van-nav-bar title="" left-text="" @click-left="onClickLeft" :right-text="`@user`"> -->
    <!-- <template v-if="!isHome" #left>

      <van-icon name="arrow-left" />
    </template> -->

  </van-nav-bar>
  <!-- @click-right="onClickRight" /> -->
</template>
<script setup>
import { reactive, computed } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

import { useRoute } from 'vue-router'
const route = useRoute();
const onClickLeft = () => {
  // history.back();
  console.log(isHome.value)
}

// const isHome = computed(() => {
//   return route.path === '/';
// })
// const onClickRight = () => showToast('Button');
</script>