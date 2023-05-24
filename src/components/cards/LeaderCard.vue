<template>
  <div class="p-3 rounded-lg border bg-white shadow-md">
    <div class="grid md:grid-cols-[1fr_6fr] gap-4">
      <img class="max-h-[30rem] rounded-md object-cover object-center" :src="leader.image" :alt="leader.name" />
      <div>
        <h2 class="text-primary2">{{ leader.name }}</h2>
        <div class="grid md:grid-cols-[5fr_3fr] gap-4">
          <div class="space-y-4">
            <div>
              <h3 class="text-primary3">{{ t("ourLeaders.job") }}</h3>
              <p class="text-blue-primary">{{ leader.job }}</p>
            </div>
            <div>
              <h3 class="text-primary3">{{ t("ourLeaders.address") }}</h3>
              <p class="text-blue-primary">{{ leader.address }}</p>
            </div>
          </div>
          <div class="space-y-4">
            <div>
              <h3 class="text-primary3">{{ t("ourLeaders.phone") }}</h3>
              <p class="text-blue-primary">{{ leader.phone }}</p>
            </div>
            <div>
              <h3 class="text-primary3">E-mail</h3>
              <p class="text-blue-primary">{{ leader.mail }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const props = defineProps(["leader"]);
const leader = computed(() => props.leader);
const { t } = useI18n();
</script>
