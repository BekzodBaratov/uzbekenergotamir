<template>
  <section class="educational relative py-8 md:py-16">
    <div class="container">
      <h2 class="text-big">Учебный центр</h2>
      <p class="text-primary3 pb-6">Обучение, переподготовка и повышение квалификации персонала</p>
      <div class="cards grid grid-cols-2 md:grid-cols-3 gap-6 py-8">
        <EducationalCard v-for="data in eduArr" :key="data.id" :data="data" />
      </div>
    </div>

    <div class="eduClipPath1 absolute inset-0 bg-yellowish -z-50"></div>
    <div class="eduClipPath2 absolute inset-0 bg-bluer -z-50"></div>
  </section>
</template>

<script setup>
import EducationalCard from "/src/components/cards/EduCard.vue";

const eduArr = [
  { id: 1, title: "Электрогазосварщик (ручная сварка, в среде защитного газа аргон)", number: "01" },
  { id: 2, title: "Электромонтер по ремонту электрооборудования", number: "02" },
  { id: 3, title: "Обмотчик элемента электромашин", number: "03" },
  { id: 4, title: "Слесарь по ремонту котельных ТЭС и пылегазоочистных цехов", number: "04" },
  { id: 5, title: "Слесарь по ремонту паротурбинного оборудования тепловых электростанций", number: "05" },
  { id: 6, title: "Станочник широкого профиля", number: "06" },
  { id: 7, title: "Слесарь контрольно-измерительных приборов и автоматики", number: "07" },
  { id: 8, title: "Монтажник", number: "08" },
  { id: 9, title: "Оператор станков с числовым програмным управлением", number: "09" },
  { id: 10, title: "Наладчик энергооборудования", number: "10" },
];
</script>

<style scoped>
.eduClipPath1 {
  clip-path: polygon(0 20px, 0 0, 100% 0, 100% 20px, 50% 50%);
}
.eduClipPath2 {
  clip-path: polygon(100% 20px, 100% 100%, 98% 100%, 50% 50%);
}
</style>
