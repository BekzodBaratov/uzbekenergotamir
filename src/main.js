import { createApp } from "vue";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";
import router from "./routes";

import App from "./App.vue";

import "./plugins/axios";
import "./style.css";
import "./assets/styles/btn.css";
import "./assets/styles/input.css";
import "./assets/styles/text.css";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(MotionPlugin);

app.mount("#app");
