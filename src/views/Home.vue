<template>
  <section class="home">
    <Hero />
    <About />
    <Banner />
    <Divisions class="py-8 md:py-16" />
    <Local :data="productStore.products" />
    <Partners />
    <Calculate />
    <ContactSection />
  </section>
</template>

<script setup>
import Hero from "../components/sections/Hero.vue";
import About from "../components/sections/About.vue";
import Banner from "../components/sections/Banner.vue";
import Divisions from "../components/sections/Divisions.vue";
import Local from "../components/sections/Local.vue";
import Partners from "../components/sections/Partners.vue";
import Calculate from "../components/sections/Calculate.vue";
import ContactSection from "../components/sections/ContactSection.vue";
import { useProductStore } from "../stores/localProduct";
const productStore = useProductStore();
productStore.getAllProducts();
</script>
