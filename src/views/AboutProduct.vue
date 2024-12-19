<template>
  <div class="p-64">
    <h2 class="text-4xl font-bold mb-4">
      {{ detail.title }}
    </h2>
    <div class="size-full grid grid-cols-2 gap-[16px]">
      <Swiper>
        <SwiperSlide v-for="img in detail.images" :key="img" class="flex">
          <img
            :src="img"
            alt=""
            class="w-48 object-content flex m-2 gap-2 border-2 border-[skyblue] rounded-xl"
          />
        </SwiperSlide>
      </Swiper>
      <div
        class="text rounded-xl flex flex-col p-8 gap-4 border-2 border-[skyblue] shadow-lg shadow-blue-500/50"
      >
        <p>
          <span class="font-bold text-2xl">Price: </span>{{ detail.price }}$
        </p>
        <p>
          <span class="font-bold text-2xl">Rating: </span>{{ detail.rating }}
        </p>
        <p>
          <span class="font-bold text-2xl"> Description: </span
          >{{ detail.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
export default {
  data() {
    return {
      detail: {},
    };
  },
  methods: {
    getDetail() {
      fetch(`https://dummyjson.com/products/${this.$route.params.id}`)
        .then((res) => res.json())
        .then((data) => {
          this.detail = data;
          console.log(data);
        });
    },
  },
  mounted() {
    this.getDetail();
  },
};
</script>

<style lang="scss" scoped></style>
