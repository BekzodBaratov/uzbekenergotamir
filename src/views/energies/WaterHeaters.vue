<template>
  <section class="waterHeater my-8">
    <div class="container">
      <div class="pb-12 md:pb-20">
        <BannerCard :banner="banner" />
      </div>
      <div class="pb-12 md:pb-20">
        <OfferedProducts :products="store.getWaterHeater" />
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
import { useI18n } from "vue-i18n";
import { useEnergyProductStore } from "../../stores/energyProduct";
const store = useEnergyProductStore();
const { t } = useI18n();

store.getEnergyProducts();

const banner = reactive({
  id: 1,
  title: t("banner[1].title"),
  desc1: t("banner[1].desc1"),
  desc2: t("banner[1].desc2"),
  desc3: t("banner[1].desc3"),
  btn: t("btn"),
  href: "/energies/waterHeater",
  img: bannerImg2,
  bgImg: bannerBg2,
  hasBtn: false,
});
</script>
