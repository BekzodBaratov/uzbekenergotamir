<template>
  <div class="">
    <img class="full-image aspect-video pb-3" :src="news.image" alt="image" />
    <h2 class="text-primary">{{ news.title }}</h2>
    <p class="text-secondary">{{ news.desc }}</p>
    <router-link :to="`/about/news/${news.id}`" class="text-blue-primary group">
      <span class="flex gap-2">
        Подробнее
        <img
          class="duration-200 group-hover:translate-x-1"
          src="../../assets/images/icons/arrow-right.svg"
          alt="arrow-right"
        />
      </span>
    </router-link>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["news"]);
const news = computed(() => props.news);
</script>
