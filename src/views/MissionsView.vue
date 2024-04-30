<template>
  <div class="page missions">
    <h1>Missions</h1>

    <PageSoon />
    <!-- <PageLoading v-show="missionsStore.loading" />
    <van-space v-show="!missionsStore.loading" direction="vertical" :size="20" fill>
      <mission-item v-for="item in missionsStore.items" :key="index" :item="item" />
    </van-space> -->
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useMissionsStore } from '@/stores/missions'
import PageLoading from "@/components/basic/PageLoading.vue";
import PageSoon from "@/components/basic/PageSoon.vue";
import MissionItem from "@/components/MissionItem.vue";
const missionsStore = useMissionsStore()

</script>