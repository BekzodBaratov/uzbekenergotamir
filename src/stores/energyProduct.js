import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";
import { useContactStore } from "./contacts";

export const useEnergyProductStore = defineStore("EnergyProduct", {
  state: () => ({
    energyProducts: [],
  }),
  getters: {
    getSolarPanel({ energyProducts }) {
      return energyProducts.filter((energyProduct) => energyProduct.category === "solarPanel");
    },
    getWaterHeater({ energyProducts }) {
      return energyProducts.filter((energyProduct) => energyProduct.category === "waterHeater");
    },
  },
  actions: {
    async getEnergyProducts() {
      let store = useContactStore();
      const toast = useToast();
      store.loading = true;
      try {
        const res = await axios.get("/energyProducts");
        this.energyProducts = res.data.energyProducts;
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        store.loading = false;
      }
    },
  },
});
