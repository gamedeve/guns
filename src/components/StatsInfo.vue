<template>
  <div class="stats-block">
    <span class="mine-info balance">Balance: {{ userStore.user.coins }}</span>
    <span class="mine-info mine-time">{{ counterStore.countInHour }} $/hour</span>
  </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
</script>