<template>
  <section class="pageNotFound">
    <div class="container">
      <div class="grid md:grid-cols-[1fr_1.5fr]">
        <img class="w-full md:order-last" src="/src/assets/images/404-icon.png" alt="image" />
        <div class="text-center md:text-start pt-6 md:pt-20 space-x-3 md:space-y-6">
          <h2 class="text-big">Страница не найдена</h2>
          <RouterLink to="/" class="btn">Вернуться на главную</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
