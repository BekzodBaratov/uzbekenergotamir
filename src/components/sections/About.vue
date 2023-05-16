<template>
  <section class="about lg:bg-bgAbout lg:min-h-[120vh]">
    <div class="container flex flex-col lg:flex-row justify-between gap-10">
      <div class="about-left">
        <h2 class="text-primary">{{ t("aboutus.title") }}</h2>
        <p class="text-secondary">
          {{ t("aboutus.desc") }}
        </p>
        <RouterLink to="/" class="btn">{{ t("btn") }}</RouterLink>
      </div>
      <div class="self-center">
        <iframe
          class="rounded-xl w-[27rem] md:w-[40rem] aspect-video"
          src="https://www.youtube.com/embed/V01x63dJITQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
          picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped>
section.about {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  padding-top: 6rem;
}
</style>
