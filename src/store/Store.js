import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useStore = defineStore("store", () => {
  let cart = ref([]);
  return { cart };
});
