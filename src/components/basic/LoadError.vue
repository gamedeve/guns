<template>
  <div class="load-error">
    <h2>Error</h2>

    {{ textError }}
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  textError: string
}>()
</script>