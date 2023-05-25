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
import { useI18n } from "vue-i18n";
import LeaderCard from "../../components/cards/LeaderCard.vue";
import leaderImg1 from "/src/assets/images/about/leader1.jpg";
import leaderImg2 from "/src/assets/images/leader-img1.png";
import leaderImg3 from "/src/assets/images/about/leader2.jpg";
import leader_def from "/src/assets/images/about/leader_default.png";
const { t } = useI18n();
const leaders = [
  {
    id: 1,
    image: leaderImg1,
    name: t("leaders[0].name"),
    job: t("leaders[0].job"),
    address: t("leaders[0].address"),
    phone: "+998(71)236-61-43",
    mail: "INFO@UZBEKENERGOTAMIR.UZ",
  },
  {
    id: 2,
    image: leaderImg2,
    name: t("leaders[1].name"),
    job: t("leaders[1].job"),
    address: t("leaders[1].address"),
    phone: "+998(71)236-61-43",
    mail: "SOKHIBOV_0704@MAIL.RU",
  },
  {
    id: 4,
    image: leader_def,
    name: t("leaders[2].name"),
    job: t("leaders[2].job"),
    address: t("leaders[2].address"),
    phone: "+998(71)236-61-43",
    mail: "INFO@UZBEKENERGOTAMIR.UZ",
  },
  {
    id: 5,
    image: leaderImg3,
    name: t("leaders[3].name"),
    job: t("leaders[3].job"),
    address: t("leaders[3].address"),
    phone: "+998(17)236-61-43",
    mail: "MAXMUDOV@UZBEKENERGOTAMIR.UZ",
  },
  {
    id: 6,
    image: leader_def,
    name: t("leaders[4].name"),
    job: t("leaders[4].job"),
    address: t("leaders[4].address"),
    phone: "+998(71)236-61-43",
    mail: "INFO@UZBEKENERGOTAMIR.UZ",
  },
  {
    id: 7,
    image: leader_def,
    name: t("leaders[5].name"),
    job: t("leaders[5].job"),
    address: t("leaders[5].address"),
    phone: "+998(71)236-61-43",
    mail: "INFO@UZBEKENERGOTAMIR.UZ",
  },
];
</script>
