<template>
  <section
    class="divisions"
    :style="{ 'background-image': 'url(' + bgImg + '), linear-gradient(to left, #067AF2dd, #067AF2dd)' }"
  >
    <div class="container">
      <h2 class="text-primary text-white pb-12">Основные подразделения</h2>
      <div class="cards">
        <Card v-for="division in divisionsArr" :key="division.id" :division="division" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from "../cards/DivisionCard.vue";
import bgImg from "../../assets/images/divisions/bg_img.png";
import bgCardImg1 from "../../assets/images/divisions/bg-card-img.png";

const divisionsArr = [
  { id: 0, number: "01", title: "5 аккредитованные лаборатории", bgCardImg: bgCardImg1 },
  { id: 1, number: "02", title: "11 производственных участков", bgCardImg: bgCardImg1 },
  { id: 2, number: "03", title: "9 производственных цехов", bgCardImg: bgCardImg1 },
  { id: 3, number: "04", title: "Строительно-монтажное управление", bgCardImg: bgCardImg1 },
  { id: 4, number: "05", title: "Метрологическая служба", bgCardImg: bgCardImg1 },
  { id: 5, number: "06", title: "Учебный центр", bgCardImg: bgCardImg1 },
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
