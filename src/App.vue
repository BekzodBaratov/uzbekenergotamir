<template>
  <div>
    <Header v-if="route.name !== 'pageNotFound'"></Header>
    <RouterView></RouterView>
    <Footer v-if="route.name !== 'pageNotFound'"></Footer>
    <Loading v-if="store.loading" />
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Loading from "./components/Loading.vue";
import { useContactStore } from "./stores/contacts";
const store = useContactStore();
const route = useRoute();
</script>
