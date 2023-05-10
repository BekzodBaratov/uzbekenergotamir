import { defineStore } from "pinia";
import axios from "axios";

export const useContactStore = defineStore("ContactStore", {
  state: () => ({}),
  actions: {
    async addContact(data) {
      const { name, phone, message } = data;
      try {
        const res = await axios.post("/contacts", { name, phone, message });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
