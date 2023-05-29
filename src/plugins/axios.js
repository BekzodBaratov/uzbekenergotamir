import axios from "axios";
import i18n from "./i18n";

axios.defaults.baseURL = "http://134.209.75.85:3000/api/v1";

axios.interceptors.request.use(
  (config) => {
    config.headers["Accept-Language"] = i18n.global.locale.value;
    config.headers["access-control-allow-origin"] = "*";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
