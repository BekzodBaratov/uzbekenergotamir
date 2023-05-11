import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";
import { useContactStore } from "./contacts";

export const useCalculateStore = defineStore("CalculateStore", {
  actions: {
    async addCalculate(data) {
      let store = useContactStore();
      const toast = useToast();
      store.loading = true;
      const { name, phone, service, sendPlace, recivePlace, loadWeight } = data;
      try {
        const res = await axios.post("/calculates", {
          name,
          phone,
          name,
          phone,
          service,
          sendPlace,
          recivePlace,
          loadWeight,
        });
        console.log(res);
        toast.success("Malumot qabul qilindi, \n Bizning Xizmatimizdan foydalanganiz uchun tashakkur.");
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        store.loading = false;
      }
    },
  },
});
