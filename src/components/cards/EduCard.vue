<template>
  <div class="educard group">
    <div class="tag px-4 pt-5 pb-6 bg-white duration-200 group-hover:bg-blue-600 rounded-lg flex flex-col">
      <div class="relative">
        <div class="absolute top-0 right-0">
          <span class="text-7xl text-gray-600 duration-200 group-hover:text-gray-100 opacity-20 font-bold">{{
            data.number
          }}</span>
        </div>
      </div>
      <h3 class="text-primary3 md:text-primary2 md:pr-20 duration-200 group-hover:text-white flex-grow">
        {{ data.title }}
      </h3>

      <div class="pt-10">
        <div v-if="data.workers" class="flex gap-2">
          <p class="text-primary3 group-hover:text-white">{{ t("education.other[0]") }}:</p>
          <p class="text-primary3 group-hover:text-white">{{ data.workers }}</p>
        </div>
        <div v-if="data.workers" class="flex gap-2">
          <p class="text-primary3 group-hover:text-white">{{ t("education.other[1]") }}:</p>
          <p class="text-primary3 group-hover:text-white">{{ data.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
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
