<template></template>
<script setup>
import { useNotifyStore } from '@/stores/notify'
const notifyStore = useNotifyStore()
notifyStore.$subscribe((mutation, state) => {
  // console.log(errorsStore.error)
  // console.log(mutation, state)
  if (Object.keys(notifyStore.error).length !== 0) {
    let msg = notifyStore.error?.response?.data?.message ?? notifyStore.error.message;
    showNotify({ type: 'danger', message: msg });
    notifyStore.setError({});
  }
  if (Object.keys(notifyStore.success).length !== 0) {
    // console.log(notifyStore.success != {})
    // console.log(notifyStore.success)
    let msg = notifyStore.success?.response?.data?.message ?? notifyStore.success.message;
    showNotify({ type: 'success', message: msg });
    notifyStore.setSuccess({});
  }
  if (Object.keys(notifyStore.info).length !== 0) {
    // console.log(notifyStore.info != {})
    // console.log(notifyStore.info)
    let msg = notifyStore.info?.response?.data?.message ?? notifyStore.info.message;
    showNotify({ type: 'primary', message: msg });
    notifyStore.setInfo({});
  }

})
</script>