<template>
  <div
    class="flex items-center justify-between border border-solid p-5 mb-6 thumbnail"
    key={id}>
    <div class="flex gap-3 items-center">
      <img
        :src="product.images[0]"
        class="w-14 h-14 object-contain"
      />
      <p class="product-name font-bold max-w-xs truncate">
        {{ product.title }}
      </p>
    </div>
    <div class="">

    <div class="flex flex-col items-center gap-3">
      <div class="pricing font-bold text-md text-center">${{(product.price * product.count).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}}</div>
    </div>
    <div class="flex items-center justify-end gap-1 button-container mt-2 ">
      <button
        class="bg-stone-300  w-[25px] h-[25px] text-black rounded-full flex items-center justify-center"
        @click="addToCart(product)"
      >+</button>
      <div class="count min-w-[18px] text-center">{{ product.count }}</div>
      <button
        class="bg-stone-300  w-[25px] h-[25px] text-black rounded-full flex items-center justify-center"
        @click="removeFromCart(product)"
      >-</button>
    </div>

  </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const { product } = defineProps({
  product: {
  required: true,
  type: Object,
  },
});

const addToCart = (item) => {
  store.dispatch("addToCart", item);
};

const removeFromCart = (item) => {
  store.dispatch("removeFromCart", item);
};
</script>