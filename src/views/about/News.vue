<template>
  <section class="news py-8 md:py-12">
    <div v-if="store.news.length" class="container">
      <pre>{{ store.getOtherNews }}</pre>
      <div class="space-y-6">
        <BasePhotoText
          v-for="(uzbekenergo, i) in store.getUzbekenergo"
          :id="uzbekenergo._id"
          :btn="true"
          :reverse="i % 2"
          :line_clamp="10"
          class="pb-8"
        >
          <template #image>
            <img class="full-image" :src="uzbekenergo.image.secure_url" alt="news image" />
          </template>
          <template #title>{{ uzbekenergo.title }}</template>
          <template #desc>{{ uzbekenergo.description }}</template>
          <template #btn> <a href="/">Подробнее</a> </template>
        </BasePhotoText>
      </div>
      <div>
        <h2 class="text-big">Другие новости</h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          <NewsCard v-for="news in store.getOtherNews" :key="news._id" :news="news" />
        </div>
      </div>
    </div>
    <div v-else>
      <div class="text-center py-20">
        <p class="text-big">News Not Found</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import BasePhotoText from "../../components/ui/BasePhotoText.vue";
import NewsCard from "/src/components/cards/NewsCard.vue";
import { useNewsStore } from "../../stores/news";
const store = useNewsStore();

store.getNews();
</script>
