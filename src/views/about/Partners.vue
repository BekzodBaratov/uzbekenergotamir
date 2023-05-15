<template>
  <section class="partners">
    <div>
      <Partners />
    </div>
    <div class="py-16">
      <ToBePartner />
    </div>
    <div class="py-8 md:py-16">
      <BusinessExpansion />
    </div>
    <div>
      <Contact />
    </div>
  </section>
</template>

<script setup>
import Partners from "/src/components/sections/Partners.vue";
import Contact from "/src/components/sections/ContactSection.vue";
import ToBePartner from "/src/components/sections/ToBePartner.vue";
import BusinessExpansion from "/src/components/sections/BusinessExpansion.vue";
</script>
