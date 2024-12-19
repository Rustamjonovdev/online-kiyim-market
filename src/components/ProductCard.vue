<template>
  <div class="card">
    <div class="card-header">
      <div class="card-img">
        <img :src="product.thumbnail" alt="" class="object-contain" />
      </div>
      <div class="car__text-wrapper p-2">
        <router-link
          :to="`/product/${product.id}`"
          class="product-title font-bold"
          >{{ product.title }}</router-link
        >
        <h4 class="product-price">{{ product.price }}$</h4>
      </div>
      <button
        @click="addTocart"
        class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/store/Store";
let { product } = defineProps(["product"]);
console.log(product);

let store = useStore();
function addTocart() {
  let item = {
    item: product.title,
    thumbnail: product.thumbnail,
    id: product.id,
    price: product.price,
    desc: product.description,
    quantity: 1,
  };
  let pr = store.cart.find((el) => el.id == item.id);
  if (!pr) {
    store.cart.push(item);
  } else {
    let index = store.cart.indexOf(pr);
    store.cart[index].quantity++;
    // store.cart[index].price;
  }
  localStorage.setItem("cart", JSON.stringify(store.cart));
}
</script>

<style lang="scss" scoped></style>
