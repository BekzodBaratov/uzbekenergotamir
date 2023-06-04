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
import { reactive } from "vue";
import { useEnergyProductStore } from "../../stores/energyProduct";
import BannerCard from "/src/components/cards/BannerCard.vue";
import OfferedProducts from "/src/components/sections/OfferedProducts.vue";
import ComplatedProjects from "/src/components/sections/ComplatedProjects.vue";
import Calculate from "../../components/sections/Calculate.vue";
import ContactSection from "../../components/sections/ContactSection.vue";
import { useI18n } from "vue-i18n";

import bannerImg1 from "/src/assets/images/banner/banner4.webp";
import bannerImg2 from "/src/assets/images/banner/banner2.webp";
import bannerBg2 from "/src/assets/images/banner/banner_bg2.webp";
const store = useEnergyProductStore();
const { t } = useI18n();

if (!store.energyProducts.length) store.getEnergyProducts();

const banners = reactive([
  {
    id: 0,
    title: t("banner[0].title"),
    desc1: t("banner[0].desc1"),
    desc2: t("banner[0].desc2"),
    desc3: t("banner[0].desc3"),
    btn: t("btn"),
    href: "/energies/solarPanels",
    img: bannerImg2,
    bgImg: bannerBg2,
    hasBtn: false,
  },
  {
    id: 2,
    title: t("banner[3].title"),
    desc1: t("banner[3].desc1"),
    desc2: t("banner[3].desc2"),
    desc3: t("banner[3].desc3"),
    desc3: t("banner[3].desc4"),
    desc3: t("banner[3].desc5"),
    btn: t("btn"),
    href: "/energies/waterHeater",
    img: bannerImg1,
    bgImg: bannerBg2,
    hasBtn: false,
  },
]);
</script>
