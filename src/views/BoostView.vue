<template>
  <div class="page boost">
    <h1>Boost</h1>
    <PageLoading v-show="!userStore.isLoggedIn" />
    <van-space v-show="userStore.isLoggedIn" direction="vertical" :size="20" fill>
      <boost-item v-for="item in boostStore.boostItems" :key="item.id" :item="item" @upgrade="upgrade" />
    </van-space>
  </div>
</template>
<script setup lang="ts">
// import { ref, reactive, onMounted, onBeforeUnmount, computed } from 'vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
import { useBoostStore } from '@/stores/boost'
const boostStore = useBoostStore()

import PageLoading from "@/components/basic/PageLoading.vue";
import PageSoon from "@/components/basic/PageSoon.vue";
import BoostItem from "@/components/BoostItem.vue";
import type { BoostItemType } from "@/stores/types";


function upgrade(type) {
  if (boostStore.upgradeLoding) { return; }
  // count.value += n
  console.log("upgrade", type)
  if (type == "speed") {
    boostStore.upgradeSpeed();
  }
  else if (type == "hours") {
    boostStore.upgradeHours();
  }
}
</script>