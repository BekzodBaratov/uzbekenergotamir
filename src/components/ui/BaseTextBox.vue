<template>
  <div class="">
    <h2 class="text-primary">
      <slot name="title"></slot>
    </h2>

    <p class="text-secondary">
      <slot name="description"></slot>
    </p>

    <ul class="text-secondary space-y-4">
      <slot name="descriptions"></slot>
    </ul>

    <ul
      v-if="props.stepDescriptions"
      class="text-secondary space-y-4 relative border-l border-dashed border-spacing-4 border-blue-primary"
    >
      <li v-for="step in props.stepDescriptions" class="ml-4">
        <div class="absolute w-3 h-3 bg-blue-primary rounded-full mt-1.5 -left-1.5"></div>
        <p>{{ step }}</p>
      </li>
    </ul>

    <button v-if="hasBtn" class="btn">
      <slot name="btn"></slot>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["btn", "stepDescriptions"]);
const hasBtn = ref(props.btn || false);
</script>
