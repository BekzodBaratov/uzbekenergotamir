<template>
  <section v-if="data.length" class="local py-24">
    <div class="container">
      <h1 class="text-primary pb-10">{{ title ? title : t("local") }}</h1>
      <div class="products">
        <div class="prod md:max-h-screen overflow-y-auto">
          <div
            class="duration-200 hover:bg-yellowish py-4 px-4 font-medium cursor-pointer"
            v-for="(val, i) in data"
            :key="val._id"
            @click="selectedProduct = i"
            :class="i === selectedProduct ? 'bg-yellowish' : ''"
          >
            {{ val.title }}
          </div>
        </div>
        <div class="desc p-4 md:max-h-screen overflow-y-auto">
          <div v-if="data[selectedProduct]?.image" class="w-96 aspect-square border rounded-md mb-8">
            <img
              class="w-full h-full object-contain object-center"
              :src="data[selectedProduct].image.secure_url"
              :alt="data[selectedProduct].title"
            />
          </div>
          <h2 class="text-primary">Описание</h2>
          <p>{{ data[selectedProduct].description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const selectedProduct = ref(0);
const props = defineProps(["data", "title"]);
const data = computed(() => props.data);
const title = computed(() => props.title);
</script>

<style scoped>
.products {
  @apply grid md:grid-cols-[1fr_2fr] divide-x bg-white border md:max-h-screen;
}
</style>
