<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const series = ref([
  {
    data: [10, 15, 36, 70],
  },
]);
const chartOptions = ref({
  chart: {
    id: "area-datetime",
    type: "area",
    height: "auto",
    zoom: {
      autoScaleYaxis: false,
    },
  },
  colors: ["#FF92AE", "#4C6FFF"],
  dataLabels: {
    enabled: false,
    dropShadow: {
      enabled: false,
      top: 1,
      left: 1,
      blur: 1,
      color: "#000",
      opacity: 0.45,
    },
  },
  title: {
    text: t("chart_title"),
    align: "left",
    style: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#2E384D",
      paddingTop: "24px",
      paddingBottom: "8px",
    },
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: [
      "В 2020 году 4,4 млн $",
      "В 2021 году 6,1 млн $",
      "В 2022 году 36 млн $",
      "В 2022 году более 70 млн $",
    ],
    style: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#2E384D",
      paddingTop: "24px",
      paddingBottom: "8px",
    },
  },
  yaxis: {
    show: true,
    showAlways: true,
    min: 0,
    max: 75,
    showForNullSeries: true,
    seriesName: undefined,
    opposite: false,
    reversed: false,
    logarithmic: false,
    logBase: 10,
    tickAmount: 5,
    style: {
      color: "#B2B7C1",
    },
  },
  fill: {
    opacity: 0,
    type: "solid",
    colors: undefined,
  },
  tooltip: {
    // @ts-ignore
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      // '<span>' + w.globals.labels[dataPointIndex] + series[seriesIndex][dataPointIndex] + '</span>' +
      return (
        '<div class="arrow_box flex flex-col pt-[10px] pb-[8px] px-[12px]">' +
        '<p class="text-center text-xl">' +
        w.globals.categoryLabels[dataPointIndex] +
        "</p>" +
        '<ul class="flex gap-[12px] pt-[6px]">' +
        '<li class="text-[#3366FF] text-xl font-medium">' +
        "</li>" +
        "</ul>" +
        "</div>"
      );
    },
  },
  legend: {
    show: true,
    showForNullSeries: true,
    showForZeroSeries: true,
    position: "top",
    horizontalAlign: "left",
    verticalAlign: "top",
    floating: false,
    fontSize: "14px",
    fontFamily: "Helvetica, Arial",
    fontWeight: 400,
    formatter: undefined,
    inverseOrder: false,
    width: undefined,
    height: undefined,
    tooltipHoverFormatter: undefined,
    customLegendItems: [],
    offsetX: -24,
    offsetY: -12,
    labels: {
      colors: undefined,
      useSeriesColors: false,
    },
    itemMargin: {
      horizontal: 5,
      vertical: 0,
    },
    onItemClick: {
      toggleDataSeries: true,
    },
    onItemHover: {
      highlightDataSeries: true,
    },
    style: {
      fontSize: "12px",
      align: "left",
      paddingBottom: "20px",
    },
  },
  dropShadow: {
    enabled: true,
    top: 0,
    left: 0,
    blur: 3,
    opacity: 0.5,
    color: "yellow",
  },
});
</script>

<template>
  <div class="bg-white p-[24px] rounded-lg">
    <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<style>
.arrow_box {
  background: linear-gradient(180deg, #f3f4fe 0%, rgba(243, 244, 254, 0) 100%);
  border: 1px solid #dfe6fe;
  backdrop-filter: blur(5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 8px;
}
</style>
