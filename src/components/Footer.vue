
<template>

        <footer class="bg-gray-200 h-24 text-black flex justify-between items-center w-screen ml-[calc(-50vw+50%)] mt-5">
            <div class="container mx-auto text-center">
                <p class="text-lg">© 2023 Your E-Commerce. All rights reserved.</p>
                <nav class="flex gap-8 items-center justify-center mr-5">
                    <router-link to="/shop" class="text-lg font-medium hover:text-gray-700 transition-colors">Shop</router-link>
                    <router-link to="/privacy" class="text-lg font-medium hover:text-gray-700 transition-colors">Privacy Policy</router-link>
                    <router-link to="/checkout" class="text-lg font-medium hover:text-gray-700 transition-colors">Checkout</router-link>
                </nav>
            </div>
</footer>

</template>
<script setup>
import { useStore } from "vuex";

const store = useStore();
</script>