<template>
  <div class="basePhotoText grid md:grid-cols-2 gap-12">
    <div :class="isReversed ? 'md:order-last' : 'order-first'" class="overflow-hidden rounded-md">
      <slot name="image"></slot>
    </div>
    <div>
      <h2 class="text-primary">
        <slot name="title"></slot>
      </h2>
      <p class="text-secondary">
        <slot name="desc"></slot>
      </p>
      <button v-if="hasBtn" class="btn">
        <slot name="btn"></slot>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["reverse", "btn"]);
const hasBtn = ref(props.btn || false);
const isReversed = ref(props.reverse || false);
</script>
