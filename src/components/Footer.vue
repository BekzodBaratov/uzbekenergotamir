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
          <h3 class="text-primary-white">{{ footerCol.title }}</h3>
          <a class="footer-link" v-for="footerLink in footerCol.links" :key="footerLink.id" :href="footerLink.href"
            >{{ footerLink.name }}
          </a>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-primary-white">{{ t("footer[3].title") }}</h3>
          <p>{{ t("footer[3].arr[0]") }}</p>
          <a class="footer-link" href="tel:+998952550302">+998 (95) 255-03-02</a>
          <a class="footer-link" href="mailto:info@ies.uz">info@ies.uz</a>
          <div class="flex gap-2 py-3">
            <a href="https://www.instagram.com/uetsolaruz">
              <img class="footer-icon" src="../assets/images/footer/Vector.svg" alt="footer-icon" />
            </a>
            <a href="https://t.me/ozbekenergotamir">
              <img class="footer-icon" src="../assets/images/footer/Vector-1.svg" alt="footer-icon" />
            </a>
            <a href="https://www.facebook.com/ies.uzbekistan/?ref=pages_you_manage">
              <img class="footer-icon" src="../assets/images/footer/Vector-3.svg" alt="footer-icon" />
            </a>
            <a href="https://www.youtube.com/channel/UCeaR2jJNnRM7fGR2hUWPGFA">
              <img class="footer-icon" src="../assets/images/footer/Vector-4.svg" alt="footer-icon" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div class="flex justify-between flex-col sm:flex-row text-center">
        <p>{{ year }}. {{ t("footer[4][0]") }}</p>
        <p>{{ t("footer[4][1]") }} <a class="footer-link underline" href="https://supersite.uz">Supersite</a></p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const footerData = [
  {
    id: 0,
    title: "Полезные ссылки",
    links: [
      { id: 0, name: "uzbekenergotamir.uz", href: "https://uzbekenergotamir.uz" },
      { id: 1, name: "uzenergosozlash.uz", href: "https://uzenergosozlash.uz" },
      { id: 2, name: "tpp.uz", href: "https://tpp.uz" },
      { id: 5, name: "minenergy.uz", href: "https://minenergy.uz" },
    ],
  },
  {
    id: 1,
    title: t("footer[0].title"),
    links: [
      { id: 0, name: t("footer[0].arr[0]"), href: "/about/history" },
      { id: 1, name: t("footer[0].arr[1]"), href: "/thermal_energy" },
      { id: 2, name: t("footer[0].arr[2]"), href: "/energies/sources" },
      { id: 3, name: t("footer[0].arr[3]"), href: "/catalog/local-products" },
      { id: 4, name: t("footer[0].arr[4]"), href: "/educational" },
      { id: 5, name: t("footer[0].arr[5]"), href: "/service" },
      { id: 6, name: t("footer[0].arr[6]"), href: "/about/partners" },
      { id: 7, name: t("footer[0].arr[7]"), href: "/contact" },
    ],
  },
  {
    id: 2,
    title: t("footer[1].title"),
    links: [
      { id: 0, name: t("footer[1].arr[0]"), href: "/about/finance" },
      { id: 1, name: t("footer[1].arr[1]"), href: "/about/finance" },
      { id: 2, name: t("footer[1].arr[2]"), href: "/about/news" },
      { id: 4, name: t("footer[1].arr[3]"), href: "/about/affiliated_companies" },
    ],
  },
  {
    id: 3,
    title: t("footer[2].title"),
    links: [
      { id: 0, name: t("footer[2].arr[0]"), href: "/energies/solarPanels" },
      { id: 1, name: t("footer[2].arr[1]"), href: "/energies/waterHeater" },
      { id: 2, name: t("footer[2].arr[2]"), href: "/energies/windEnergy" },
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
