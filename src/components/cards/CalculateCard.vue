<template>
  <form class="calc-card">
    <slot></slot>
  </form>
</template>

<style scoped>
.calc-card {
  background-color: white;
  padding: 2rem 3rem;
  border-radius: 1rem;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: 20;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (max-width: 768px) {
  .calc-card {
    position: static;
    transform: translate(0, 0);
    padding: 2rem 2rem;
  }
}
</style>
