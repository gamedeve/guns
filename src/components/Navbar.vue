<template>
  <van-nav-bar title="Title" left-text="Back" left-arrow @click-left="onClickLeft" />
</template>
<script setup>
function onClickLeft() {
  history.back();
}
</script>