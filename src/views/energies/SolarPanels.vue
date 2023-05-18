<template>
  <section class="waterHeater my-8">
    <div class="container">
      <div class="pb-12 md:pb-20 space-y-8">
        <BannerCard v-for="banner in banners" :key="banner.id" :banner="banner" />
      </div>
      <div class="pb-12 md:pb-20">
        <OfferedProducts :products="store.getSolarPanel" />
      </div>
      <div class="pb-12 md:pb-20">
        <ComplatedProjects />
      </div>
    </div>
    <div>
      <Calculate />
    </div>
    <div>
      <ContactSection />
    </div>
  </section>
</template>

<script setup>
import BannerCard from "/src/components/cards/BannerCard.vue";
import OfferedProducts from "/src/components/sections/OfferedProducts.vue";
import ComplatedProjects from "/src/components/sections/ComplatedProjects.vue";
import Calculate from "../../components/sections/Calculate.vue";
import ContactSection from "../../components/sections/ContactSection.vue";

import bannerImg1 from "/src/assets/images/banner/banner4.png";
import bannerImg2 from "/src/assets/images/banner/banner2.png";
import bannerBg2 from "/src/assets/images/banner/banner_bg2.png";
import { reactive } from "vue";

import { useEnergyProductStore } from "../../stores/energyProduct";
const store = useEnergyProductStore();

store.getEnergyProducts();

const banners = reactive([
  {
    id: 1,
    title: "Солнечные водонагреватели",
    desc1:
      "В условиях стремительного развития ветроэнергетики в Узбекистане,УЭТ приступил к подготовке кадров для выполнения сервисногообслуживания и ремонтных работ ветрогенераторных установок.",
    desc2:
      "Начата работа по сертификации учебного центра УЭТ для обученияперсонала по обслуживанию и эксплуатации ветрогенераторов споследующей выдачи сертификата по допуску согласно стандартамGWO.",
    desc3:
      "Ведутся переговоры с ведущими производителями основногооборудования по открытию сервис центров на базе УЭТ, с последующейлокализацией запасных частей и комплектующих.",
    btn: "Подробнее",
    href: "/energies/waterHeater",
    img: bannerImg2,
    bgImg: bannerBg2,
  },

  {
    id: 2,
    title: "Как мы работаем?",
    desc1:
      "Начата работа по сертификации учебного центра УЭТ для обученияперсонала по обслуживанию и эксплуатации ветрогенераторов споследующей выдачи сертификата по допуску согласно стандартамGWO.",
    desc2:
      "Начата работа по сертификации учебного центра УЭТ для обученияперсонала по обслуживанию и эксплуатации ветрогенераторов споследующей выдачи сертификата по допуску согласно стандартамGWO.",
    desc3:
      "Ведутся переговоры с ведущими производителями основногооборудования по открытию сервис центров на базе УЭТ, с последующейлокализацией запасных частей и комплектующих.",
    btn: "Подробнее",
    href: "/energies/waterHeater",
    img: bannerImg1,
    bgImg: bannerBg2,
  },
]);
</script>
