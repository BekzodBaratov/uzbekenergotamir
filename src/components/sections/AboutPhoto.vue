<template>
  <section class="aboutPhoto">
    <div class="container">
      <div class="grid lg:grid-cols-2 md:gap-8">
        <div class="flex justify-center items-start pb-6">
          <div class="imageBefore">
            <img class="w-full" src="../../assets/images/about/about-photo.png" alt="image" />
          </div>
        </div>
        <div class="space-y-4">
          <p v-for="(contnet, i) in aboutPhotoContent" :key="i">
            {{ contnet }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const aboutPhotoContent = [
  t("aboutHistory[0][0]"),
  t("aboutHistory[0][1]"),
  t("aboutHistory[0][2]"),
  t("aboutHistory[0][3]"),
];
</script>

<style scoped>
section.aboutPhoto {
  padding: 3rem 0;
}
.imageBefore {
  @apply relative before:absolute before:inset-0 before:border-4 before:rounded-lg before:border-yellow-500  before:-z-10 before:-translate-x-4 before:-translate-y-4;
}
</style>
