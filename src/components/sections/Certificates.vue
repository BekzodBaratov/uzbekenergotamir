<template>
  <section class="certificates">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-6">
        <div>
          <h2 class="text-big">{{ t("certificate.title") }}</h2>
          <p class="pb-2 text-secondary">{{ t("certificate.descs[0]") }}</p>
          <p class="pb-2 text-secondary">{{ t("certificate.descs[1]") }}</p>
          <p class="pb-2 text-secondary">{{ t("certificate.descs[2]") }}</p>
        </div>
        <div class="relative">
          <div class="flex items-end justify-end gap-4 p-8">
            <img
              class="shadow-lg w-40 sm:w-60 h-auto object-cover object-center"
              src="/src/assets/images/certificate1.png"
              alt="certificate"
            />
            <img
              class="shadow-lg w-40 sm:w-60 h-auto object-cover object-center"
              src="/src/assets/images/certificate2.png"
              alt="certificate"
            />
          </div>
          <div class="absolute bottom-0 right-0 -z-10">
            <img class="md:w-full" src="/src/assets/images/certificate_bg.png" alt="certificate" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
