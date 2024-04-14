<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "@/components/Navbar.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import BottomMenu from "@/components/BottomMenu.vue";
import Dialog from "@/components/Dialog.vue";


</script>

<template>
  <Navbar />
  <RouterView />

  <!-- <Dialog /> -->
  <!-- <BottomMenu /> -->
</template>


