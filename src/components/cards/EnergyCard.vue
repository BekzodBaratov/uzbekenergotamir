<template>
  <div class="flex flex-col rounded-lg overflow-hidden">
    <img class="w-full aspect-video border-t border-x rounded-t-lg" :src="card.images[0].secure_url" alt="image" />
    <div class="bg-blue-primary py-4 px-4 rounded-b-lg">
      <p class="text-lg font-semibold text-white pb-6">{{ card.title }}</p>
      <div @click="handleClick(card._id)" class="text-white flex gap-2 group cursor-pointer">
        <span>{{ t("btn") }}</span>
        <img
          class="duration-200 group-hover:translate-x-1"
          src="/src/assets/images/icons/arrow-right2.svg"
          alt="arrow-icon"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useEnergyProductStore } from "../../stores/energyProduct";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
const { t } = useI18n();
const store = useEnergyProductStore();
const router = useRouter();

const props = defineProps(["energyCard"]);
const card = computed(() => props.energyCard);
const handleClick = (id) => {
  router.push("/product/" + id);
};
</script>
