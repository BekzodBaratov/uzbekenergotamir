<template>
  <section class="news py-8 md:py-12">
    <div class="container">
      <BasePhotoText :btn="true" class="pb-8">
        <template #image>
          <img class="full-image" :src="uzenergotamirNews.image" alt="news image" />
        </template>
        <template #title>{{ uzenergotamirNews.title }}</template>
        <template #desc>{{ uzenergotamirNews.desc }}</template>
        <template #btn> Подробнее </template>
      </BasePhotoText>
      <div>
        <h2 class="text-big">Другие новости</h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          <NewsCard v-for="news in otherNews" :key="news.id" :news="news" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BasePhotoText from "../../components/ui/BasePhotoText.vue";
import NewsCard from "/src/components/cards/NewsCard.vue";

const uzenergotamirNews = {
  image: "/src/assets/images/news/news1.png",
  title: "Узбекэнерготамир открывает свой 12 филиал итп",
  desc: "В 2001 году во исполнении Указа Президента Республики Узбекистан«Об углублении экономических реформ в энергетике» и ПостановленияКабинета Министров «О мерах по разгосударствлению и приватизациипредприятий», началось преобразование предприятия в открытоеакционерное общество “Узбекэнерготаъмир. В 2001 году во исполнении Указа Президента Республики Узбекистан«Об углублении экономических реформ в энергетике» и ПостановленияКабинета Министров «О мерах по разгосударствлению и приватизациипредприятий», началось преобразование предприятия в открытоеакционерное общество “Узбекэнерготаъмир.",
};
const otherNews = [
  {
    id: 1,
    image: "/src/assets/images/news/unsplash_ApkLrKZPFtE.png",
    title: "5 способов скоротать вечер, если отключили интернет",
    desc: "Вот уже несколько лет наша компания занимает уверенные позиции на рынке и предоставляет только самые современные решения, позволяя нашим клиентам делать заказы через сайт.",
  },

  {
    id: 2,
    image: "/src/assets/images/news/unsplash_mpwF3Mv2UaU.png",
    title: "Искать квартиру три месяца и поселиться рядом с лучшими пирожными",
    desc: "Вот уже несколько лет наша компания занимает уверенные позиции на рынке и предоставляет только самые современные решения, позволяя...",
  },
  {
    id: 3,
    image: "/src/assets/images/news/unsplash_s9CC2SKySJM.png",
    title: 'Подробный обзор ЖК комфорт-класса «Светлый мир «Станция "Л"» на юго',
    desc: "Вот уже несколько лет наша компания занимает уверенные позиции на рынке и предоставляет только самые современные решения...",
  },
  {
    id: 4,
    image: "/src/assets/images/news/unsplash_ApkLrKZPFtE.png",
    title: "5 способов скоротать вечер, если отключили интернет",
    desc: "Вот уже несколько лет наша компания занимает уверенные позиции на рынке и предоставляет только самые современные решения, позволяя нашим клиентам делать заказы через сайт.",
  },

  {
    id: 5,
    image: "/src/assets/images/news/unsplash_mpwF3Mv2UaU.png",
    title: "Искать квартиру три месяца и поселиться рядом с лучшими пирожными",
    desc: "Вот уже несколько лет наша компания занимает уверенные позиции на рынке и предоставляет только самые современные решения, позволяя...",
  },
  {
    id: 6,
    image: "/src/assets/images/news/unsplash_s9CC2SKySJM.png",
    title: 'Подробный обзор ЖК комфорт-класса «Светлый мир «Станция "Л"» на юго',
    desc: "Вот уже несколько лет наша компания занимает уверенные позиции на рынке и предоставляет только самые современные решения...",
  },
];
</script>
