<template>
  <section class="calculate">
    <div class="container">
      <CalcCard class="md:min-w-[40rem] lg:min-w-[60rem]">
        <h2 class="text-big text-center">{{ t("calculate.title") }}</h2>
        <p class="text-secondary text-center">{{ t("calculate.desc") }}</p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          <div class="inp-box">
            <label for="name">{{ t("calculate.name") }}</label>
            <input v-model="state.name" class="calc-input" type="text" name="name" id="name" />
          </div>
          <div class="inp-box">
            <label for="phone">{{ t("calculate.phone") }}</label>
            <input v-model="state.phone" class="calc-input" type="tel" name="phone" id="phone" />
          </div>
          <div class="inp-box">
            <label for="select">{{ t("calculate.service") }}</label>
            <select v-model="state.service" id="select">
              <option value="Руководители">Руководители</option>
              <option value="Руководители">Руководители</option>
              <option value="Руководители">Руководители</option>
              <option value="Руководители">Руководители</option>
            </select>
          </div>
          <div class="inp-box">
            <label for="sendPlace">{{ t("calculate.sendPlace") }}</label>
            <input v-model="state.sendPlace" class="calc-input" type="text" name="sendPlace" id="sendPlace" />
          </div>
          <div class="inp-box">
            <label for="recivePlace">{{ t("calculate.recivePlace") }}</label>
            <input v-model="state.recivePlace" class="calc-input" type="text" name="recivePlace" id="recivePlace" />
          </div>
          <div class="inp-box">
            <label for="weight">{{ t("calculate.loadWeight") }}</label>
            <div class="flex items-center relative">
              <span class="absolute pl-2 left-0 z-10">кг</span>
              <input
                v-model="state.loadWeight"
                class="calc-input"
                style="padding-left: 1.6rem"
                type="number"
                id="weight"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-center pt-12">
          <button @click.prevent="handleCalcForm" class="btn">{{ t("calculate.btn") }}</button>
        </div>
      </CalcCard>
    </div>
    <div class="hidden md:block absolute right-0 inset-y-0 z-10">
      <img class="" src="../../assets/images/calculate/Rectangle.png" alt="calc_bg_img" />
    </div>
    <div class="hidden md:block absolute top-1/2 left- -translate-y-1/2">
      <img src="../../assets/images/calculate/Rectangle-1.png" alt="calc_bg_img" />
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import CalcCard from "../cards/CalculateCard.vue";
import { useCalculateStore } from "../../stores/calculator";
import { useI18n } from "vue-i18n";
const store = useCalculateStore();
const { t } = useI18n();

let state = reactive({
  name: "",
  phone: "",
  service: "",
  sendPlace: "",
  recivePlace: "",
  loadWeight: "",
});

const handleCalcForm = () => {
  store.addCalculate(state);

  state = {
    name: "",
    phone: "",
    service: "",
    sendPlace: "",
    recivePlace: "",
    loadWeight: "",
  };
};
</script>

<style scoped>
section.calculate {
  @apply bg-yellowish relative py-16 overflow-hidden md:min-h-[80vh];
}
section.calculate .container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
