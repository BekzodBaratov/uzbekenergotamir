<template>
  <Divisions />
  <div class="chart">
    <div class="container">
      <Chart />
    </div>
  </div>
</template>

<script setup>
import Divisions from "../../components/sections/Divisions.vue";
import Chart from "../../components/DashboardChart.vue";
</script>
<style scoped>
.chart {
  padding: 5rem 0;
  background-image: url("../../assets/images/about/solar_diagram_bg.webp");
  background-position: center;
  background-size: cover;
}
</style>
