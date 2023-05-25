<template>
  <section class="tobepartner py-8 md:py-16">
    <div class="container">
      <h2 class="text-big text-center">{{ t("tobePartner.title") }}</h2>
      <div class="py-12">
        <div class="cards grid sm:grid-cols-[1fr_0.2fr_1fr_0.2fr_1fr] content-stretch justify-center gap-6">
          <div class="max-w-sm p-3 md:p-6 rounded-lg bg-bluer">
            <div class="flex justify-between items-start pb-6">
              <div class="sm:hidden lg:block">
                <p class="circle-number2">01</p>
              </div>
              <img src="/src/assets/images/icons/searchDoc.svg" alt="search" />
            </div>
            <h3 class="text-white font-medium">
              {{ t("tobePartner.card[0]") }}
            </h3>
          </div>
          <div class="hidden sm:flex items-center">
            <img class="items-center" src="/src/assets/images/icons/arrow-right3.svg" alt="arrow-right" />
          </div>
          <div class="max-w-sm p-3 md:p-6 rounded-lg bg-bluer">
            <div class="flex justify-between items-start pb-6">
              <div class="sm:hidden lg:block">
                <p class="circle-number2">02</p>
              </div>
              <img src="/src/assets/images/icons/writeDoc.svg" alt="search" />
            </div>
            <h3 class="text-white font-medium">{{ t("tobePartner.card[1]") }}</h3>
          </div>
          <div class="hidden sm:flex items-center">
            <img class="items-center" src="/src/assets/images/icons/arrow-right3.svg" alt="arrow-right" />
          </div>
          <div class="max-w-sm p-3 md:p-6 rounded-lg bg-bluer">
            <div class="flex justify-between items-start pb-6">
              <div class="sm:hidden lg:block">
                <p class="circle-number2">02</p>
              </div>
              <img src="/src/assets/images/icons/partnerDoc.svg" alt="search" />
            </div>
            <h3 class="text-white font-medium">{{ t("tobePartner.card[2]") }}</h3>
          </div>
        </div>
      </div>
      <div>
        <h3 class="text-primary2 sm:text-center">{{ t("tobePartner.danger") }}</h3>
        <p class="text-secondary sm:text-center sm:px-24">
          {{ t("tobePartner.dangerDesc") }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped>
.tobepartner {
  @apply bg-bgAbout2 bg-bottom bg-cover;
}
</style>
