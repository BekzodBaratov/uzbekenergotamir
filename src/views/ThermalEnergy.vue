<template>
  <section class="thermalEnergy py-6 md:py-12">
    <div class="container">
      <div class="space-y-32 pb-12">
        <BasePhotoText v-for="te in thermalEnergy" :key="id" :reverse="te.reverce">
          <template #image>
            <img class="rounded-xl" :src="te.image" :alt="te.title" />
          </template>
          <template #title>{{ te.title }}</template>
          <template #desc> {{ te.desc }} </template>
          <template #descriptions>
            <li v-for="el in te.descs">{{ el }}</li>
          </template>
        </BasePhotoText>
      </div>
    </div>
    <ContactSection />
  </section>
</template>

<script setup>
import BasePhotoText from "../components/ui/BasePhotoText.vue";
import ContactSection from "../components/sections/ContactSection.vue";
import img1 from "/src/assets/images/thermalEnergy/1.webp";
import img2 from "/src/assets/images/thermalEnergy/2.webp";
import img3 from "/src/assets/images/thermalEnergy/3.webp";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const thermalEnergy = [
  {
    id: 1,
    reverce: true,
    title: t("warmEnergy[0].title"),
    image: img1,
    desc: t("warmEnergy[0].desc"),
    descs: [
      t("warmEnergy[0].descArr[0]"),
      t("warmEnergy[0].descArr[1]"),
      t("warmEnergy[0].descArr[2]"),
      t("warmEnergy[0].descArr[3]"),
      t("warmEnergy[0].descArr[4]"),
      t("warmEnergy[0].descArr[5]"),
      t("warmEnergy[0].descArr[6]"),
    ],
  },
  {
    id: 2,
    reverce: false,
    title: t("warmEnergy[1].title"),
    image: img2,
    desc: t("warmEnergy[1].desc"),
    descs: [
      t("warmEnergy[1].descArr[0]"),
      t("warmEnergy[1].descArr[1]"),
      t("warmEnergy[1].descArr[2]"),
      t("warmEnergy[1].descArr[3]"),
      t("warmEnergy[1].descArr[4]"),
    ],
  },
  {
    id: 3,
    reverce: true,
    title: t("warmEnergy[2].title"),
    image: img3,
    desc: t("warmEnergy[1].desc"),
    descs: [
      t("warmEnergy[2].descArr[0]"),
      t("warmEnergy[2].descArr[1]"),
      t("warmEnergy[2].descArr[2]"),
      t("warmEnergy[2].descArr[3]"),
      t("warmEnergy[2].descArr[4]"),
      t("warmEnergy[2].descArr[5]"),
      t("warmEnergy[2].descArr[6]"),
    ],
  },
];
</script>
