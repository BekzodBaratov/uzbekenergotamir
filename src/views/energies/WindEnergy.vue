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
import { useI18n } from "vue-i18n";

import bannerImg3 from "../../assets/images/banner/banner3.webp";
import bannerBg3 from "../../assets/images/banner/banner_bg3.webp";
import { reactive } from "vue";
const { t } = useI18n();

const banner = reactive({
  id: 1,
  title: t("banner[2].title"),
  desc1: t("banner[2].desc1"),
  desc2: t("banner[2].desc2"),
  desc3: t("banner[2].desc3"),
  btn: t("btn"),
  href: "/energies/waterHeater",
  img: bannerImg3,
  bgImg: bannerBg3,
  hasBtn: false,
});
</script>
