<template>
  <div class="grid  grid-cols-1 md:grid-cols-5 md:gap-5 mb-5 space-y-2 md:space-y-0 ">
    <div class="checkout-cart col-span-3  md:col-span-3 bg-[#f3f4ff] p-2 py-5 md:p-10 rounded-xl flex flex-col max-h-payment-info ">
      <h1 class="bold text-3xl mb-5">Order Summary</h1>
      <div v-if="!products.length">
        <p>Your cart is empty</p>
      </div>
      <div v-else class="cart-items overflow-y-auto">
      <div
        v-for="product of products"
        :key="product.id"
        class="bg-white shadow-md">
        <CartItem :product="product" />
      </div>
    </div>
      <div class="price-total mt-auto">
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mt-auto"/>
        <div className="total ml-auto flex gap-4 justify-end items-center">
          <span className="font-bold">Total:</span> 
          <span className="text-2xl font-extrabold">${{ total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}</span>
        </div>
      </div>
    </div>
    <div class="payment-info col-span-5 md:col-span-2  bg-[#f3f4ff] p-1 md:p-10 rounded-xl">
      <Payment />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import { useStore } from "vuex";
import  Payment  from "../components/Payment.vue"
import CartItem from "../components/CartItem.vue";


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

const total = computed(() => {
  return store.getters.getTotal
})

console.log(products);
</script>