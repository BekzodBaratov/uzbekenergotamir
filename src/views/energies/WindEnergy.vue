<template>
  <section class="windenergy">
    <div class="container py-8 md:py-16">
      <BannerCard :banner="banner" />
    </div>
    <Faq />
    <Certificates />
    <Calculate />
    <ContactSection />
  </section>
</template>

<script setup>
import BannerCard from "/src/components/cards/BannerCard.vue";
import ContactSection from "/src/components/sections/ContactSection.vue";
import Calculate from "/src/components/sections/Calculate.vue";
import Certificates from "/src/components/sections/Certificates.vue";
import Faq from "/src/components/sections/Faq.vue";

import bannerImg3 from "../../assets/images/banner/banner3.png";
import bannerBg3 from "../../assets/images/banner/banner_bg3.png";
import { reactive } from "vue";

const banner = reactive({
  id: 2,
  title: "Ветроэнергетика",
  desc1:
    "В условиях стремительного развития ветроэнергетики в Узбекистане,УЭТ приступил к подготовке кадров для выполнения сервисногообслуживания и ремонтных работ ветрогенераторных установок.",
  desc2:
    "Начата работа по сертификации учебного центра УЭТ для обученияперсонала по обслуживанию и эксплуатации ветрогенераторов споследующей выдачи сертификата по допуску согласно стандартамGWO.",
  desc3:
    "Ведутся переговоры с ведущими производителями основногооборудования по открытию сервис центров на базе УЭТ, с последующейлокализацией запасных частей и комплектующих.",
  btn: "Подробнее",
  href: "/energies/windEnergy",
  img: bannerImg3,
  bgImg: bannerBg3,
});
</script>
