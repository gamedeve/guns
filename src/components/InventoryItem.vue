<template>
  <van-grid-item class="inventory-item item-clicked">

    <div class="content rarity border-1" :class="item.info.rarity">


      <!-- id: {{ item.id }} -->
      <div class="header text-rarity" :class="`text-${item.info.rarity}`">
        {{ item.info.name }}
      </div>
      <van-image :src="item.info.icon">
        <!-- <template #load>
        <van-loading type="spinner" />
      </template> -->
      </van-image>
      <!-- <div class="footer">

      <van-button type="primary" size="small">Primary</van-button>
      <van-button type="success" size="small">Success</van-button>
    </div> -->
      <!-- img: {{ item.image }} -->
    </div>
  </van-grid-item>
</template>
<script setup lang="ts">
// import type { InventoryItemType } from "@/stores/types";
// const props = defineProps(['item'])
const props = defineProps<{
  item: any
}>()
</script>