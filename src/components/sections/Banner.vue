<template>
  <section class="Banner my-8">
    <div class="container flex flex-col gap-8">
      <div v-for="banner in bannerArr" :key="banner.id">
        <BannerCard :banner="banner" />
      </div>
    </div>
  </section>
</template>

<script setup>
import BannerCard from "../cards/BannerCard.vue";
import { useI18n } from "vue-i18n";

import bannerImg1 from "../../assets/images/banner/banner1.png";
import bannerImg2 from "../../assets/images/banner/banner2.png";
import bannerImg3 from "../../assets/images/banner/banner3.png";
import bannerBg1 from "../../assets/images/banner/banner_bg1.png";
import bannerBg2 from "../../assets/images/banner/banner_bg2.png";
import bannerBg3 from "../../assets/images/banner/banner_bg3.png";
import { reactive } from "vue";
const { t } = useI18n();

const bannerArr = reactive([
  {
    id: 0,
    title: t("banner[0].title"),
    desc1: t("banner[0].desc1"),
    desc2: t("banner[0].desc2"),
    desc3: t("banner[0].desc3"),
    btn: t("btn"),
    href: "/energies/solarPanels",
    img: bannerImg1,
    bgImg: bannerBg1,
    hasBtn: true,
  },
  {
    id: 1,
    title: t("banner[1].title"),
    desc1: t("banner[1].desc1"),
    desc2: t("banner[1].desc2"),
    desc3: t("banner[1].desc3"),
    btn: t("btn"),
    href: "/energies/waterHeater",
    img: bannerImg2,
    bgImg: bannerBg2,
    hasBtn: true,
  },
  {
    id: 2,
    title: t("banner[2].title"),
    desc1: t("banner[2].desc1"),
    desc2: t("banner[2].desc2"),
    desc3: t("banner[2].desc3"),
    btn: t("btn"),
    href: "/energies/windEnergy",
    img: bannerImg3,
    bgImg: bannerBg3,
    hasBtn: true,
  },
]);
</script>
