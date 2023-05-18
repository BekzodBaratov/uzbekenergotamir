<template>
  <div v-if="products">
    <h2 class="text-big">Предлагаемые товары</h2>
    <div class="cards grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
      <EnergyCard v-for="product in products" :key="product._id" :energyCard="product" />
    </div>
  </div>
</template>

<script setup>
import EnergyCard from "/src/components/cards/EnergyCard.vue";
import EnergyCardImage1 from "/src/assets/images/thermalEnergy/energy-card-1.png";
import EnergyCardImage2 from "/src/assets/images/thermalEnergy/energy-card-2.png";
import { computed } from "vue";
const props = defineProps(["products"]);
const products = computed(() => props.products);

const energyCardArr = [
  {
    id: 0,
    image: EnergyCardImage1,
    title: "Кольца уплотнительные диафрагмы к турбине",
    url: "/",
  },
  {
    id: 1,
    image: EnergyCardImage2,
    title: "Уплотнительное кольцо азотно – кислородного детандерного агрегата...",
    url: "/",
  },
  {
    id: 2,
    image: EnergyCardImage1,
    title: "Венец проставки к насосу НВР-45х36",
    url: "/",
  },
  {
    id: 3,
    image: EnergyCardImage1,
    title: "Кольца уплотнительные диафрагмы к турбине",
    url: "/",
  },
  {
    id: 4,
    image: EnergyCardImage2,
    title: "Уплотнительное кольцо азотно – кислородного детандерного агрегата...",
    url: "/",
  },
  {
    id: 5,
    image: EnergyCardImage1,
    title: "Венец проставки к насосу НВР-45х36",
    url: "/",
  },
];
</script>
