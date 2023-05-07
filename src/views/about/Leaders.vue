<template>
  <section class="leaders py-8 md:py-16 relative">
    <div class="container">
      <h2 class="text-big">Руководство</h2>
      <div class="cards grid grid-cols-1 gap-6">
        <LeaderCard v-for="leader in leaders" :key="leader.id" :leader="leader" />
      </div>
    </div>
    <div class="leadersClipPath1 absolute inset-0 bg-yellowish -z-10"></div>
    <div class="leadersClipPath2 absolute inset-0 bg-bluer -z-20"></div>
  </section>
</template>

<script setup>
import LeaderCard from "../../components/cards/LeaderCard.vue";
const leaders = [
  {
    id: 1,
    image: "/src/assets/images/leader-img1.png",
    name: "Сохибов Журабек Иномжонович",
    job: "Заместитель генерального директора АО O’ZBEKENERGOTA’MIR по производству",
    address: "РЕСПУБЛИКА УЗБЕКИСТАН, ТАШКЕНТСКАЯ ОБЛАСТЬ, ҚИБРАЙСКИЙ РАЙОН, ФИДОКОР МФЙ, УЛИЦА ТАШГРЭС, ДОМ296",
    phone: "+998(71)236-61-43",
    mail: "jknli@mail.ru",
  },
  {
    id: 2,
    image: "/src/assets/images/leader-img1.png",
    name: "Сохибов Журабек Иномжонович",
    job: "Заместитель генерального директора АО O’ZBEKENERGOTA’MIR по производству",
    address: "РЕСПУБЛИКА УЗБЕКИСТАН, ТАШКЕНТСКАЯ ОБЛАСТЬ, ҚИБРАЙСКИЙ РАЙОН, ФИДОКОР МФЙ, УЛИЦА ТАШГРЭС, ДОМ296",
    phone: "+998(71)236-61-43",
    mail: "jknli@mail.ru",
  },
  {
    id: 3,
    image: "/src/assets/images/leader-img1.png",
    name: "Сохибов Журабек Иномжонович",
    job: "Заместитель генерального директора АО O’ZBEKENERGOTA’MIR по производству",
    address: "РЕСПУБЛИКА УЗБЕКИСТАН, ТАШКЕНТСКАЯ ОБЛАСТЬ, ҚИБРАЙСКИЙ РАЙОН, ФИДОКОР МФЙ, УЛИЦА ТАШГРЭС, ДОМ296",
    phone: "+998(71)236-61-43",
    mail: "jknli@mail.ru",
  },
  {
    id: 4,
    image: "/src/assets/images/leader-img1.png",
    name: "Сохибов Журабек Иномжонович",
    job: "Заместитель генерального директора АО O’ZBEKENERGOTA’MIR по производству",
    address: "РЕСПУБЛИКА УЗБЕКИСТАН, ТАШКЕНТСКАЯ ОБЛАСТЬ, ҚИБРАЙСКИЙ РАЙОН, ФИДОКОР МФЙ, УЛИЦА ТАШГРЭС, ДОМ296",
    phone: "+998(71)236-61-43",
    mail: "jknli@mail.ru",
  },
  {
    id: 5,
    image: "/src/assets/images/leader-img1.png",
    name: "Сохибов Журабек Иномжонович",
    job: "Заместитель генерального директора АО O’ZBEKENERGOTA’MIR по производству",
    address: "РЕСПУБЛИКА УЗБЕКИСТАН, ТАШКЕНТСКАЯ ОБЛАСТЬ, ҚИБРАЙСКИЙ РАЙОН, ФИДОКОР МФЙ, УЛИЦА ТАШГРЭС, ДОМ296",
    phone: "+998(71)236-61-43",
    mail: "jknli@mail.ru",
  },
  {
    id: 6,
    image: "/src/assets/images/leader-img1.png",
    name: "Сохибов Журабек Иномжонович",
    job: "Заместитель генерального директора АО O’ZBEKENERGOTA’MIR по производству",
    address: "РЕСПУБЛИКА УЗБЕКИСТАН, ТАШКЕНТСКАЯ ОБЛАСТЬ, ҚИБРАЙСКИЙ РАЙОН, ФИДОКОР МФЙ, УЛИЦА ТАШГРЭС, ДОМ296",
    phone: "+998(71)236-61-43",
    mail: "jknli@mail.ru",
  },
];
</script>

<style scoped>
.leaders .leadersClipPath1 {
  clip-path: polygon(0 0, 0 50%, 38% 0);
}
.leaders .leadersClipPath2 {
  clip-path: polygon(100% 100%, 35% 100%, 100% 18%);
}

@media (max-width: 768px) {
  .leaders .leadersClipPath1 {
    clip-path: polygon(0 0, 0 10%, 38% 0);
  }
  .leaders .leadersClipPath2 {
    clip-path: polygon(100% 100%, 35% 100%, 100% 90%);
  }
}
</style>
