<template>
  <section class="affiliated py-6 md:py-12">
    <div class="container">
      <div class="pb-12 space-y-6">
        <h2 class="text-big">Аффилированные компании</h2>
        <div class="cards grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <PartnersCard v-for="partner in partners" :key="partner.id" :partner="partner" />
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-6 md:gap-8 py-6 md:py-12">
        <div v-for="comp in partnersAbout" :key="comp.id">
          <div class="flex items-center gap-3">
            <h2 class="text-primary">{{ comp.title }}</h2>
            <img class="w-24" :src="comp.image" :alt="comp.title" />
          </div>
          <p class="text-secondary">{{ comp.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import PartnersCard from "../../components/cards/PartnersCard.vue";
import compImg1 from "/src/assets/images/affiliated/1.webp";
import compImg2 from "/src/assets/images/affiliated/2.webp";
import compImg3 from "/src/assets/images/affiliated/3.webp";
import compImg4 from "/src/assets/images/affiliated/4.webp";
import compImg5 from "/src/assets/images/affiliated/5.webp";

const partners = [
  { id: 1, image: { secure_url: compImg1 } },
  { id: 2, image: { secure_url: compImg2 } },
  { id: 3, image: { secure_url: compImg3 } },
  { id: 4, image: { secure_url: compImg4 } },
  { id: 5, image: { secure_url: compImg5 } },
];
const partnersAbout = [
  {
    id: 1,
    title: "ООО «Nura Group»",
    image: compImg1,
    desc: "Производство низковольтного и высоковольтного электротехнического оборудования от 0,4 кВ до 110 кВ ",
  },
  {
    id: 2,
    title: "ООО «Узэнергосозлаш»",
    image: compImg2,
    desc: "Работы по наладке энергетического оборудования, проектирование, лабораторные исследования ",
  },
  {
    id: 3,
    title: "ООО «Smart Integrity me»",
    image: compImg3,
    desc: "Строителство промышленных предпрятий и монтаж энергооборудований ",
  },
  {
    id: 4,
    title: "ООО «Qarshi Energota’mir»",
    image: compImg4,
    desc: "Ремонт и обслуживание энергооборудования ",
  },
  {
    id: 5,
    title: "СП «Turbo Energy»",
    image: compImg5,
    desc: "Производство запасных частей для турбин и генераторов",
  },
];
</script>
