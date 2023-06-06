<template>
  <div>
    <h2 class="text-big mb-8">{{ t("complatedProd.title") }}</h2>
    <div class="space-y-8">
      <BasePhotoText v-for="pr in ComplatedProjects" :key="pr.id" :reverse="pr.reverse">
        <template #image>
          <div :class="`imageBgLine-${pr.reverse ? 'right' : 'left'}`">
            <img
              class="rounded-lg w-full object-cover object-center aspect-video"
              :src="pr.image"
              alt="image1"
            />
          </div>
        </template>
        <template #title>
          <p class="flex gap-2">
            <span>{{ pr.title }}</span>
            <span class="text-blue-primary">{{ pr.titleKw }}</span>
          </p>
        </template>
        <template #descriptions>
          <li class="flex gap-4" v-for="(description, i) in pr.descs" :key="i">
            <img :src="description.descIcon" :alt="description.desc" />
            <span class="text-lg font-semibold text-black">{{ description.desc }}</span>
          </li>
        </template>
      </BasePhotoText>
    </div>
  </div>
</template>

<script setup>
import BasePhotoText from "/src/components/ui/BasePhotoText.vue";
import { useI18n } from "vue-i18n";
import { computed } from "vue";
const { t } = useI18n();

const props = defineProps(['projects'])
const ComplatedProjects = computed(() => props.projects)
</script>
