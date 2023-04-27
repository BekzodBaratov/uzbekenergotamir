<template>
  <section class="local">
    <div class="container">
      <h1 class="text-primary">Локализованные товары</h1>
      <div class="products">
        <div class="prod"></div>
        <div class="desc"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.products {
  @apply grid grid-cols-[1fr_2fr] divide-y bg-white border;
}
</style>
