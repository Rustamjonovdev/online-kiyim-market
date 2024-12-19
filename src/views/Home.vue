<template>
  <div class="p-32">
    <h1>Products</h1>
    <div class="grid grid-cols-5 gap-4">
      <ProductCard
        class="flex item-center bg-slate-500 shadow-blue-500 hover:ring rounded-2xl p-5 border-stone-950"
        v-for="item in products"
        :key="item"
        :product="item"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import { data } from "autoprefixer";
export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      limit: 5,
      allPRoductsLimit: 0,
      products: [],
    };
  },
  methods: {
    getProducts() {
      fetch(`https://dummyjson.com/product`)
        .then((res) => res.json())
        .then((data) => {
          this.products = data.products;
          this.allPRoductsLimit = data.total;
          // console.log(data);
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
