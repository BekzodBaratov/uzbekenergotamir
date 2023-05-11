<template>
  <div class="card" :style="{ 'background-image': 'url(' + banner.bgImg + ')' }">
    <div>
      <h2 class="text-primary">{{ banner.title }}</h2>
      <p class="text-secondary">{{ banner.desc1 }}</p>
      <p class="text-secondary">{{ banner.desc2 }}</p>
      <p class="text-secondary">{{ banner.desc3 }}</p>
      <RouterLink :to="banner.href" class="btn">{{ banner.btn }}</RouterLink>
    </div>
    <div>
      <img class="w-full object-contain object-center" :src="banner.img" :alt="banner.title" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["banner"]);
const banner = computed(() => props.banner);
</script>

<style scoped>
.card {
  @apply grid md:grid-cols-[1.3fr_1fr] items-center gap-6  md:gap-12 lg:gap-32 bg-white rounded-lg bg-center bg-cover bg-no-repeat shadow-xl px-6 py-8;
}
</style>
