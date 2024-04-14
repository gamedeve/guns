<template>
  <van-button @click="show=!show" type="success">Open Dialog</van-button>
<van-dialog 
v-model:show="show" 
title="Title22" 
cancel-button-text="Cancel"
confirm-button-text="Ok"
show-cancel-button>
  <!-- <img src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg" />
   -->
   ddfsdf
</van-dialog>
</template>
<script setup>
import { ref } from "vue";
const show = ref(false);

</script>