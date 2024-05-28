<template>
  <div class="page missions">
    <h1>Missions</h1>

    <!-- <PageSoon /> -->
    <PageLoading v-show="missionsStore.loading" />
    <van-space v-show="!missionsStore.loading" direction="vertical" :size="20" fill>
      <mission-item v-for="item in missionsStore.items" :key="item.id" :item="item" />
    </van-space>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import PageLoading from "@/components/basic/PageLoading.vue";
// import PageSoon from "@/components/basic/PageSoon.vue";
import MissionItem from "@/components/MissionItem.vue";

import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
import { useMissionsStore } from '@/stores/missions'
const missionsStore = useMissionsStore()


// const tg = inject('tg');
// const backButton = window.Telegram.WebApp.BackButton;
onMounted(async () => {
  if (userStore.isLoggedIn) {
    await missionsStore.getMissions().then((response) => {
    }).catch((error) => {
      // console.log('11111111111e');
      // loadingError.value = "Please try again later";
    });
  }
});
</script>