<template>
  <div @click="show = true" class="box-item item-clicked rarity border-2" :class="item.rarity">

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


  <van-popup v-model:show="show" closeable round position="bottom" class="item-popup box-popup"
    :style="{ height: '80%' }">
    <h3 class="text-rarity" :class="`text-${item.rarity}`">{{ item.name }}</h3>
    <div class="logo">
      <img class="icon" :src="iconBox" />
    </div>

    <div class="drop-block">
      <div class="drop-chance text-common icon-common">
        <span v-html="iconGun" class="gun-icon"></span> - {{ item.dropChanceCommon }}%
      </div>
      <div class="drop-chance text-rare icon-rare">
        <span v-html="iconGun" class="gun-icon"></span> - {{ item.dropChanceRare }}%
      </div>
      <div class="drop-chance text-epic icon-epic">
        <span v-html="iconGun" class="gun-icon"></span> - {{ item.dropChanceEpic }}%
      </div>
      <div class="drop-chance text-legendary icon-legendary">
        <span v-html="iconGun" class="gun-icon"></span> - {{ item.dropChanceLegendary }}%
      </div>
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


const iconGun = '<svg height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25.489 25.489" xml:space="preserve" ><path d="M0.293,22.117l2.329,2.757c0,0,0.822,1.163,1.413,0.291c0.591-0.87,4.134-8.052,4.134-8.052 s0.355-0.586,0.604,0.461s2.294,6.113,2.294,6.113s0.309,0.427,0.68,0.112c0.372-0.312,1.86-1.567,1.86-1.567 s0.502-0.159-0.018-1.151c-0.521-0.995-2.43-5.521-2.43-5.521s-0.279-0.58,0.125-0.92c0.403-0.339,0.924-0.728,0.924-0.728 s0.232-0.479,0.871,0.026c0.638,0.504,2.468,2.357,5.287,3.054c2.818,0.699,5.285,0.793,5.285,0.793s0.604,0.022,0.689-1.009 c0.088-1.026,0.037-2.47,0.037-2.47s0.058-0.688-0.547-0.708c-0.603-0.021-1.627,0.209-2.918-0.189 c-1.291-0.396-4.208-2.53-4.208-2.53s-0.468-0.367-0.034-0.735c0.434-0.366,3.471-2.928,3.471-2.928s0.521-0.389,0.207-0.761 c-0.313-0.371-0.47-0.557-0.47-0.557l5.516-4.658L24.346,0L18.83,4.656l-0.453-0.409c0,0-0.403-0.351-0.744-0.063 c-0.34,0.284-3.9,3.236-3.9,3.236s-1.003-1.061-1.746-0.434s-5.266,4.449-5.266,4.449s-0.197,0.271-0.042,0.83 c0.154,0.561,0.437,0.957,0.158,1.193c-0.278,0.234-1.735,1.465-1.735,1.465s-0.407,0.397-0.356,1.151 c0.052,0.752-0.364,1.578-1.169,2.26c-0.804,0.68-3.125,2.586-3.125,2.586S-0.229,21.497,0.293,22.117z"></path> <path d="M21.174,3.157c0,0-1.847-2.189-2.171-2.571c-0.324-0.384-1.266-0.722-1.381,0.625 c-0.129,1.551-0.273,3.638-0.273,3.638l1.611,0.053c0,0-0.079-0.855-0.195-1.284c-0.146-0.534,0.107-0.796,0.396-0.452 c0.289,0.339,0.832,0.979,0.832,0.979L21.174,3.157z"></path> <path d="M11.204,16.285c0,0,0.512-0.432,0.921-0.777c0.409-0.345,0.805-1.12,0.464-2.146 c-0.34-1.025,1,0.147,1,0.147s0.703,1.612-0.496,2.623c-1.204,1.019-1.736,1.423-1.736,1.423L11.204,16.285z"></path></svg>';
</script>