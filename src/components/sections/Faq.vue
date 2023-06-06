<template>
  <section class="faq-section container">
    <div class="fix-wrap">
      <div class="section-header">
        <h3 class="section-title text-big">Предлагаемые услуги</h3>
      </div>
      <div class="faq-accordions">
        <div v-for="faq in faqs" :key="faq.id" class="accordion-row" @click="handleFaq(faq.id)">
          <div class="title" :class="currentId == faq.id ? 'open' : ''">{{ faq.title }}</div>
          <div class="content">{{ faq.content }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const {t} = useI18n()

const faqs = [
  {
    id: 1,
    title: t('faq[0].title'),
    content:t('faq[0].content')
  },
  {
    id: 2,
    title: t('faq[1].title'),
    content:t('faq[1].content')
  },
  {
    id: 3,
    title: t('faq[2].title'),
    content:t('faq[2].content')
  },
  {
    id: 4,
    title: t('faq[3].title'),
    content:t('faq[3].content')
  },
  {
    id: 5,
    title: t('faq[4].title'),
    content:t('faq[4].content')
  },
  {
    id: 6,
    title: t('faq[5].title'),
    content:t('faq[5].content')
  },
];
const currentId = ref(100);
function handleFaq(id) {
  if (id == currentId.value) return (currentId.value = 200);
  currentId.value = id;
}
</script>

<style scoped>
body {
  margin: 0px;
}

.faq-section {
  padding: 30px 0;
}

.faq-section .faq_left_half_circle {
  position: absolute;
  left: 80px;
}

.faq-section .faq_left_half_circle img {
  position: relative;
  top: 140px;
}

.faq-section .faq-accordions .accordion-row {
  padding: 15px;
  margin: 15px 0;
  cursor: pointer;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 3px 8px #0002;
}

.faq-section .faq-accordions .accordion-row .title {
  text-align: left;
  color: #000;
  font-size: 20px;
  font-weight: 500;
  position: relative;
  padding-right: 30px;
}

.faq-section .faq-accordions .title:after {
  content: "";
  position: absolute;
  border-left: #000 2px solid;
  border-bottom: #000 2px solid;
  right: 10px;
  top: 8px;
  -moz-transition: all 0.5s linear;
  -webkit-transition: all 0.5s linear;
  transition: all 0.5s linear;
  width: 10px;
  height: 10px;
  z-index: 1;
  transform: rotate(-45deg);
}

.faq-section .faq-accordions .title.open:after {
  transform: rotate(135deg);
  top: 14px;
}

.faq-section .faq-accordions .accordion-row .content {
  text-align: left;
  color: #000;
  font-size: 16px;
  line-height: 30px;
  overflow: hidden;
  height: 0px;
  transition: 0.5s all;
}

.faq-section .faq-accordions .accordion-row .open + .content {
  height: auto;
  overflow: initial;
  padding: 20px 0px;
}
@media (max-width: 1200px) {
  .faq-section .faq-accordions .accordion-row .title {
    font-size: 18px;
  }
}
</style>
