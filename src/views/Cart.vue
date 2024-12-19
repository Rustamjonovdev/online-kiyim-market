<template>
  <div class="grid grid-cols-2">
    <div class="" v-for="item in store.cart" :key="item">
      <div class="flex border-2 p-8 m-2 rounded-2xl">
        <img class="h-4" :src="item.thumbnail" alt="" />
        <div>
          <h1 class="text-2xl">{{ cartTitle }}</h1>
          <p>${{ cartPrice }}</p>
          <button
            @click="deleteCart"
            class="bg-slate-700 p-2 rounded-2xl font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/store/Store";
import { computed } from "vue";
let store = useStore();
let cartPrice = computed(() => {
  let price = 0;
  store.cart.forEach((el) => {
    price += el.price;
  });
  return price;
});
let cartTitle = computed(() => {
  let title = "";
  store.cart.forEach((el) => {
    title += el.item;
  });
  return title;
});
function deleteCart() {
  let product = store.cart.find((el) => {
    el.id == store.cart.id;
  });
  let index = store.cart.indexOf(product);
  store.cart.splice(index, 1);
}
</script>
