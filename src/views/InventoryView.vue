<template>
  <div class="page inventory">
    <h1>Inventory</h1>
    <PageLoading v-show="inventoryStore.loading" />
    <!-- <van-cell v-show="!inventoryStore.loading" v-for="item in inventoryStore.items" :key="item" :title="item" /> -->
    <van-grid v-show="!inventoryStore.loading" :column-num="2" :border="false" :gutter="8" class="inventory-grid">
      <!-- <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="Text" /> -->
      <inventory-item v-for="item in inventoryStore.items" :key="index" :item="item" />
    </van-grid>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useInventoryStore } from '@/stores/inventory'
import PageLoading from "@/components/PageLoading.vue";
import InventoryItem from "@/components/InventoryItem.vue";
const inventoryStore = useInventoryStore()

</script>
