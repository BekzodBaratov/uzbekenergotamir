<template>
  <div class="contact-card card">
    <div class="flex flex-col justify-between">
      <div>
        <h1 class="text-big max-w-md">{{ t("contact[0].title") }}</h1>
        <p class="text-secondary">{{ t("contact[0].desc") }}</p>
      </div>
      <div>
        <img class="hidden md:block" src="../../assets/images/contact/logo.png" alt="logo-img" />
      </div>
    </div>
    <div class="hidden md:block w-[1px] rounded-full h-full bg-border-color"></div>
    <form class="flex flex-col gap-4">
      <div class="inp-box">
        <input type="text" v-model="state.name" class="contact-input" :placeholder="t('contact[0].placeholderName')" />
      </div>
      <div class="inp-box">
        <input
          type="text"
          v-model="state.phone"
          class="contact-input"
          :placeholder="t('contact[0].placeholderPhone')"
        />
      </div>
      <div class="inp-box">
        <textarea rows="6" v-model="state.message" :placeholder="t('contact[0].placeholderMessage')"></textarea>
      </div>
      <div class="flex justify-center">
        <button
          :disabled="!state.checkbox"
          class="btn"
          :class="state.checkbox ? 'opacity-100' : 'opacity-50'"
          @click.prevent="handleform"
        >
          {{ t("contact[0].btn") }}
        </button>
      </div>
      <p class="space-x-1 text-secondary-color2 text-sm">
        <input type="checkbox" v-model="state.checkbox" />
        <span>{{ t("contact[0].confidence[0]") }}</span>
        <a class="underline" href="#">{{ t("contact[0].confidence[1]") }}</a>
      </p>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useI18n } from "vue-i18n";
import { useContactStore } from "../../stores/contacts";
const store = useContactStore();
const { t } = useI18n();

const state = reactive({
  name: "",
  phone: "",
  message: "",
  checkbox: false,
});

function handleform() {
  if (!state.checkbox) return;
  store.addContact(state);

  state.name = "";
  state.phone = "";
  state.message = "";
  state.checkbox = false;
}
</script>

<style scoped>
.contact-card {
  @apply bg-white md:flex gap-8 shadow-xl px-4;
}
</style>
