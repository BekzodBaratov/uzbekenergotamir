<template>
  <div class="basePhotoText grid md:grid-cols-2 gap-12">
    <div :class="isReversed ? 'md:order-last' : 'order-first'" class="rounded-md">
      <slot name="image"></slot>
    </div>
    <div>
      <h2 class="text-primary">
        <slot name="title"></slot>
      </h2>

      <p class="text-secondary" :class="line_clamp ? `line-clamp-${line_clamp}` : ''">
        <slot name="desc"></slot>
      </p>

      <ul class="text-secondary space-y-2">
        <slot name="descriptions"></slot>
      </ul>

      <button v-if="hasBtn" class="btn">
        <slot name="btn"></slot>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["reverse", "btn", "line_clamp"]);
const hasBtn = ref(props.btn || false);
const isReversed = ref(props.reverse || false);
const line_clamp = ref(props.line_clamp || 0);
</script>
