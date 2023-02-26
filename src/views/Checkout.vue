<template>

  <div>
    <div class="">
      <div
        v-for="product of products"
        :key="product.id"
        class="bg-white shadow-md"
      >

        <div
          class="flex items-center justify-between border border-solid p-5 mb-6"
          key={id}
        >
          <div class="flex gap-3 items-center">
            <img
              :src="product.thumbnail"
              class="w-auto h-14"
            />
            <p class="product-name font-bold">
              {{ product.title }}
            </p>
          </div>
          <div class="flex items-center gap-3 ">
            <button
              class="bg-stone-300  w-[30px] h-[30px] text-black rounded-full flex items-center justify-center"
              @click="addToCart(product)"
            >+</button>
            <div class="count">{{ product.count }}</div>
            <button
              class="bg-stone-300  w-[30px] h-[30px] text-black rounded-full flex items-center justify-center"
              @click="removeFromCart(product)"
            >-</button>
          </div>

          <div class="flex flex-col items-center gap-3">
            <div class="pricing">${{(product.price * product.count).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import { useStore } from "vuex";

const store = useStore();

const products = computed(() => {
  return store.state.cart;
});

const addToCart = (item) => {
  store.dispatch("addToCart", item);
};

const removeFromCart = (item) => {
  store.dispatch("removeFromCart", item);
};

console.log(products);
</script>