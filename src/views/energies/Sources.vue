<template>
  <section class="enery-sources">
    <Banner />
    <div class="container">
      <div class="py-12">
        <h2 class="text-primary">Законадательство в области ВИЭ</h2>
        <p class="text-secondary">
          В первую очередь необходимо разобраться с оборудованием и подобрать оптимальную солнечную электростанцию.
          Батареи не универсальны, поэтому перед покупкой и монтажом рекомендуем обратиться за консультацией к
          специалисту. Он расскажет вам о формировании цены "зеленого" тарифа (которая закреплена законодательно) и
          подберет модель, подходящую именно для вашего дома.
        </p>
        <p class="text-secondary">
          Не менее важную роль играет специальный счетчик с коммуникационным GSM/GPRS-модулем, который предназначен для
          подсчета выработанной/потраченной солнечной энергии. С его помощью информация о вашем энергообороте будет
          передаваться в Облэнерго.
        </p>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-5 pt-6">
          <img class="full-image" src="../../assets/images/thermalEnergy/img1.png" alt="image" />
          <img class="full-image" src="../../assets/images/thermalEnergy/img2.png" alt="image" />
          <img class="full-image" src="../../assets/images/thermalEnergy/img3.png" alt="image" />
        </div>
        <div class="flex justify-center py-8">
          <button class="btn">Загрузить</button>
        </div>
      </div>
    </div>
    <ContactSection />
  </section>
</template>

<script setup>
import Banner from "../../components/sections/Banner.vue";
import ContactSection from "../../components/sections/ContactSection.vue";
</script>
