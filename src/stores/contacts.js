import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";

export const useContactStore = defineStore("ContactStore", {
  state: () => ({
    loading: false,
  }),
  actions: {
    async addContact(data) {
      const toast = useToast();
      this.loading = true;
      const { name, phone, message } = data;
      try {
        const res = await axios.post("/contacts", { name, phone, message });
        console.log(res);
        toast.success("Malumot qabul qilindi, Xizmatimizdan foydalanganiz uchun rahmat.");
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        this.loading = false;
      }
    },
  },
});
