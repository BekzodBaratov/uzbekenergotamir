<template>
  <section class="services relative">
    <div>
      <Localised :data="services" title="Сервисный центр" />
    </div>
    <div class="py-12">
      <ComplatedProjects class="container" />
    </div>
    <div>
      <Calculate />
    </div>
    <div class="leadersClipPath1 absolute inset-0 bg-yellowish -z-50"></div>
  </section>
</template>

<script setup>
import Calculate from "/src/components/sections/Calculate.vue";
import ComplatedProjects from "/src/components/sections/ComplatedProjects.vue";
import Localised from "/src/components/sections/Local.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const services = [
  {
    _id: 1,
    title: t("services[0].title"),
    description: t("services[0].description"),
  },
  {
    _id: 2,
    title: t("services[1].title"),
    description: t("services[1].description"),
  },
  {
    _id: 3,
    title: t("services[2].title"),
    description: t("services[2].description"),
  },
  {
    _id: 4,
    title: t("services[3].title"),
    description: t("services[3].description"),
  },
  {
    _id: 5,
    title: t("services[4].title"),
    description: t("services[4].description"),
  },
  {
    _id: 6,
    title: t("services[5].title"),
    description: t("services[5].description"),
  },
  {
    _id: 7,
    title: t("services[6].title"),
    description: t("services[6].description"),
  },
  {
    _id: 8,
    title: t("services[7].title"),
    description: t("services[7].description"),
  },
  {
    _id: 9,
    title: t("services[8].title"),
    description: t("services[8].description"),
  },
  {
    _id: 10,
    title: t("services[9].title"),
    description: t("services[9].description"),
  },
  {
    _id: 11,
    title: t("services[10].title"),
    description: t("services[10].description"),
  },
  {
    _id: 12,
    title: t("services[11].title"),
    description: t("services[11].description"),
  },
  {
    _id: 13,
    title: t("services[12].title"),
    description: t("services[12].description"),
  },
];
</script>
