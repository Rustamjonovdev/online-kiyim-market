import { createWebHistory, createRouter } from "vue-router";

// PAGES
import Home from "@/views/Home.vue";
import AboutProduct from "@/views/AboutProduct.vue";
import Cart from "@/views/Cart.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product/:id",
    name: "product",
    component: AboutProduct,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
