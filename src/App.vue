<template>
  <Navbar v-if="userStore.isLoggedIn" />
  <RouterView v-if="userStore.isLoggedIn" />
  <MainLoading v-if="loadUser" />
  <LoadError :textError="loadingError" v-if="loadingError != '' && !loadUser" />
  <ErrorNotify />
  <!-- <Dialog /> -->
  <!-- <BottomMenu /> -->
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "@/components/basic/Navbar.vue";
import BottomMenu from "@/components/basic/BottomMenu.vue";
import Dialog from "@/components/Dialog.vue";
import MainLoading from "@/components/basic/MainLoading.vue";
import LoadError from "@/components/basic/LoadError.vue";
import ErrorNotify from "@/components/basic/Notify.vue";
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
// import { inject } from 'vue'


const loadUser = ref(false);
const loadingError = ref("");
// const tg = inject('tg');
// const backButton = window.Telegram.WebApp.BackButton;
onMounted(async () => {
  if (!userStore.isLoggedIn) {
    loadUser.value = true;
    await userStore.loadUser().then((response) => {
      loadUser.value = false;
    }).catch((error) => {
      // reject(error);
      loadUser.value = false;
      // console.log('11111111111e');
      loadingError.value = "Please try again later";
    });
  }
});


const overflow = 100
document.body.style.overflowY = 'hidden'
document.body.style.marginTop = `${overflow}px`
document.body.style.height = window.innerHeight + overflow + "px"
document.body.style.paddingBottom = `${overflow}px`
window.scrollTo(0, overflow)

let ts: number | undefined
const onTouchStart = (e: TouchEvent) => {
  ts = e.touches[0].clientY
}
const scrollableEl = document.getElementById('app')
const onTouchMove = (e: TouchEvent) => {
  if (scrollableEl) {
    const scroll = scrollableEl.scrollTop
    const te = e.changedTouches[0].clientY
    if (scroll <= 0 && ts! < te) {
      e.preventDefault()
    }
  } else {
    e.preventDefault()
  }
}
document.documentElement.addEventListener('touchstart', onTouchStart, { passive: false })
document.documentElement.addEventListener('touchmove', onTouchMove, { passive: false })
// Показывать кнопку только если есть GET параметры
// Показывать кнопку только если есть параметры 
// и страница не главная

</script>


