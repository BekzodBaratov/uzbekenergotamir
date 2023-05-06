<template>
  <section>
    <Swiper :content="heroContnet" class="hero-swiper" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import Swiper from "./hero-swiper.vue";
import img from "../../assets/images/hero/bg_img.png";
import subImg from "../../assets/images/hero/subImg.png";
import logoImg from "../../assets/images/hero/logoImg.svg";

const heroContnet = ref([
  { id: 0, image: img, href: "/", subImage: subImg, logoImg: logoImg },
  { id: 0, image: img, href: "/", subImage: subImg, logoImg: logoImg },
  { id: 0, image: img, href: "/", subImage: subImg, logoImg: logoImg },
]);
</script>

<style scoped>
.hero-swiper {
  @apply h-[85vh];
}
</style>
