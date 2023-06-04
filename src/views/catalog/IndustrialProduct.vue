<template>
  <section class="IndustrialProduct py-6 md:py-12">
    <div class="container">
      <div class="space-y-32 pb-12">
        <BasePhotoText v-for="ip in industralProduct" :key="ip.id" :reverse="ip.reverce">
          <template #image>
            <img class="rounded-lg" :src="ip.image" :alt="ip.title" />
          </template>
          <template #title>{{ ip.title }}</template>
          <template #descriptions>
            <li v-for="el in ip.descs">{{ el }}</li>
          </template>
        </BasePhotoText>
      </div>
    </div>
    <ContactSection />
  </section>
</template>

<script setup>
import BasePhotoText from "../../components/ui/BasePhotoText.vue";
import ContactSection from "../../components/sections/ContactSection.vue";
import img1 from "/src/assets/images/thermalEnergy/4.webp";
import img2 from "/src/assets/images/thermalEnergy/5.webp";
import img3 from "/src/assets/images/thermalEnergy/6.webp";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const industralProduct = [
  {
    id: 1,
    reverce: true,
    title: t("industrialBase[0].title"),
    image: img1,
    descs: [
      t("industrialBase[0].descs[0]"),
      t("industrialBase[0].descs[1]"),
      t("industrialBase[0].descs[2]"),
      t("industrialBase[0].descs[3]"),
    ],
  },
  {
    id: 2,
    reverce: false,
    title: t("industrialBase[1].title"),
    image: img2,
    descs: [t("industrialBase[1].descs[0]"), t("industrialBase[1].descs[1]"), t("industrialBase[1].descs[2]")],
  },
  {
    id: 3,
    reverce: true,
    title: t("industrialBase[2].title"),
    image: img3,
    descs: [t("industrialBase[2].descs[0]"), t("industrialBase[2].descs[1]"), t("industrialBase[2].descs[2]")],
  },
];
</script>

<script setup></script>
