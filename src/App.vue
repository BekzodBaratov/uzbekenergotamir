<template>
  <Header v-if="route.name !== 'pageNotFound'"></Header>
  <RouterView></RouterView>
  <Footer v-if="route.name !== 'pageNotFound'"></Footer>
</template>
<script setup>
import { useRoute } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
const route = useRoute();
</script>
