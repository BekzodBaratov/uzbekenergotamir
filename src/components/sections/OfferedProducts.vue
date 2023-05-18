<template>
  <div v-if="store.energyProducts.length">
    <h2 class="text-big">Предлагаемые товары</h2>
    <div class="cards grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
      <EnergyCard v-for="product in store.getSolarPanel" :key="product._id" :energyCard="product" />
    </div>
  </div>
</template>

<script setup>
import EnergyCard from "/src/components/cards/EnergyCard.vue";
import { useEnergyProductStore } from "../../stores/energyProduct";
const store = useEnergyProductStore();

store.getEnergyProducts();
</script>
