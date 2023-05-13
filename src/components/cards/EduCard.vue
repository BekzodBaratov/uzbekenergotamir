<template>
  <div class="educard group">
    <div class="tag px-4 pt-5 pb-10 md:pb-16 bg-white duration-200 group-hover:bg-blue-600 rounded-lg">
      <div class="relative">
        <div class="absolute top-0 right-0">
          <span class="text-7xl text-gray-600 duration-200 group-hover:text-gray-100 opacity-20 font-bold">{{
            data.number
          }}</span>
        </div>
      </div>
      <h3 class="text-primary3 md:text-primary2 md:pr-20 duration-200 group-hover:text-white">{{ data.title }}</h3>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["data"]);
const data = computed(() => props.data);
</script>

<style scoped>
.educard {
  filter: drop-shadow(-1px 6px 6px rgba(0, 0, 0, 0.2));
}
.tag {
  width: 100%;
  height: 100%;
  z-index: -1;
  clip-path: polygon(0 0, 100% 0%, 100% 70%, 85% 100%, 0 100%);
}
</style>
