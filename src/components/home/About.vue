<template>
  <section class="about">
    <div class="container flex flex-col lg:flex-row justify-between gap-10">
      <div class="about-left">
        <h2 class="text-primary">О нас</h2>
        <p class="text-secondary">
          После разгосударствления, проведенного в 2001 году, предприятие было преобразовано в Открытое акционерное
          общество «O’ZBEKENERGOTA’MIR». В соответствии с Законом Республики Узбекистан от 6 мая 2014 года № ЗРУ-370 «О
          внесении изменений и дополнений в Закон Республики Узбекистан «Об акционерных обществах и защите прав
          акционеров» статус предприятия изменен на Акционерное общество «O’ZBEKENERGOTA’MIR».
        </p>
        <RouterLink to="/" class="btn">Подробнее</RouterLink>
      </div>
      <div class="self-center">
        <iframe
          class="rounded-xl"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/V01x63dJITQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
          picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
section.about {
  background-image: url("../../assets/images/about/about_bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 120vh;

  padding-top: 6rem;
}
@media (max-width: 1024px) {
  .about {
    /* background-image: none; */
    background-image: linear-gradient(to bottom, #000, #000);
  }
}
</style>
