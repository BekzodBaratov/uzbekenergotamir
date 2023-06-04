import { createApp } from "vue";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";
import VueApexCharts from "vue3-apexcharts";
import ApexCharts from "apexcharts";
import Toast from "vue-toastification";
import router from "./routes";
import i18n from "./plugins/i18n";

import App from "./App.vue";
1
import "./plugins/axios";
import "./style.css";
import "vue-toastification/dist/index.css";
import "./assets/styles/btn.css";
import "./assets/styles/input.css";
import "./assets/styles/text.css";
import "./assets/styles/image.css";

const app = createApp(App);

app.config.globalProperties.$apexcharts = ApexCharts;
app.use(i18n);
app.use(router);
app.use(createPinia());
app.use(VueApexCharts);
app.use(Toast);
app.use(MotionPlugin);

app.mount("#app");
