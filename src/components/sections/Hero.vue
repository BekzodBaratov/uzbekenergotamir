<template>
  <section class="hero relative">
    <video class="w-full hero-video" :muted="true" :loop="true" :controls="false" autoplay >
      <source src="/src/assets/video_hero_bg.mp4" type="video/mp4" />
    </video>
    <div class="absolute z-10 inset-0 bg-[#0008]">
      <div class="container pt-20 sm:pt-32 md:pt-48">
        <img class="w-[18rem] sm:w-[26rem] md:w-[36rem] pb-10" src="../../assets/images/hero/logoImg.svg" alt="logoImg">
        <a href="/contact">
          <button class="btn hover:text-btn-primary">Связаться с нами</button>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-video {
  @apply w-full max-h-[90vh] object-cover;
}
</style>
