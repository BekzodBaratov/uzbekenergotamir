<template>
  <section class="educational relative py-8 md:py-16">
    <div class="container">
      <h2 class="text-big">{{ t("education.title") }}</h2>
      <p class="text-primary3 pb-6">{{ t("education.desc") }}</p>
      <div class="cards grid grid-cols-2 md:grid-cols-3 gap-6 py-8">
        <EducationalCard v-for="data in eduArr" :key="data.id" :data="data" />
      </div>
      <div class="flex justify-center items-end">
        <a href="/src/assets/Хисобот-2023(январ-май).docx" class="btn" download>Download</a>
      </div>
    </div>

    <div class="eduClipPath1 absolute inset-0 bg-yellowish -z-50"></div>
    <div class="eduClipPath2 absolute inset-0 bg-bluer -z-50"></div>
  </section>
</template>

<script setup>
import EducationalCard from "/src/components/cards/EduCard.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const eduArr = [
  { id: 1, title: t("education.descs[0]"), number: "01", workers: 25, date: "15.02.2023 – 15.03.2023" },
  { id: 2, title: t("education.descs[1]"), number: "02", workers: 26, date: "03.04.2023 – 14.04.2023" },
  { id: 3, title: t("education.descs[2]"), number: "03", workers: 5, date: "15.05.2023-17.05.2023" },
  { id: 4, title: t("education.descs[3]"), number: "04", workers: 0, date: "" },
  { id: 5, title: t("education.descs[4]"), number: "05", workers: 30, date: "20.02.2023 – 17.03.2023" },
  { id: 6, title: t("education.descs[5]"), number: "06", workers: 0, date: "" },
  { id: 7, title: t("education.descs[6]"), number: "07", workers: 12, date: "01.05.2023 – 15.05.2023" },
  { id: 8, title: t("education.descs[7]"), number: "08", workers: 0, date: "" },
  { id: 9, title: t("education.descs[8]"), number: "09", workers: 0, date: "" },
  { id: 10, title: t("education.descs[9]"), number: "10", workers: 56, date: "20.02.2023 – 17.03.2023" },
];
</script>

<style scoped>
.eduClipPath1 {
  clip-path: polygon(0 20px, 0 0, 100% 0, 100% 20px, 50% 50%);
}
.eduClipPath2 {
  clip-path: polygon(100% 20px, 100% 100%, 98% 100%, 50% 50%);
}
</style>
