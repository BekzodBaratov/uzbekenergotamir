<template>
  <section class="aboutPhoto">
    <div class="container">
      <div class="grid lg:grid-cols-2 md:gap-8">
        <div class="flex justify-center items-start pb-6">
          <div class="imageBefore">
            <img class="w-full" src="../../assets/images/about/about-photo.png" alt="image" />
          </div>
        </div>
        <div class="space-y-4">
          <p v-for="(contnet, i) in aboutPhotoContent" :key="i">
            {{ contnet }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const t = useI18n();

const aboutPhotoContent = [
  "В 1993 году ПО «Средазремэнерго» было переименовано в ПО«Узбекэнерготаъмир» объединившая вокруг себя почти всепредприятия по ремонту оборудования тепловых электростанций игидроэлектростанций энергосистемы Узбекистана.",
  "В 2001 году во исполнении Указа Президента Республики Узбекистан«Об углублении экономических реформ в энергетике» и ПостановленияКабинета Министров «О мерах по разгосударствлению и приватизациипредприятий», началось преобразование предприятия в открытоеакционерное общество “Узбекэнерготаъмир.",
  "С 2021 года владельцем контрольного пакета акций АО“Узбекэнерготаъмир” является ООО “Energyproject Invest Group”.Со дня основания предприятия до сегодняшнего дня сохранилась ипреумножена эстафета преемственности кадрового потенциала. Насегодняшний день общее количество персонала холдинга АО“Узбекэнерготаъмир” составляет более 2300высококвалифицированных специалистов и рабочих имеющих большойопыт работы в сфере энергетики и строительства.",
  "Холдинг АО «Узбекэнерготаъмир» имеет необходимые сертификаты илицензии для осуществления всех видов работ в сфере энергетики истроительства",
];
</script>

<style scoped>
section.aboutPhoto {
  padding: 3rem 0;
}
.imageBefore {
  @apply relative before:absolute before:inset-0 before:border-4 before:rounded-lg before:border-yellow-500  before:-z-10 before:-translate-x-4 before:-translate-y-4;
}
</style>
