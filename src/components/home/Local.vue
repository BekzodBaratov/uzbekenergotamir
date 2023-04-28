<template>
  <section v-if="store.products.length" class="local my-24">
    <div class="container">
      <h1 class="text-primary pb-10">Локализованные товары</h1>
      <div class="products">
        <div class="prod md:max-h-screen overflow-y-auto">
          <div
            class="duration-200 hover:bg-yellowish py-4 px-4 font-medium cursor-pointer"
            v-for="(product, i) in store.products"
            :key="product._id"
            @click="defaultProduct = i"
            :class="i === defaultProduct ? 'bg-yellowish' : ''"
          >
            {{ product.title }}
          </div>
        </div>
        <div class="desc p-4 md:max-h-screen overflow-y-auto">
          <div class="w-96 aspect-square border rounded-md mb-8">
            <img
              class="w-full h-full object-contain object-center"
              :src="store.products[defaultProduct].image.secure_url"
              :alt="store.products[defaultProduct].title"
            />
          </div>
          <h2 class="text-primary">Описание</h2>
          <p>{{ store.products[defaultProduct].description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import img from "../../assets/images/local/product_img.png";
import { useProductStore } from "../../stores/localProduct";

const store = useProductStore();
store.getAllProducts();

const defaultProduct = ref(0);
</script>

<style scoped>
.products {
  @apply grid md:grid-cols-[1fr_2fr] divide-x bg-white border max-h-screen;
}
</style>
