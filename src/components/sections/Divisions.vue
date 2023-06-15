<template>
  <section
    class="divisions"
    :style="{ 'background-image': 'url(' + bgImg + '), linear-gradient(to left, #067AF2dd, #067AF2dd)' }"
  >
    <div class="container">
      <h2 class="text-primary text-white pb-12">{{ t("divisions.title") }}</h2>
      <div class="cards">
        <Card v-for="division in divisionsArr" :key="division.id" :division="division" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from "../cards/DivisionCard.vue";
import bgImg from "../../assets/images/divisions/bg_img.webp";
import bgCardImg1 from "../../assets/images/divisions/1.png";
import bgCardImg2 from "../../assets/images/divisions/2.png";
import bgCardImg3 from "../../assets/images/divisions/3.png";
import bgCardImg4 from "../../assets/images/divisions/4.png";
import bgCardImg5 from "../../assets/images/divisions/5.png";
import bgCardImg6 from "../../assets/images/divisions/6.png";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const divisionsArr = [
  { id: 0, number: "01", title: t("divisions.arr[0]"), bgCardImg: bgCardImg1 },
  { id: 1, number: "02", title: t("divisions.arr[1]"), bgCardImg: bgCardImg2 },
  { id: 2, number: "03", title: t("divisions.arr[2]"), bgCardImg: bgCardImg3 },
  { id: 3, number: "04", title: t("divisions.arr[3]"), bgCardImg: bgCardImg4 },
  { id: 4, number: "05", title: t("divisions.arr[4]"), bgCardImg: bgCardImg5 },
  { id: 5, number: "06", title: t("divisions.arr[5]"), bgCardImg: bgCardImg6 },
];
</script>

<style scoped>
.divisions {
  @apply bg-center bg-cover bg-no-repeat py-6;
}
.divisions .cards {
  @apply grid grid-cols-2 md:grid-cols-3 gap-8;
}
</style>
