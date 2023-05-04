<template>
  <header class="header relative">
    <div class="container">
      <ul class="flex justify-between items-center gap-6">
        <li>
          <RouterLink to="/">
            <img class="w-20 md:w-32" :src="header_logo" alt="header_logo" />
          </RouterLink>
        </li>
        <li class="hidden md:block">
          <ul class="flex gap-4">
            <li class="link group" v-for="link in headerNav">
              <RouterLink class="float-left" :to="link.href">
                {{ link.name }}
              </RouterLink>

              <ul v-if="link?.submenu" class="submenu">
                <li v-for="subLink in link.submenu">
                  <RouterLink :to="subLink.href">{{ subLink.name }}</RouterLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="hidden md:block">
          <ul class="langMenu">
            <li v-for="lang in languages" :key="lang.id" @click="() => changeLangHandle(lang.name)">
              <img :src="lang.image" :alt="lang.name" />
            </li>
          </ul>
        </li>
        <li @click="mobileMenu = !mobileMenu" class="md:hidden">menu</li>
      </ul>
      <ul v-if="mobileMenu" class="absolute top-full z-20 bg-white inset-x-0 border-t gap-4 space-y-2">
        <li>
          <ul class="langMenu container md:w-full py-3">
            <li v-for="lang in languages" :key="lang.id" @click="() => changeLangHandle(lang.name)">
              <img class="w-5" :src="lang.image" :alt="lang.name" />
            </li>
          </ul>
        </li>
        <li class="group border-b group" v-for="link in headerNav">
          <RouterLink class="block pt-3 container group-focus-within:bg-yellowish" :to="link.href">
            {{ link.name }}
          </RouterLink>

          <ul v-if="link?.submenu" class="submenu">
            <li v-for="subLink in link.submenu">
              <RouterLink :to="subLink.href">{{ subLink.name }}</RouterLink>
            </li>
          </ul>
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

const headerNav = [
  {
    name: t("header[0].name"),
    href: "/about",
    submenu: [
      { name: t("header[0].submenu[0]"), href: "/about/history" },
      { name: t("header[0].submenu[1]"), href: "/about/leaders" },
      { name: t("header[0].submenu[2]"), href: "/about/finance" },
      { name: t("header[0].submenu[3]"), href: "/about/news" },
      { name: t("header[0].submenu[4]"), href: "/about/affiliated_companies" },
    ],
  },
  { name: t("header[1].name"), href: "/thermal_energy" },
  {
    name: t("header[2].name"),
    href: "/catalog",
    submenu: [
      { name: t("header[2].submenu[0]"), href: "/about/history" },
      { name: t("header[2].submenu[1]"), href: "/about/leaders" },
      { name: t("header[2].submenu[2]"), href: "/about/finance" },
      { name: t("header[2].submenu[3]"), href: "/about/news" },
      { name: t("header[2].submenu[4]"), href: "/about/affiliated_companies" },
    ],
  },
  { name: t("header[3].name"), href: "/" },
  { name: t("header[4].name"), href: "/service" },
  { name: t("header[5].name"), href: "/educational" },
  { name: t("header[6].name"), href: "/contact" },
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
  @apply max-w-[16rem] text-center relative font-medium duration-200 hover:text-blue-primary;
}
.submenu {
  @apply absolute top-full left-0 invisible z-50 group-hover:visible shadow-md bg-white rounded-md p-4 min-w-max;
}
.submenu li {
  @apply duration-200 hover:bg-yellowish  py-2 px-3 rounded-md text-black-primary text-start;
}
.router-link-active,
.router-link-active-exact {
  @apply text-blue-primary;
}
.langMenu {
  @apply flex gap-3 justify-end;
}
.langMenu li {
  @apply border  border-gray-400 p-2 rounded-full aspect-square flex justify-center items-center hover:bg-blue-primary duration-200;
}
</style>
