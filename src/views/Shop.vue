<template>

  <div class="bg-[#f3f4ff] p-10 rounded-xl">
    <div class="w-full flex justify-between">
      <h1 class="text-3xl">Shop</h1>
    <input
      type="text"
      class="rounded mb-5"
      placeholder="search for items"
      v-model="keyword"
      @change="searchProducts"
    >
    </div>

  <div v-if="isLoading" class="flex justify-center items-center h-screen">
    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm10-5.291a7.962 7.962 0 01-2 5.291l3 2.647A8.01 8.01 0 0024 12h-4a7.963 7.963 0 01-2 5.291zM20 12a8 8 0 01-8 8v-4c2.206 0 4.206-.899 5.657-2.343l2.343-2.343z"></path>
    </svg>
    <span>Loading...</span>
  </div>
  <div v-if="hasError">
    <p>Error: {{ errorMessage }}</p>
  </div>
  <div v-if="!products.length && !isLoading && !hasError">
    <p>No products available</p>
  </div>
  <div v-else>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
    <div
      v-for="product of products"
      :key="product.id"
      class="product-container h-96"
    >
      <ProductItem :product="product" class="h-full bg-white rounded-lg" />
    </div>
  </div>
  </div>
</div>

</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import ProductItem from "../components/ProductItem.vue";
import Banner from "../components/Banner.vue";

const isLoading = ref(true);
const hasError = computed(() => !!errorMessage.value);
const errorMessage = ref("");
const keyword = ref("");
const products = ref([]);

onMounted(() => {
  axiosClient
    .get("/products")
    .then((data) => {
      products.value = data.data.products || {};
    })
    .catch((error) => {
      errorMessage.value = error.message;
    })
    .finally(() => {
      isLoading.value = false;
    });
    console.log(products)
});

function searchProducts() {
  isLoading.value = true;
  axiosClient
    .get(`/products/search?q=${keyword.value}`)
    .then(({ data }) => {
      products.value = data.products;
      isLoading.value = false;
    })
    .catch((error) => {
      errorMessage.value = error.message;
      isLoading.value = false;
    });
}
</script>