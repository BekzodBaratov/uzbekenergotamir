<template>
  <section class="certificates">
    <div class="container">
      <div class="grid gap-6" :class="images.length > 2 ? '' : 'lg:grid-cols-2'">
        <div>
          <h2 class="text-big">{{ t("certificate.title") }}</h2>
          <p class="pb-2 text-secondary">{{ desc }}</p>
        </div>
        <div class="relative">
          <div class="flex items-end justify-end gap-4 p-8">
            <img
              v-for="img in images"
              class="shadow-lg w-40 sm:w-60 h-auto object-cover object-center"
              :src="img"
              alt="certificate"
            />
          </div>
          <div class="absolute bottom-0 right-0 -z-10">
            <img class="md:w-full" src="/src/assets/images/certificate_bg.webp" alt="certificate" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const props = defineProps(["images", "desc"]);
const images = computed(() => props.images);
const desc = computed(() => props.desc);
</script>
