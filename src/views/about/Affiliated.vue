<template>
  <section class="affiliated py-6 md:py-12">
    <div class="container">
      <div class="pb-12">
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
import compImg1 from "/src/assets/images/affiliated/img1.png";
import compImg2 from "/src/assets/images/affiliated/img2.png";
import compImg3 from "/src/assets/images/affiliated/img3.png";
import compImg4 from "/src/assets/images/affiliated/img4.png";
import compImg5 from "/src/assets/images/affiliated/img5.png";
import compImg6 from "/src/assets/images/affiliated/img6.png";
import compImg7 from "/src/assets/images/affiliated/img7.png";

const partners = [
  { id: 1, image: { secure_url: compImg1 } },
  { id: 2, image: { secure_url: compImg2 } },
  { id: 3, image: { secure_url: compImg3 } },
  { id: 4, image: { secure_url: compImg4 } },
  { id: 5, image: { secure_url: compImg5 } },
  { id: 6, image: { secure_url: compImg6 } },
  { id: 7, image: { secure_url: compImg7 } },
];
const partnersAbout = [
  {
    id: 1,
    title: "Компания Nura group",
    image: compImg1,
    desc: "Ведение нашего бизнеса к вершинам качества и надежности. Обеспечивая профессиональный и качественный подход к решению проблем, повышения энергоэффективности оборудования, надежности его эксплуатации. Подготовка, переподготовка и повышение квалификации специалистов и рабочего персонала. ",
  },
  {
    id: 2,
    title: "Компания Nura group",
    image: compImg1,
    desc: "Ведение нашего бизнеса к вершинам качества и надежности. Обеспечивая профессиональный и качественный подход к решению проблем, повышения энергоэффективности оборудования, надежности его эксплуатации. Подготовка, переподготовка и повышение квалификации специалистов и рабочего персонала. ",
  },
  {
    id: 3,
    title: "Компания Nura group",
    image: compImg1,
    desc: "Ведение нашего бизнеса к вершинам качества и надежности. Обеспечивая профессиональный и качественный подход к решению проблем, повышения энергоэффективности оборудования, надежности его эксплуатации. Подготовка, переподготовка и повышение квалификации специалистов и рабочего персонала. ",
  },
  {
    id: 4,
    title: "Компания Nura group",
    image: compImg1,
    desc: "Ведение нашего бизнеса к вершинам качества и надежности. Обеспечивая профессиональный и качественный подход к решению проблем, повышения энергоэффективности оборудования, надежности его эксплуатации. Подготовка, переподготовка и повышение квалификации специалистов и рабочего персонала. ",
  },
  {
    id: 5,
    title: "Компания Nura group",
    image: compImg1,
    desc: "Ведение нашего бизнеса к вершинам качества и надежности. Обеспечивая профессиональный и качественный подход к решению проблем, повышения энергоэффективности оборудования, надежности его эксплуатации. Подготовка, переподготовка и повышение квалификации специалистов и рабочего персонала. ",
  },
  {
    id: 6,
    title: "Компания Nura group",
    image: compImg1,
    desc: "Ведение нашего бизнеса к вершинам качества и надежности. Обеспечивая профессиональный и качественный подход к решению проблем, повышения энергоэффективности оборудования, надежности его эксплуатации. Подготовка, переподготовка и повышение квалификации специалистов и рабочего персонала. ",
  },
];
</script>
