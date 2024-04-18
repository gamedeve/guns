<template>
  <van-grid-item class="inventory-item">

    id: {{ item.id }}
    <div class="header">
      {{ item.name }}
    </div>
    <van-image :src="item.image" />
    <div class="footer">
      <van-button type="primary" size="small">Primary</van-button>
      <van-button type="success" size="small">Success</van-button>
    </div>
    <!-- img: {{ item.image }} -->
  </van-grid-item>
</template>
<script setup lang="ts">
import type { InventoryItem } from "@/stores/types";
// const props = defineProps(['item'])
const props = defineProps<{
  item: InventoryItem
}>()
</script>