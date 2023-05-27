<template>
  <section class="enery-sources">
    <Banner />
    <div class="container">
      <div class="py-12">
        <h2 class="text-primary">{{ t("renewable.title") }}</h2>
        <p class="text-secondary">{{ t("renewable.desc1") }}</p>
        <p class="text-secondary">{{ t("renewable.desc2") }}</p>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-5 pt-6">
          <img class="full-image" src="../../assets/images/thermalEnergy/img1.png" alt="image" />
          <img class="full-image" src="../../assets/images/thermalEnergy/img2.png" alt="image" />
          <img class="full-image" src="../../assets/images/thermalEnergy/img3.png" alt="image" />
        </div>
        <div class="flex justify-center py-8">
          <button class="btn">{{ t("btnDownload") }}</button>
        </div>
      </div>
    </div>
    <ContactSection />
  </section>
</template>

<script setup>
import Banner from "../../components/sections/Banner.vue";
import ContactSection from "../../components/sections/ContactSection.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
