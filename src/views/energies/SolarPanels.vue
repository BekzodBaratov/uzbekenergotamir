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
        <ComplatedProjects :projects="complatedProjects" />
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

import DescIcon1 from "/src/assets/images/icons/wallet.svg";
import DescIcon2 from "/src/assets/images/icons/energy_power.svg";
import DescIcon3 from "/src/assets/images/icons/location.svg";

import compProj1 from "/src/assets/images/complatedProjects/1.webp"
import compProj2 from "/src/assets/images/complatedProjects/2.webp"
import compProj3 from "/src/assets/images/complatedProjects/3.webp"
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
const complatedProjects = [
  {
    id: 1,
    image: compProj1,
    title: t("complatedProd.products[0].title"),
    titleKw: "1074 кВт",
    descs: [
      {
        desc: t("complatedProd.products[0].descs[0]"),
        descIcon: DescIcon1,
      },
      {
        desc: t("complatedProd.products[0].descs[1]"),
        descIcon: DescIcon2,
      },
      {
        desc: t("complatedProd.products[0].descs[2]"),
        descIcon: DescIcon3,
      },
    ],
    reverse: false,
  },
  {
    id: 2,
    image: compProj2,
    title: t("complatedProd.products[1].title"),
    titleKw: "1220 кВт",
    descs: [
      {
        desc: t("complatedProd.products[1].descs[0]"),
        descIcon: DescIcon1,
      },
      {
        desc: t("complatedProd.products[1].descs[1]"),
        descIcon: DescIcon2,
      },
      {
        desc: t("complatedProd.products[1].descs[2]"),
        descIcon: DescIcon3,
      },
    ],
    reverse: true,
  },
  {
    id: 3,
    image: compProj3,
    title: t("complatedProd.products[2].title"),
    titleKw: "1929 кВт",
    descs: [
      {
        desc: t("complatedProd.products[2].descs[0]"),
        descIcon: DescIcon1,
      },
      {
        desc: t("complatedProd.products[2].descs[1]"),
        descIcon: DescIcon2,
      },
      {
        desc: t("complatedProd.products[2].descs[2]"),
        descIcon: DescIcon3,
      },
    ],
    reverse: false,
  },
];
</script>
