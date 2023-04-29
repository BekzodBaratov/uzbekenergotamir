<template>
  <div class="partner-card">
    <div class="tag">
      <img :src="props.partner.image.secure_url" alt="partner_img" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["partner"]);
</script>

<style scoped>
.partner-card {
  filter: drop-shadow(-1px 6px 6px rgba(0, 0, 0, 0.2));
}
.tag {
  display: flex;
  justify-content: center;
  align-items: center;

  background: #fff;
  width: 100%;
  height: 100%;
  z-index: -1;
  padding: 2rem 0;
  clip-path: polygon(0 0, 100% 0%, 100% 75%, 75% 100%, 0 100%);
}
</style>
