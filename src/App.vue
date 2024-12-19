<template>
  <div class="h-max bg-slate-600 container item-center mx-auto px-15">
    <header>
      <nav
        class="container fixed h-50 flex justify-between items-center bg-slate-700 w-full mb-16 p-8"
      >
        <div class="logo">
          <router-link to="/" class="text-4xl font-bold">Market</router-link>
        </div>
        <ul class="nav-links flex items-center gap-5">
          <li class="links-item">
            <router-link
              to="/"
              class="color-black text-2xl p-2 hover:bg-slate-500 rounded-xl hover:text-white"
              >Home</router-link
            >
          </li>
          <li class="links-item">
            <router-link
              to="/about"
              class="color-black text-2xl p-2 hover:bg-slate-500 rounded-xl hover:text-white"
              >About page</router-link
            >
          </li>
          <li class="links-item">
            <router-link
              to="/about"
              class="color-black text-2xl p-2 hover:bg-slate-500 rounded-xl hover:text-white"
              >Contact</router-link
            >
          </li>
        </ul>
        <div class="card relative">
          <router-link to="/cart">
            <img src="./assets/image/svg/cart.svg" alt="" />
            <span
              class="absolute px-[5px] py-[3px] text-[10px] rounded-[20px] bg-black text-white top-0 right-0 -translate-y-1/2 translate-x-1/2"
              >{{ cartLength }}</span
            >
          </router-link>
        </div>
      </nav>
    </header>
    <router-view class="pt-32 py-16" />
    <footer
      class="grid grid-cols-4 border-1 border-black bg-slate-700 text-white rounded-1xl p-16"
    >
      <ul class="about-us flex flex-col gap-4">
        <li class="about-item text-[20px] font-bold text-black">
          Biz haqimizda
        </li>
        <li class="about-item">
          <router-link to="/coursers">Hodimlar</router-link>
        </li>
        <li class="about-item"><router-link to="/">Markazlar</router-link></li>
      </ul>
      <ul class="partners flex flex-col gap-4">
        <li class="partner-item text-[20px] font-bold text-black">
          Hamkorlarga
        </li>
        <li class="partner-item">
          <router-link to="/">Biz bilan bog'lanish</router-link>
        </li>
        <li class="partner-item">
          <router-link to="/">Savol-javob</router-link>
        </li>
      </ul>
      <div>
        <h1 class="text-[20px] font-bold text-black mb-4">
          Ijtimoiy tarmoqlar
        </h1>
        <ul class="social grid grid-cols-3 gap">
          <li class="social-item">
            <img src="./assets/image/svg/icons8-telegram.svg" alt="telegram" />
          </li>
          <li class="social-item">
            <img
              src="./assets/image/svg/icons8-instagram.svg"
              alt="instagram"
            />
          </li>
          <li class="social-item">
            <img src="./assets/image/svg/icons8-facebook.svg" alt="facebook" />
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useStore } from "@/store/Store";
import { computed } from "vue";
let store = useStore();
let cartLength = computed(() => {
  let num = 0;
  let price = 0;
  store.cart.forEach((el) => {
    num += el.quantity;
  });
  return num;
});
</script>
