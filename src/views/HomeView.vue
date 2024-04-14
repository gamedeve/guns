<script setup lang="ts">
import MineLoader from "@/components/MineLoader.vue";
</script>

<template>
  <div class="page home">
    <div class="main-navigation">


      <div class="main-row">
        <div class="main-mine-cell">
          <RouterLink to="/minig" class="main-big-button mining-button">
            <img class="gelatine" src="@/assets/icons/mining-icon.png" />
            <!-- <span class="name">Mining</span> -->

          </RouterLink>
          <MineLoader />
        </div>
      </div>
      <div class="main-row">
        <RouterLink to="/boost" class="main-small-button boost-button">
          <img src="@/assets/icons/boost-icon.png" />
          <span class="name">Boost</span>
        </RouterLink>
        <RouterLink to="/missions" class="main-small-button missions-button">
          <img src="@/assets/icons/missions-icon.png" />
          <span class="name">Missions</span>
        </RouterLink>
        <RouterLink to="/inventory" class="main-small-button inventory-button">
          <img src="@/assets/icons/inventory-icon.png" />
          <span class="name">Inventory</span>
        </RouterLink>
        <RouterLink to="/shop" class="main-small-button shop-button">
          <img src="@/assets/icons/shop-icon.png" />
          <span class="name">Shop</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
