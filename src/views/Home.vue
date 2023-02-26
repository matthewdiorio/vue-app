<template>
<div class="relative h-[500px] w-screen left-1/2 transform -translate-x-1/2">
  <video class="absolute top-0 left-0 w-full h-full object-cover z-0 " autoplay muted loop>
    <source src="/background.mp4" type="video/mp4">
  </video>
  <div class="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-60 z-0"></div>
  <div class="relative z-10 flex flex-col items-center justify-center h-full">
    <h1 class="text-white text-4xl font-bold mb-4">Welcome to our online store</h1>
    <p class="text-white text-lg mb-8">Browse through our wide selection of products and find everything you need.</p>
    <router-link to="/shop" class="bg-white text-gray-900 hover:bg-gray-300 font-bold py-2 px-4 rounded-full">Start Shopping</router-link>
  </div>
</div>
<div class="grid md:grid-cols-2">
<div class="max-w-[900px]  flex flex-col  justify-center m-auto my-10 p-5">
    <h1 class="text-4xl mb-10">Find What You Need</h1>
    <p>
        Welcome to our online store! Browse through our wide selection of products and find everything you need for your shopping list. From trendy fashion items to household essentials, we have it all.

We pride ourselves on providing high-quality products at affordable prices. Our user-friendly website makes it easy for you to find what you need and make your purchase with just a few clicks.

With fast and reliable shipping, your items will be delivered straight to your doorstep in no time. Plus, our friendly customer support team is always here to help you with any questions or concerns you may have.

Shop now and experience the convenience of online shopping with us. Thank you for choosing our store!
    </p>
</div>
<div class=" flex flex-col items-center justify-center p-5 ">
 <img src="/vr.png" alt="Girl using VR headset" />
</div>
</div>

</template>

<script setup>
import { useRoute } from "vue-router";
</script>

