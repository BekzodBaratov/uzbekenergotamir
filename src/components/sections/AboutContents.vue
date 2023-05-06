<template>
  <section class="aboutContent">
    <div class="content grid md:grid-cols-2">
      <div class="missia space-y-4">
        <p v-for="(missia, i) in aboutMissia" :key="i">{{ missia }}</p>
      </div>
      <div class="ourVision">
        <p v-for="(missia, i) in aboutMissia" :key="i">{{ missia }}</p>
      </div>
      <div class="goal">
        <p v-for="(missia, i) in aboutMissia" :key="i">{{ missia }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { aboutMissia, aboutOurSee, aboutGoals } from "../../constants/ourHistory.js";
</script>
