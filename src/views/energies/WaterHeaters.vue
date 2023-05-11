<template>
  <section class="waterHeater my-8">
    <div class="container">
      <div class="pb-12 md:pb-20">
        <BannerCard :banner="banner" />
      </div>
      <div class="pb-12 md:pb-20">
        <OfferedProducts />
      </div>
      <div>
        <ComplatedProjects />
      </div>
    </div>
    <div class="py-12 md:py-20">
      <Certificates />
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
import Certificates from "../../components/sections/Certificates.vue";
import Calculate from "../../components/sections/Calculate.vue";
import ContactSection from "../../components/sections/ContactSection.vue";

import bannerImg2 from "/src/assets/images/banner/banner2.png";
import bannerBg2 from "/src/assets/images/banner/banner_bg2.png";
import { reactive } from "vue";

const banner = reactive({
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
});
</script>
