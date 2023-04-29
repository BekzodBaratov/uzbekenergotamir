import { defineStore } from "pinia";
import axios from "axios";

export const usePartnerStore = defineStore("PartnerStore", {
  state: () => ({
    partners: [],
  }),
  actions: {
    async getAllPartners() {
      try {
        const partners = await axios.get("/partners");
        this.partners = partners.data.partners;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
});
