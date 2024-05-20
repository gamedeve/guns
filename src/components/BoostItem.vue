<template>
  <div class="boost-item item-clicked" @click="show = true">
    <img class="icon" :src="item.image" />
    <!-- id: {{ item.id }} -->
    <div class="center">
      <div class="name">
        {{ item.name }}
      </div>
      <div class="descr">
        {{ item.description }}
      </div>
    </div>
    <div class="level">
      {{ item.level }} Lvl
      <span v-if="isMaxLevel" class="max-level">[MAX]</span>
    </div>
  </div>


  <van-popup v-model:show="show" closeable round position="bottom" class="item-popup" :style="{ height: '70%' }">
    <h3>{{ item.name }}</h3>
    <div class="descr">
      {{ item.description }}
    </div>
    <div class="level-item next-level">
      <img class="icon" :src="item.image" />

      <div class="upgrade-item-descr">
        {{ item.next_current }}
      </div>
      <div class="upgrade-item-level">
        {{ item.next_level }} Lvl
      </div>
    </div>
    <van-icon v-if="!isMaxLevel" class="upgrade-icon" name="arrow-up" size="3rem" />
    <div v-if="!isMaxLevel" class="level-item current-level">
      <img class="icon" :src="item.image" />

      <div class="upgrade-item-descr">
        {{ item.current }}
      </div>
      <div class="upgrade-item-level">
        {{ item.level }} Lvl
      </div>
    </div>
    <div v-if="!isMaxLevel" class="price">Price upgrade: {{ item.price }}</div>
    <van-button :disabled="!upgradable" v-if="!isMaxLevel" @click="upgrade" :loading="boostStore.upgradeLoding"
      class="upgrade-button" size="large" type="primary" loading-type="spinner"
      loading-text="Loading...">Upgrade</van-button>
  </van-popup>
</template>
<script setup lang="ts">
import type { BoostItemType } from "@/stores/types";
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useBoostStore } from '@/stores/boost'
const boostStore = useBoostStore()
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
// const props = defineProps(['item'])
const props = defineProps<{
  item: BoostItemType
  // level: string
  // count: string
}>()
const show = ref(false);
const upgradable = computed(() => {
  return userStore.user.coins != undefined && userStore.user?.coins >= props.item.price

})
const showPopup = () => {
  show.value = true;
};
const emit = defineEmits(['upgrade'])

const upgrade = () => {
  emit('upgrade', props.item.type)
};

const isMaxLevel = computed(() => {
  // console.log(props.item.level == props.item.next_level)
  return props.item.level == props.item.next_level;

})
// onMounted(() => {
//   // console.log(props.item)
//   // counterStore.startTimer();
//   // if (userStore.isLoggedIn) {
//   //   counterStore.startTimer();
//   // }
// });
</script>