import { createApp } from "vue";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";
import router from "./routes";

import App from "./App.vue";

import "./plugins/axios";
import "./style.css";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(MotionPlugin);

app.mount("#app");
