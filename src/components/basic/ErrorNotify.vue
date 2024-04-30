<template></template>
<script setup>
import { useErrorsStore } from '@/stores/errors'
const errorsStore = useErrorsStore()
errorsStore.$subscribe((mutation, state) => {
  console.log('a errors happened')
  console.log(mutation, state)
  if (errorsStore.error != {}) {
    showNotify({ type: 'danger', message: errorsStore.error.message });
  }

})
</script>