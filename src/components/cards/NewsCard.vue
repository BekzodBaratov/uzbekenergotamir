<template>
  <div>
    <img class="full-image aspect-video pb-3" :src="news.image.secure_url" alt="image" />
    <h2 class="text-primary">{{ news.title }}</h2>
    <p class="text-secondary line-clamp-3">{{ news.description }}</p>
    <a :href="news?.path ? news.path : '#'" class="text-blue-primary group">
      <span class="flex gap-2">
        {{ t("btn") }}
        <img
          class="duration-200 group-hover:translate-x-1"
          src="../../assets/images/icons/arrow-right.svg"
          alt="arrow-right"
        />
      </span>
    </a>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const props = defineProps(["news"]);
const news = computed(() => props.news);
</script>
