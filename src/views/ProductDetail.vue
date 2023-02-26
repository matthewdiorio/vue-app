<template>
  <div class="bg-[#f3f4ff] p-10  rounded-xl">
    <div v-if="isLoading" class="flex justify-center items-center h-screen">
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm10-5.291a7.962 7.962 0 01-2 5.291l3 2.647A8.01 8.01 0 0024 12h-4a7.963 7.963 0 01-2 5.291zM20 12a8 8 0 01-8 8v-4c2.206 0 4.206-.899 5.657-2.343l2.343-2.343z"></path>
      </svg>
      <span>Loading...</span>
    </div>
    <div v-else-if="hasError">
      <p>Error: {{ errorMessage }}</p>
    </div>
    <div v-else>
      <div class="product-details container">
        <router-link to="/shop">
          <div class="flex items-center mb-3">
            <div>&larr; Continue Shopping</div>
          </div>
        </router-link>
        <div class="w-full flex justify-between p-4 lg:py-20 items-center">
          <div class="grid grid-cols-1 md:grid-cols-2 w-full">
            <div class="carousel  flex justify-center">
                <div for="(image, index) in product.images" :key="index">
                  <img 
                    :src="product.images[0]"
                    alt="product.title"
                    class="lg:w-[30rem] md:w-[20rem] w-[15rem]"
                  />
                </div>
            </div>
            <div class="product-info p-5 flex flex-col justify-center">
              <div class="text-2xl font-bold mb-3">{{ product.title }}</div>
              <p class="pricing mb-2">
                ${{ product.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}
                <span class="text-sm text-gray-500">+Free Shipping</span>
              </p>
              
              <p class="max-w-[500px] mb-4">{{ product.description }}</p>
              <div class="rating-container mb-3">
              <div class="star-rating">
                <span v-for="n in max">&star;</span>
                <div class="star-rating__current" :style="{width: ratingPercentage + '%'}">
                  <span v-for="n in max">&starf;</span>
                </div>
              </div>
            </div>
              <button
                class="bg-gray-800 hover:bg-gray-500 text-white p-4 
                  focus:bg-gray-800 focus:gray-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out"
                @click="addToCart(product)"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
<div class="max-w-[900px] text-center m-auto my-10 p-5">
    <h1 class="text-4xl font-bold text-center mb-10">Delivered to Your Door</h1>
    <p>
        We deliver directly to your door. Browse through our wide selection of products and find everything you need for your shopping list. From trendy fashion items to household essentials, we have it all.

We pride ourselves on providing high-quality products at affordable prices. Our user-friendly website makes it easy for you to find what you need and make your purchase with just a few clicks.

With fast and reliable shipping, your items will be delivered straight to your doorstep in no time. Plus, our friendly customer support team is always here to help you with any questions or concerns you may have.

Shop now and experience the convenience of online shopping with us. Thank you for choosing our store!
    </p>
</div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import axiosClient from "../axiosClient";


const route = useRoute();
const product = ref({});
const isLoading = ref(true);
const errorMessage = ref("");
const hasError = computed(() => !!errorMessage.value);
const max = 5;
const current = ref(0);
const store = useStore();
const addToCart = (item) => {
  store.dispatch("addToCart", item);
};


const ratingPercentage = computed(() => {
  current.value = product.value.rating;
  return (current.value / max) * 100;
});

onMounted(() => {
  axiosClient
    .get(`/products/${route.params.id}`)
    .then((data) => {
      product.value = data.data || {};
      isLoading.value = false;
    })
    .catch((error) => {
      errorMessage.value = error.message;
      isLoading.value = false;
    });
});
</script>


<style scoped>
.star-rating {
  color: gold;
  display: inline-block;
  font-size: 2em;
  position: relative;
  transform: translate(-6px);
}

.star-rating__max,
.star-rating__current {
  position: absolute;
  top: 0;
}

.star-rating__current {
  overflow: hidden;
  white-space: nowrap;
}
</style>