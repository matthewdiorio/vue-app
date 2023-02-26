<template>
  <div class="flex flex-col ">
    <input
      type="text"
      class="rounded"
      placeholder="search for items"
      v-model="keyword"
      @change="searchProducts"
    >
    <div class="flex justify-center gap-2 mt-2">
    </div>
  </div>

  <div v-if="isLoading">
    <p>Loading</p>
  </div>
  <div v-if="hasError">
    <p>Error: {{ errorMessage }}</p>
  </div>
  <div v-if="!products.length && !isLoading && !hasError">
    <p>No products available</p>
  </div>
  <div v-else>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
      <div
        v-for="product of products"
        :key="product.id"
        class="bg-white shadow-md"
      >
        <ProductItem :product="product" />
      </div>
    </div>
  </div>

  {{ products }}

</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import ProductItem from "../components/ProductItem.vue";

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