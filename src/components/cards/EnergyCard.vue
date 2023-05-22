<template>
  <div class="flex flex-col rounded-lg overflow-hidden">
    <img class="w-full aspect-video border-t border-x rounded-t-lg" :src="card.images[0].secure_url" alt="image" />
    <div class="bg-blue-primary py-4 px-4 rounded-b-lg">
      <p class="text-lg font-semibold text-white pb-6">{{ card.title }}</p>
      <RouterLink @click="store.getOneEnergyProduct" class="text-white flex gap-2 group" :to="`/product/${card._id}`">
        <span>Подробнее</span>
        <img
          class="duration-200 group-hover:translate-x-1"
          src="/src/assets/images/icons/arrow-right2.svg"
          alt="arrow-icon"
        />
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useEnergyProductStore } from "../../stores/energyProduct";
const store = useEnergyProductStore();

const props = defineProps(["energyCard"]);
const card = computed(() => props.energyCard);
</script>
