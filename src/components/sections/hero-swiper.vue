<template>
  <swiper
    :pagination="true"
    :modules="[Pagination, Autoplay]"
    :loop="true"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
  >
    <swiper-slide class="relative" v-for="page in props.content" :key="page.id">
      <div class="absolute w-full h-full -z-50">
        <img class="w-full h-full object-cover object-center" :src="page.image" alt="" />
      </div>
      <div class="hidden md:flex justify-between gap-3 pt-24 w-4/5 mx-auto">
        <div class="space-y-10">
          <img class="w-[40rem]" :src="page.logoImg" alt="logo-img" />
          <button class="btn">Связаться с нами</button>
        </div>
        <div>
          <img class="w-72" :src="page.subImage" alt="" />
        </div>
      </div>

      <div class="md:hidden w-4/5 mx-auto py-7">
        <div class="flex flex-col items-center pb-8">
          <img class="pb-8" :src="page.logoImg" alt="logo-img" />
          <img class="w-80" :src="page.subImage" alt="sub-image" />
        </div>
        <button class="btn w-full">Связаться с нами</button>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/bundle";
import "../../assets/styles/btn.css";
import { Pagination, Autoplay } from "swiper";

const props = defineProps(["content"]);
console.log(props.content);
</script>
