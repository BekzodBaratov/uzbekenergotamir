<template>
  <section class="businessExpansion">
    <div class="container">
      <h3 class="md:hidden text-3xl font-semibold pb-6">{{ t("BusinessExpansion.title") }}</h3>
      <div class="relative">
        <div class="hidden md:block absolute right-0 top-0">
          <h3 class="text-5xl font-semibold max-w-xl">{{ t("BusinessExpansion.title") }}</h3>
        </div>
        <img src="/src/assets/images/about/uzb_map.svg" alt="uzb_map" />
        <div class="hidden md:block absolute left-0 bottom-0">
          <h2 class="text-8xl font-semibold">1500+</h2>
          <p class="text-xl font-semibold">{{ t("BusinessExpansion.numberDescription") }}</p>
        </div>
      </div>
      <div class="md:hidden">
        <h2 class="text-4xl font-semibold">1500+</h2>
        <p class="text-xl font-semibold">{{ t("BusinessExpansion.numberDescription") }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
