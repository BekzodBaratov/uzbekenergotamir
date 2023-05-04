import axios from "axios";
import i18n from "./i18n";

axios.defaults.baseURL = "http://143.198.212.79:3000/api/v1";
axios.interceptors.request.use(
  (config) => {
    config.headers["Accept-Language"] = i18n.global.locale.value;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
