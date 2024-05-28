<template>
  <div @click="show = true" class="box-item item-clicked rarity" :class="item.rarity">

    <div class="icon">
      <img :src="iconBox" />
    </div>
    <div class="centr">
      <div class="name">
        {{ item.name }}
      </div>
      <div class="price">{{ item.price }}</div>
      <!-- <div class="description">
        {{ item.description }}
      </div> -->
    </div>

  </div>


  <van-popup v-model:show="show" closeable round position="bottom" class="item-popup" :style="{ height: '80%' }">
    <h3 class="text-rarity" :class="`text-${item.rarity}`">{{ item.name }}</h3>
    <div class="logo">
      <img class="icon" :src="iconBox" />
    </div>

    <div class="descr">
      {{ item.description }}
    </div>
    <div class="price">
      {{ item.price }}
    </div>

    <van-button :disabled="!canBuy" @click="BuyBox" :loading="shopStore.loadingBuy" class="upgrade-button" size="large"
      type="primary" loading-type="spinner" loading-text="Loading...">Buy</van-button>
  </van-popup>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import type { ShopBoxType } from "@/stores/types";

import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
import { useShopStore } from '@/stores/shop'
const shopStore = useShopStore()
// const props = defineProps(['item'])

const props = defineProps<{
  item: ShopBoxType
}>()
const emit = defineEmits(['reward'])
const show = ref(false);
const canBuy = computed(() => {
  return userStore.user.coins != undefined && userStore.user?.coins >= props.item.price
});
async function BuyBox() {
  let box = props.item;
  if (shopStore.loadingBuy) {
    return;
  }



  await shopStore.buyBox(box.id).then((response) => {

    show.value = false;
    // console.log(response);
    // console.log(response.data);
    // console.log(response.data.reward);
    emit('reward', response?.data?.reward)

  }).catch((error) => {

  });


  console.log("buy box", box.id)
}

const iconBox = computed(() => {
  return new URL(`../assets/icons/lootboxes/${props.item.icon}.png`, import.meta.url).href
})
</script>