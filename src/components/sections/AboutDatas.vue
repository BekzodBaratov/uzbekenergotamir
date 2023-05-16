<template>
  <section class="AboutDatas pb-6 md:pb-16">
    <div class="container">
      <div class="grid md:grid-cols-2 gap-6">
        <BaseTextBox>
          <template #title>{{ aboutMissia.title }}</template>
          <template #descriptions>
            <li v-for="mis in aboutMissia.descs">{{ mis }}</li>
          </template>
        </BaseTextBox>
        <BaseTextBox>
          <template #title>{{ aboutOurSee.title }}</template>
          <template #descriptions>
            <li v-for="mis in aboutOurSee.descs">{{ mis }}</li>
          </template>
        </BaseTextBox>
        <BaseTextBox :stepDescriptions="aboutGoals.descs">
          <template #title>{{ aboutGoals.title }}</template>
          <template #description>{{ aboutGoals.desc }}</template>
        </BaseTextBox>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseTextBox from "../ui/BaseTextBox.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const aboutMissia = {
  title: t("aboutHistory[1].title"),
  descs: [t("aboutHistory[1].arr[0]"), t("aboutHistory[1].arr[1]")],
};
const aboutOurSee = {
  title: t("aboutHistory[2].title"),
  descs: [
    t("aboutHistory[2].arr[0]"),
    t("aboutHistory[2].arr[1]"),
    t("aboutHistory[2].arr[2]"),
    t("aboutHistory[2].arr[3]"),
    t("aboutHistory[2].arr[4]"),
    t("aboutHistory[2].arr[5]"),
  ],
};
const aboutGoals = {
  title: t("aboutHistory[3].title"),
  desc: t("aboutHistory[3].desc"),
  descs: [
    t("aboutHistory[3].arr[0]"),
    t("aboutHistory[3].arr[1]"),
    t("aboutHistory[3].arr[2]"),
    t("aboutHistory[3].arr[3]"),
    t("aboutHistory[3].arr[4]"),
    t("aboutHistory[3].arr[5]"),
  ],
};
</script>
