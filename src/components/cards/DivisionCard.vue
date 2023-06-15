<template>
  <div class="card">
    <div class="bg-image">
      <img class="w-full h-full object-cover object-center" :src="division.bgCardImg" :alt="division.title" />
    </div>

    <p class="circle-number">{{ division.number }}</p>
    <p class="text-base md:text-xl font-bold">{{ division.title }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["division"]);
const division = computed(() => props.division);
</script>

<style>
.card {
  @apply rounded-lg bg-white px-4 md:px-6 pt-8 pb-16 relative;
}
.bg-image {
  @apply absolute inset-0 opacity-0 duration-200;
}
.card:hover .bg-image {
  opacity: 100;
}
</style>
