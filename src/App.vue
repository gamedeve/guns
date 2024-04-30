<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "@/components/basic/Navbar.vue";
import BottomMenu from "@/components/basic/BottomMenu.vue";
import Dialog from "@/components/Dialog.vue";
import MainLoading from "@/components/basic/MainLoading.vue";
import ErrorNotify from "@/components/basic/ErrorNotify.vue";
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
import { inject } from 'vue'

// const tg = inject('tg');
// const backButton = window.Telegram.WebApp.BackButton;
onMounted(() => {
  // counterStore.startTimer();

  // console.log(window.Telegram.WebApp.initData)
  // console.log(222222222222)
  // console.log(tg)

  // Показывать кнопку только если есть GET параметры 
  // Показывать кнопку только если есть параметры 
  // и страница не главная
  // if (window.location.search && window.location.pathname !== '/') {

  //   backButton.show();

  // } else {

  //   backButton.hide();

  // }
  // backButton.onClick(() => {
  //   history.back();
  // });



  // console.log(
  //   JSON.parse(
  //     '{"' +
  //     decodeURI(window.Telegram.WebApp.initData)
  //       .replace(/"/g, '\\"')
  //       .replace(/&/g, '","')
  //       .replace(/=/g, '":"') +
  //     '"}'
  //   )
  // );
  if (!userStore.isLoggedIn) {
    userStore.loadUser();
  }
});

// Показывать кнопку только если есть GET параметры 
// Показывать кнопку только если есть параметры 
// и страница не главная

</script>

<template>
  <Navbar v-if="userStore.isLoggedIn" />
  <RouterView v-if="userStore.isLoggedIn" />
  <MainLoading v-if="!userStore.isLoggedIn" />
  <ErrorNotify />
  <!-- <Dialog /> -->
  <!-- <BottomMenu /> -->
</template>


