<template>
  <div @click="startMission()" class="mission-item">

    <div class="icon">
      <van-image :src="item.image" />
    </div>
    <div class="name">
      {{ item.name }}
    </div>
    <div class="reward">
      <div class="count">{{ item.reward }}</div>
      <!-- <div v-if="!item.completed" class="is-complete">Completed</div> -->
      <div v-if="item.completed" class="is-complete">Completed</div>
    </div>
    <!-- img: {{ item.image }} -->
  </div>
</template>
<script setup lang="ts">
import type { MissionItem } from "@/stores/types";
// const props = defineProps(['item'])
const props = defineProps<{
  item: MissionItem
}>()

function startMission() {
  let mission = props.item;
  if (mission.completed) {
    return;
  }


  console.log("start", props.item.id)
}
</script>