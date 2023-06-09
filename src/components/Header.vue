<template>
  <header class="header relative">
    <div class="container">
      <ul class="flex justify-between items-center gap-6">
        <li>
          <RouterLink to="/">
            <img class="w-20 md:w-24" :src="header_logo" alt="header_logo" />
          </RouterLink>
        </li>
        
        <li class="hidden lg:block">
          <ul class="flex gap-4">
            <li class="link group relative text-sm font-semibold" v-for="link in headerNav" :key="link.id">
              <RouterLink class="flex gap-1" :to="link.href">
                <span :class="link.id == 4 ? (locale == 'en' ? 'w-32' : 'w-48') : ''">{{ link.name }}</span>
                <img v-if="link?.submenu" src="../assets/images/header/Arrow-down.svg" alt="Arrow-down" />
              </RouterLink>

              <span v-if="link.id == 4" class="absolute bottom-1 left-[73%]">
                <img src="../assets/images/header/pero.png" alt="pero" />
              </span>

              <ul v-if="link?.submenu" class="submenu absolute top-full hidden shadow-2xl">
                <li v-for="subLink in link.submenu">
                  <RouterLink :to="subLink.href">{{ subLink.name }}</RouterLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="hidden lg:block">
          <ul class="langMenu">
            <li v-for="lang in languages" :key="lang.id" @click="() => changeLangHandle(lang.name)">
              <img :src="lang.image" :alt="lang.name" />
            </li>
          </ul>
        </li>
        <li @click="mobileMenu = !mobileMenu" class="lg:hidden">
          <img width="20" src="../assets/images/header/mobile-menu.svg" alt="menu-bar" />
        </li>
      </ul>

      <ul
        class="lg:hidden absolute top-0 z-20 inset-x-0 bg-white border-t gap-4 space-y-2 font-medium rounded-b-xl shadow-lg duration-300 py-8"
        :class="mobileMenu ? 'translate-y-0' : '-translate-y-full'"
      >
        <li class="group" v-for="link in headerNav">
          <RouterLink class="pt-3 container group-focus-within:text-green-primary flex gap-1" :to="link.href">
            {{ link.name }} <img v-if="link?.submenu" src="../assets/images/header/Arrow-down.svg" alt="Arrow-down" />
          </RouterLink>

          <ul v-if="link?.submenu" class="submenu group-focus-within:block pl-12">
            <li v-for="subLink in link.submenu">
              <RouterLink :to="subLink.href">{{ subLink.name }}</RouterLink>
            </li>
          </ul>
        </li>
        <li>
          <ul class="langMenu pt-6 container md:w-full py-3">
            <li v-for="lang in languages" :key="lang.id" @click="() => changeLangHandle(lang.name)">
              <img class="w-5" :src="lang.image" :alt="lang.name" />
            </li>
          </ul>
        </li>
        <li class="container">
          <p>103445, г. Ташкент, ул. Ш.Арипар, 96А</p>
        </li>
        <li class="container flex flex-col">
          <a class="hover:text-green-primary" href="tel:+998-71-778-78-78">+998-71-778-78-78</a>
          <a class="hover:text-green-primary" href="tel:+998-71-778-78-78">+998-71-778-78-78</a>
        </li>
        <li @click="mobileMenu = false" class="absolute top-3 right-3 p-3">
          <img src="../assets/images/header/xmark.svg" alt="close" />
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import header_logo from "../assets/images/header/header_logo.png";
import uz from "../assets/images/header/uz.png";
import ru from "../assets/images/header/ru.png";
import uk from "../assets/images/header/uk.png";
import { ref } from "vue";
const { t, locale } = useI18n();

const mobileMenu = ref(false);
const activeSubMenu = ref(false)

const headerNav = [
  {
    id: 1,
    name: t("header[0].name"),
    href: "/about",
    submenu: [
      { name: t("header[0].submenu[0]"), href: "/about/history" },
      { name: t("header[0].submenu[1]"), href: "/about/leaders" },
      { name: t("header[0].submenu[2]"), href: "/about/finance" },
      { name: t("header[0].submenu[3]"), href: "/about/news" },
      { name: t("header[0].submenu[4]"), href: "/about/affiliated_companies" },
      { name: t("header[0].submenu[5]"), href: "/about/partners" },
    ],
  },
  {
    id: 2,
    name: t("header[1].name"),
    href: "/thermal_energy",
  },
  {
    id: 3,
    name: t("header[2].name"),
    href: "/catalog",
    submenu: [
      { name: t("header[2].submenu[0]"), href: "/catalog/local-products" },
      { name: t("header[2].submenu[1]"), href: "/catalog/industrial-products" },
    ],
  },
  {
    id: 4,
    name: t("header[3].name"),
    href: "/energies",
  },
  {
    id: 5,
    name: t("header[4].name"),
    href: "/service",
  },
  {
    id: 6,
    name: t("header[5].name"),
    href: "/educational",
  },
  {
    id: 7,
    name: t("header[6].name"),
    href: "/contact",
  },
];
const languages = [
  { id: 0, image: uz, name: "uz" },
  { id: 1, image: ru, name: "ru" },
  { id: 2, image: uk, name: "en" },
];
function changeLangHandle(langName) {
  locale.value = langName;
  localStorage.setItem("lng", langName);
  window.location.reload();
}
</script>

<style scoped>
.header {
  @apply shadow-md py-3;
}
.link {
  @apply max-w-[16rem] text-center relative font-medium duration-200 hover:text-green-primary;
}
.submenu {
  @apply hidden z-50 group-hover:block bg-white rounded-md p-4 min-w-max;
}
.submenu li {
  @apply duration-200  py-2 px-3 rounded-md text-black-primary text-start hover:text-green-600;
}
.router-link-active,
.router-link-active-exact {
  @apply text-green-primary;
}
.langMenu {
  @apply flex gap-3 justify-start;
}
.langMenu li {
  @apply border  border-gray-400 p-2 rounded-full aspect-square flex justify-center items-center hover:bg-green-primary duration-200;
}
</style>
