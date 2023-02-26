<template>
  <div v-if="isLoading">
    <p>Loading</p>
  </div>
  <div v-if="hasError">
    <p>Error: {{ errorMessage }}</p>
  </div>
  <div v-else>
    <img
      v-if="product.images && product.images.length > 0"
      :src="product.images[0]"
      :alt="product.title"
    >
    <h1>{{ product.title }}</h1>
    <p> {{ product.description }}</p>
    <p> ${{ product.price }}</p>

    <button @click="addToCart(product)">Add to cart</button>
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
const hasError = computed(() => !!errorMessage.value);
const errorMessage = ref("");

const store = useStore();
const addToCart = (item) => {
  store.dispatch("addToCart", item);
};

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

