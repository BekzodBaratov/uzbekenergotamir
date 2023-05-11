<template>
  <div>
    <h2 class="text-big mb-8">Выполненные объекты</h2>
    <div class="space-y-8">
      <BasePhotoText v-for="pr in ComplatedProjects" :key="pr.id" :reverse="pr.reverse">
        <template #image>
          <div :class="`imageBgLine-${pr.reverse ? 'right' : 'left'}`">
            <img
              class="rounded-lg w-full object-cover object-center aspect-video"
              src="/src/assets/images/thermalEnergy/img1.png"
              alt="image1"
            />
          </div>
        </template>
        <template #title>
          <p class="flex gap-2">
            <span>{{ pr.title }}</span>
            <span class="text-blue-primary">{{ pr.titleKw }}</span>
          </p>
        </template>
        <template #descriptions>
          <li class="flex gap-4" v-for="(description, i) in pr.descs" :key="i">
            <img :src="description.descIcon" :alt="description.desc" />
            <span class="text-lg font-semibold text-black">{{ description.desc }}</span>
          </li>
        </template>
      </BasePhotoText>
    </div>
  </div>
</template>

<script setup>
import BasePhotoText from "/src/components/ui/BasePhotoText.vue";
import DescIcon1 from "/src/assets/images/icons/wallet.svg";
import DescIcon2 from "/src/assets/images/icons/energy_power.svg";
import DescIcon3 from "/src/assets/images/icons/location.svg";

const ComplatedProjects = [
  {
    id: 1,
    image: "/src/assets/images/thermalEnergy/img1.png",
    title: "Солнечная электростанция",
    titleKw: "15 кВт",
    descs: [
      {
        desc: "Адрес: г. Ташкент. Мирзо-Улугбекский район",
        descIcon: DescIcon1,
      },
      {
        desc: "Окупаемость: 4 года",
        descIcon: DescIcon2,
      },
      {
        desc: "Подняли мощность за 30 дней",
        descIcon: DescIcon3,
      },
    ],
    reverse: false,
  },
  {
    id: 2,
    image: "/src/assets/images/thermalEnergy/img1.png",
    title: "Солнечная электростанция",
    titleKw: "30 кВт",
    descs: [
      {
        desc: "Адрес: г. Ташкент. Мирзо-Улугбекский район",
        descIcon: DescIcon1,
      },
      {
        desc: "Окупаемость: 4 года",
        descIcon: DescIcon2,
      },
      {
        desc: "Подняли мощность за 30 дней",
        descIcon: DescIcon3,
      },
    ],
    reverse: true,
  },
  {
    id: 3,
    image: "/src/assets/images/thermalEnergy/img1.png",
    title: "Солнечная электростанция",
    titleKw: "120 кВт",
    descs: [
      {
        desc: "Адрес: г. Ташкент. Мирзо-Улугбекский район",
        descIcon: DescIcon1,
      },
      {
        desc: "Окупаемость: 4 года",
        descIcon: DescIcon2,
      },
      {
        desc: "Подняли мощность за 30 дней",
        descIcon: DescIcon3,
      },
    ],
    reverse: false,
  },
];
</script>
