<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "@/components/Navbar.vue";
import BottomMenu from "@/components/BottomMenu.vue";
import Dialog from "@/components/Dialog.vue";
import MainLoading from "@/components/MainLoading.vue";
import ErrorNotify from "@/components/ErrorNotify.vue";
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()

onMounted(() => {
  // counterStore.startTimer();
  if (!userStore.isLoggedIn) {
    userStore.loadUser();
  }
});
</script>

<template>
  <Navbar v-if="userStore.isLoggedIn" />
  <RouterView v-if="userStore.isLoggedIn" />
  <MainLoading v-if="!userStore.isLoggedIn" />
  <ErrorNotify />
  <!-- <Dialog /> -->
  <!-- <BottomMenu /> -->
</template>


