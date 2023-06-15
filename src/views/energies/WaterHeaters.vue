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
        <ComplatedProjects :projects="complatedProjects" />
      </div>
    </div>
    <div class="py-12 md:py-20">
      <Certificates :images="certificates" :desc="t('certificate.descs[1]')" />
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

import bannerImg2 from "/src/assets/images/banner/banner1.webp";
import bannerBg2 from "/src/assets/images/banner/banner_bg2.webp";
import { reactive } from "vue";
import { useI18n } from "vue-i18n";
import { useEnergyProductStore } from "../../stores/energyProduct";

import DescIcon1 from "/src/assets/images/icons/wallet.svg";
import DescIcon2 from "/src/assets/images/icons/energy_power.svg";
import DescIcon3 from "/src/assets/images/icons/location.svg";

import compProj4 from "/src/assets/images/complatedProjects/4.webp";
import compProj5 from "/src/assets/images/complatedProjects/5.webp";
import compProj6 from "/src/assets/images/complatedProjects/6.webp";

import certifiacteImg1 from "/src/assets/images/waterHeaterCertificate1.webp";
import certifiacteImg2 from "/src/assets/images/waterHeaterCertificate2.webp";
import certifiacteImg3 from "/src/assets/images/waterHeaterCertificate3.webp";
import certifiacteImg4 from "/src/assets/images/waterHeaterCertificate4-1.webp";

const store = useEnergyProductStore();
const { t } = useI18n();

if (!store.energyProducts.length) store.getEnergyProducts();

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

const complatedProjects = [
  {
    id: 1,
    image: compProj4,
    title: t("complatedProd.products[3].title"),
    titleKw: "2800 л",
    descs: [
      {
        desc: t("complatedProd.products[3].descs[0]"),
        descIcon: DescIcon1,
      },
      {
        desc: t("complatedProd.products[3].descs[1]"),
        descIcon: DescIcon2,
      },
      {
        desc: t("complatedProd.products[3].descs[2]"),
        descIcon: DescIcon3,
      },
    ],
    reverse: false,
  },
  {
    id: 2,
    image: compProj5,
    title: t("complatedProd.products[4].title"),
    titleKw: "5200 л",
    descs: [
      {
        desc: t("complatedProd.products[4].descs[0]"),
        descIcon: DescIcon1,
      },
      {
        desc: t("complatedProd.products[4].descs[1]"),
        descIcon: DescIcon2,
      },
      {
        desc: t("complatedProd.products[4].descs[2]"),
        descIcon: DescIcon3,
      },
    ],
    reverse: true,
  },
  {
    id: 3,
    image: compProj6,
    title: t("complatedProd.products[5].title"),
    titleKw: "2000 л",
    descs: [
      {
        desc: t("complatedProd.products[5].descs[0]"),
        descIcon: DescIcon1,
      },
      {
        desc: t("complatedProd.products[5].descs[1]"),
        descIcon: DescIcon2,
      },
      {
        desc: t("complatedProd.products[5].descs[2]"),
        descIcon: DescIcon3,
      },
    ],
    reverse: false,
  },
];

const certificates = [certifiacteImg1, certifiacteImg2, certifiacteImg3, certifiacteImg4];
</script>
