<template>
  <section class="contact">
    <div class="hidden md:block shape-left"></div>
    <div class="py-6 md:py-24 bg-bgContact md:bg-none">
      <div class="container flex justify-center">
        <ContactCard />
      </div>
    </div>
    <div class="contact2 py-6">
      <div class="container">
        <h2 class="text-primary">{{ t("contact[1].title") }}</h2>
        <div class="grid gap-6 md:grid-cols-[1fr_1.5fr]">
          <div class="grid gap-3">
            <div class="flex gap-4 items-center bg-yellowish rounded-md py-3 px-4 shadow-md">
              <div>
                <img :src="icon1" alt="Адрес" />
              </div>
              <div>
                <div class="text-xl font-semibold">{{ t("contact[1].arr[0].title") }}</div>
                <div class="font-medium">{{ t("contact[1].arr[0].desc") }}</div>
              </div>
            </div>
            <div class="flex gap-4 items-center bg-yellowish rounded-md py-3 px-4 shadow-md">
              <div>
                <img :src="icon2" alt="71 818 88 88" />
              </div>
              <div>
                <a href="tel:71 818 88 88" class="text-xl font-semibold underline">71 818 88 88</a>
                <div class="font-medium">{{ t("contact[1].arr[1].desc") }}</div>
              </div>
            </div>
            <div class="flex gap-4 items-center bg-yellowish rounded-md py-3 px-4 shadow-md">
              <div><img :src="icon3" alt="info@sitename.ru" /></div>
              <div>
                <a href="mailto:info@sitename.ru" class="text-xl font-semibold underline">info@sitename.ru</a>
                <div class="font-medium">{{ t("contact[1].arr[2].desc") }}</div>
              </div>
            </div>
            <div class="flex gap-4 items-center bg-yellowish rounded-md py-3 px-4 shadow-md">
              <div><img :src="icon4" alt="icon" /></div>
              <div>
                <div class="text-xl font-semibold">{{ t("contact[1].arr[3].title") }}</div>
                <div class="flex gap-2">
                  <a v-for="link in data" :key="link.id" :href="link.href" class="font-medium">
                    <img :src="link.image" alt="link icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="map-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19564.88443146655!2d69.2689881804652!3d41.36776190195615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1682914007596!5m2!1sru!2s"
              class="w-full rounded-md shadow-lg"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ContactCard from "../cards/ContactCard.vue";
import { useI18n } from "vue-i18n";
import icon1 from "../../assets/images/contact/contact-icon1.svg";
import icon2 from "../../assets/images/contact/contact-icon-2.svg";
import icon3 from "../../assets/images/contact/contact-icon3.svg";
import icon4 from "../../assets/images/contact/contact-icon4.svg";
import frame1 from "../../assets/images/contact/Frame1.svg";
import frame2 from "../../assets/images/contact/Frame2.svg";
import frame3 from "../../assets/images/contact/Frame3.svg";
import frame4 from "../../assets/images/contact/Frame4.svg";
const { t } = useI18n();

const data = [
  { id: 0, image: frame1, href: "https://github.com/BekzodBaratov" },
  { id: 1, image: frame2, href: "https://github.com/BekzodBaratov" },
  { id: 2, image: frame3, href: "https://github.com/BekzodBaratov" },
  { id: 3, image: frame4, href: "https://github.com/BekzodBaratov" },
];
</script>

<style scoped>
section.contact {
  position: relative;
  margin-bottom: 3rem;
}
.shape-left {
  position: absolute;
  background-image: url("../../assets/images/contact/contact_bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%);
  background-color: white;
  z-index: -1;
}
</style>
