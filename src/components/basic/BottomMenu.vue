<template>
  <van-tabbar class="main-tabbar" route>
    <van-tabbar-item replace to="/" icon="home-o">
      <span>Custom</span>
      <template #icon="props">
        <img src="@/assets/icons/factory-icon.png" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/shop" icon="shop">Shop</van-tabbar-item>
    <van-tabbar-item replace to="/missions" icon="friends-o">Missions</van-tabbar-item>
    <van-tabbar-item replace to="/boost" icon="setting-o">Boost</van-tabbar-item>
    <van-tabbar-item replace to="/inventory" icon="setting-o">Inventory</van-tabbar-item>
  </van-tabbar>
</template>
<script setup>
import { ref } from 'vue'
// const active = ref(0);
</script>
<style lang="scss"></style>


