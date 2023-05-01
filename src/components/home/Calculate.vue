<template>
  <section class="calculate">
    <div class="container">
      <CalcCard class="min-w-[60rem]">
        <h2 class="text-big text-center">Бесплатный калькулятор</h2>
        <p class="text-secondary text-center">
          So'rovnomani to'ldiring, biz yuk tashish narxini hisoblab chiqamiz va sizga pochta yoki telefon orqali
          ma'lumot yuboramiz
        </p>
        <div class="grid grid-cols-3 gap-12">
          <div class="inp-box">
            <label for="name">Ismingiz</label>
            <input class="calc-input" type="text" name="name" id="name" />
          </div>
          <div class="inp-box">
            <label for="phone">Telefon raqamingiz</label>
            <input class="calc-input" type="tel" name="phone" id="phone" />
          </div>
          <div class="inp-box">
            <label for="select">Xizmat turini tanlang</label>
            <select id="select">
              <option value="Руководители">Руководители</option>
              <option value="Руководители">Руководители</option>
              <option value="Руководители">Руководители</option>
              <option value="Руководители">Руководители</option>
            </select>
          </div>
          <div class="inp-box">
            <label for="sendPlace">Yuborish joyi</label>
            <input class="calc-input" type="text" name="sendPlace" id="sendPlace" />
          </div>
          <div class="inp-box">
            <label for="recivePlace">Yuborish joyi</label>
            <input class="calc-input" type="text" name="recivePlace" id="recivePlace" />
          </div>
          <div class="inp-box">
            <label for="weight">Yuk og’irligi</label>
            <div class="flex items-center relative">
              <span class="absolute pl-2 left-0 z-10">кг</span>
              <input class="calc-input" style="padding-left: 1.6rem" type="number" name="weight" id="weight" />
            </div>
          </div>
        </div>
        <div class="flex justify-center pt-12">
          <button class="btn">Рассчитать</button>
        </div>
      </CalcCard>
    </div>
    <div class="absolute right-0 inset-y-0 z-10">
      <img class="" src="../../assets/images/calculate/Rectangle.png" alt="calc_bg_img" />
    </div>
    <div class="absolute top-1/2 left- -translate-y-1/2">
      <img src="../../assets/images/calculate/Rectangle-1.png" alt="calc_bg_img" />
    </div>
  </section>
</template>

<script setup>
import CalcCard from "../cards/CalculateCard.vue";
</script>

<style scoped>
section.calculate {
  @apply bg-yellowish relative py-16 overflow-hidden min-h-[80vh];
}
section.calculate .container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
