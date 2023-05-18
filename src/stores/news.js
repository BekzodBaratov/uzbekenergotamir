import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";
import { useContactStore } from "./contacts";

export const useNewsStore = defineStore("NewsStore", {
  state: () => ({
    news: [],
  }),
  getters: {
    getUzbekenergo({ news }) {
      return news.filter((news) => news.category === "uzbekenergo");
    },
    getOtherNews({ news }) {
      return news.filter((news) => news.category === "otherNews");
    },
  },
  actions: {
    async getNews() {
      let store = useContactStore();
      const toast = useToast();
      store.loading = true;
      try {
        const res = await axios.get("/news");
        console.log(res.data);
        this.news = res.data.news;
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        store.loading = false;
      }
    },
  },
});
