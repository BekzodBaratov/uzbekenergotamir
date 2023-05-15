<template>
  <section class="productView py-12 md:py-20">
    <div class="container">
      <div class="grid md:grid-cols-[1.3fr_1fr] lg:grid-cols-[1fr_1.6fr] gap-6 pb-20">
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
              alt=""
            />
          </div>
          <div class="grid grid-cols-5 gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="bg-white border rounded-lg divide-y">
          <div class="p-6">
            <div class="flex justify-between flex-wrap ga-6">
              <h2 class="text-primary">Hi MO 5 LR5-72HBD</h2>
              <p class="text-primary3">Цена: Договорная</p>
            </div>
          </div>
          <div class="p-6 text-secondary">
            Двухсторонняя солнечная панель мощностью 535-550 Вт с КПД 21% Панель второго поколения класса А основанный
            на пластине M10, это лучшее решение для сверхбольших электростанций передовая модульная технология
            обеспечивает превосходную эффективность модуля глобально подтвержденный двусторонний выход энергии высокое
            качество модуля обеспечивает долгосрочную Двойное терм-упрочненное стекло 2,0+2,0 мм
          </div>
        </div>
      </div>

      <div class="">
        <h2 class="text-big">Другие продукции</h2>
        <div class="cards grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          <EnergyCard v-for="energyCard in energyCardArr" :key="energyCard.id" :energyCard="energyCard" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import EnergyCard from "/src/components/cards/EnergyCard.vue";
import EnergyCardImage1 from "/src/assets/images/thermalEnergy/energy-card-1.png";
import EnergyCardImage2 from "/src/assets/images/thermalEnergy/energy-card-2.png";

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
