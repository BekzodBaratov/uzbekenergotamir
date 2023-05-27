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
];
</script>
