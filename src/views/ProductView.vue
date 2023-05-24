<template>
  <section class="productView py-12 md:py-20">
    <div v-if="store.energyProduct._id && store.energyProducts.length" class="container">
      <div class="grid md:grid-cols-[1.3fr_1fr] lg:grid-cols-[1fr_1.6fr] gap-6 pb-20">
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              :src="store.energyProduct.images[activeIamge].secure_url"
              alt="image"
            />
          </div>
          <div class="grid grid-cols-4 gap-4">
            <div v-for="(image, i) in store.energyProduct.images" :key="image.secure_url">
              <img
                @click="activeIamge = i"
                class="h-auto max-w-full rounded-lg"
                :src="image.secure_url"
                :alt="image.secure_url"
              />
            </div>
          </div>
        </div>
        <div class="bg-white border rounded-lg divide-y">
          <div class="p-6">
            <div class="flex justify-between flex-wrap ga-6">
              <h2 class="text-primary">{{ product.title }}</h2>
              <p class="text-primary3">Цена: Договорная</p>
            </div>
          </div>
          <div class="p-6 text-secondary">{{ product.description }}</div>
        </div>
      </div>

      <div>
        <h2 class="text-big">Другие продукции</h2>
        <div class="cards grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          <EnergyCard v-for="energyCard in sameProducts" :key="energyCard._id" :energyCard="energyCard" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import EnergyCard from "/src/components/cards/EnergyCard.vue";
import { useRoute } from "vue-router";
import { useEnergyProductStore } from "../stores/energyProduct";
const route = useRoute();
const store = useEnergyProductStore();
const id = route.params.id;

if (store.energyProduct?._id !== route.params.id) store.getOneEnergyProduct(id);
if (!store.energyProducts.length) store.getEnergyProducts();
watch(
  () => route.params.id,
  () => store.getOneEnergyProduct(route.params.id)
);

const activeIamge = ref(0);
const product = computed(() => store.energyProduct);
const sameProducts = computed(() => {
  return store.energyProduct.category == "solarPanel" ? store.getSolarPanel : store.getWaterHeater;
});
</script>
