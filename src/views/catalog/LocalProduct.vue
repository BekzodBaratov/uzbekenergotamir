<template>
  <LocalProduct :data="productStore.products" />
</template>

<script setup>
import LocalProduct from "../../components/sections/Local.vue";
import { useProductStore } from "../../stores/localProduct";
const productStore = useProductStore();
productStore.getAllProducts();
</script>
