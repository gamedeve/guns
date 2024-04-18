<template>
  <van-nav-bar title="" left-text="Back" right-text="Button" left-arrow @click-left="onClickLeft"
    @click-right="onClickRight" />
</template>
<script setup>
const onClickLeft = () => {
  history.back();
}
const onClickRight = () => showToast('Button');
</script>