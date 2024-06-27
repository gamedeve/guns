<template>
  <div @click="startMission()" class="mission-item item-clicked">

    <div class="icon">
      <!-- <van-image :src="item.image" /> -->
      <van-icon :name="iconMission" size="30" />
    </div>
    <div class="centr">
      <div class="name">
        {{ item.name }}
      </div>
      <div class="description">
        {{ item.description }}
      </div>
    </div>
    <div class="reward">
      <div class="count">{{ item.reward }}</div>
      <!-- <div v-if="!item.completed" class="is-complete">Completed</div> -->
      <div v-if="item.completed" class="is-complete">Completed</div>
      <div v-if="check" class="is-complete">Check...</div>
    </div>
    <!-- img: {{ item.image }} -->
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import type { MissionItemType } from "@/stores/types";

import { useMissionsStore } from '@/stores/missions'
const missionsStore = useMissionsStore()
// const props = defineProps(['item'])
const props = defineProps<{
  item: MissionItemType
}>()

const check = ref(false);
async function startMission() {
  let mission = props.item;
  if (mission.completed || check.value) {
    return;
  }


  check.value = true;

  await missionsStore.checkMission(mission.id).then((response) => {
    check.value = false;
  }).catch((error) => {
    check.value = false;
    // console.log('11111111111e');
    // loadingError.value = "Please try again later";
  });

  if (mission.url != '') {
    // openTelegramLink(mission.url);
    window.open(mission.url, "_blank");
  }
  console.log("start", mission.id)
}

const iconMission = computed(() => {
  if (props.item.icon != '') {
    return props.item.icon;
  }
  return 'apps-o';
})
</script>