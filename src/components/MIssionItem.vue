<template>
  <van-grid-item class="mission-item">

    <div class="icon">

      <van-image :src="item.image" />
    </div>
    {{ item.name }}
    <div class="footer">
      <van-button type="primary" size="small">Primary</van-button>
      <van-button type="success" size="small">Success</van-button>
    </div>
    <!-- img: {{ item.image }} -->
  </van-grid-item>
</template>
<script setup lang="ts">
import type { MissionItem } from "@/stores/types";
// const props = defineProps(['item'])
const props = defineProps<{
  item: MissionItem
}>()
</script>