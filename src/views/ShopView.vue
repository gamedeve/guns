<template>
  <div class="page shop">
    <h1>Shop</h1>
    <!-- <PageSoon /> -->
    <PageLoading v-show="shopStore.loading" />
    <van-overlay :show="showPr">
      <div class="wrapper wrapper-reward fade-in-one" @click="closeRewardBlock">
        <h2>You received</h2>

        <img class="reward-image" :src="rewardImage" />
        <h3>{{ rewardName }}</h3>
        <div class="continue">Tap to continue</div>
      </div>
    </van-overlay>
    <van-space v-show="!shopStore.loading" direction="vertical" :size="20" fill>
      <box-item v-for="item in shopStore.boxes" :key="item.id" :item="item" @reward="showPrize" />
    </van-space>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import PageSoon from "@/components/basic/PageSoon.vue";
import PageLoading from "@/components/basic/PageLoading.vue";
// import PageSoon from "@/components/basic/PageSoon.vue";
import BoxItem from "@/components/BoxItem.vue";
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
import { useShopStore } from '@/stores/shop'
const shopStore = useShopStore()

const showPr = ref(false);
const rewardImage = ref('');
const rewardName = ref('');

onMounted(async () => {
  if (userStore.isLoggedIn) {
    await shopStore.getBoxes().then((response) => {

    }).catch((error) => {
      console.log(error);
      // loadingError.value = "Please try again later";
    });
  }
});

function closeRewardBlock() {
  rewardImage.value = '';
  rewardName.value = '';
  showPr.value = false;
}
function showRewardBlock() {
  showPr.value = true;
}

function showPrize(reward: any) {
  console.log(reward)
  rewardImage.value = reward?.icon;
  rewardName.value = reward?.name;
  showRewardBlock();
}
</script>

