<template>
  <section class="partners py-12">
    <div class="container space-y-6">
      <h1 class="text-big">{{ t("partners") }}</h1>
      <div
        v-if="store.partners.length"
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8"
      >
        <PartnersCard v-for="partner in store.partners" :key="partner._id" :partner="partner" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePartnerStore } from "../../stores/partners.js";
import PartnersCard from "../cards/PartnersCard.vue";
import { useI18n } from "vue-i18n";
const store = usePartnerStore();
const { t } = useI18n();

store.getAllPartners();
</script>
