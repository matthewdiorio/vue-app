<template>
    <header class="bg-white h-24 text-black flex justify-between items-center">
      <router-link to="/" class="text-lg font-bold">
        <img src="/alogo.png" alt="Alogo logo" class="max-w-[100px] h-auto">
      </router-link>
      <nav class="flex gap-8 items-center mr-5">
        <router-link to="/shop" class="text-lg font-medium hover:text-gray-700 transition-colors">Shop</router-link>
        <router-link to="/checkout" class="text-lg font-medium hover:text-gray-700 transition-colors relative">
            <img src="/shopping-cart-icon.png" alt="Shopping Cart" class="h-5 w-auto">
            <div className="cart-icon absolute w-5 h-5 z-40 bottom-[-5px] right-[-15px] flex flex-col justify-center items-center rounded-full bg-black text-white text-xs">
                {{ store.state.cartQuantity }}
            </div>
        </router-link>
      </nav>

    </header>
    <main>
      <router-view />
    </main>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
</script>