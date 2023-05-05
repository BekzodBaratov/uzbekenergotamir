<template>
  <footer class="footer">
    <div class="container space-y-3">
      <div class="grid sm:grid-cols-3 md:grid-cols-5 gap-6 pb-8">
        <div v-for="footerCol in footerData" :key="footerCol.id" class="flex flex-col gap-2">
          <img
            v-if="footerCol.id == 0"
            class="w-24 md:w-36"
            src="../assets/images/footer/ies_logo_footer.png"
            alt="ies_logo"
          />
          <h3 class="text-primary text-footer-text">{{ footerCol.title }}</h3>
          <a class="footer-link" v-for="footerLink in footerCol.links" :key="footerLink.id" :href="footerLink.href">{{
            footerLink.name
          }}</a>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-primary text-footer-text">Наши контакты</h3>
          <p>103445, г. Ташкент, ул. Ш.Арипар, 96А</p>
          <a class="footer-link" href="tel:+998-71-778-78-78">+998-71-778-78-78</a>
          <a class="footer-link" href="tel:+998-71-778-78-78">+998-71-778-78-78</a>
          <a class="footer-link" href="mailto:info@ies.uz">info@ies.uz</a>
          <div class="flex gap-2 py-3">
            <a href="#">
              <img class="footer-icon" src="../assets/images/footer/Vector.svg" alt="footer-icon" />
            </a>
            <a href="#">
              <img class="footer-icon" src="../assets/images/footer/Vector-1.svg" alt="footer-icon" />
            </a>
            <a href="#">
              <img class="footer-icon" src="../assets/images/footer/Vector-3.svg" alt="footer-icon" />
            </a>
            <a href="#">
              <img class="footer-icon" src="../assets/images/footer/Vector-2.svg" alt="footer-icon" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div class="flex justify-between flex-col sm:flex-row text-center">
        <p>{{ year }}. Все права защищены IES.uz</p>
        <p>Создание сайта <a class="footer-link underline" href="https://supersite.uz">Supersite</a></p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();

const footerData = [
  {
    id: 0,
    title: "Полезные ссылки",
    links: [
      { id: 0, name: "uzbekenergotamir.uz", href: "https://uzbekenergotamir.uz" },
      { id: 1, name: "uzenergosozlash.uz", href: "https://uzenergosozlash.uz" },
      { id: 2, name: "tpp.uz", href: "https://tpp.uz" },
      { id: 3, name: "www.dhkjs.uz", href: "https://dhkjs.uz" },
      { id: 4, name: "www.dhkjs.uz", href: "https://dhkjs.uz" },
      { id: 5, name: "minenergy.uz", href: "https://minenergy.uz" },
    ],
  },
  {
    id: 1,
    title: "На сайте",
    links: [
      { id: 0, name: "Наша история", href: "#" },
      { id: 1, name: "Теплоэнергетика", href: "#" },
      { id: 2, name: "Возобновляемые источники энергии", href: "#" },
      { id: 3, name: "Каталог", href: "#" },
      { id: 4, name: "Учебный центр", href: "#" },
      { id: 5, name: "Сервисный центр", href: "#" },
      { id: 6, name: "Наши партнеры", href: "#" },
      { id: 7, name: "Контакты", href: "#" },
    ],
  },
  {
    id: 2,
    title: "Клиентам",
    links: [
      { id: 0, name: "Основные подразделения", href: "#" },
      { id: 1, name: "Финансовые показатели", href: "#" },
      { id: 2, name: "Мы в новостях", href: "#" },
      { id: 3, name: "Интересные факты и статьи", href: "#" },
      { id: 4, name: "Калькулятор", href: "#" },
    ],
  },
  {
    id: 3,
    title: "ВИЭ",
    links: [
      { id: 0, name: "Солнечные панели", href: "#" },
      { id: 1, name: "Солнечные водонагреватели", href: "#" },
      { id: 2, name: "Ветроэнергетика", href: "#" },
    ],
  },
];
</script>

<style scoped>
footer.footer {
  @apply bg-footer-fill text-footer-text pt-12 pb-2;
}
.footer-link {
  @apply hover:text-input-focus duration-200 hover:underline;
}
.footer-icon {
  @apply p-2 rounded-md duration-200 transition-all hover:bg-yellowish h-full aspect-square;
}
</style>
