import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("ProductStore", {
  state: () => ({
    products: [],
  }),
  actions: {
    async getAllProducts() {
      try {
        const products = await axios.get("/products");
        this.products = products.data.products;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
});
