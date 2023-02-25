<template>
    <div class="flex flex-col ">
          <input type="text" class="rounded" placeholder="search for items" v-model="keyword" @change="searchProducts">  
          <div class="flex justify-center gap-2 mt-2">
          </div>
    </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
      <div v-for="product of products" :key="product.id" class="bg-white shadow-md" >
        <img :src="product.thumbnail" :alt="product.title">
        <h3> {{ product.title }}</h3>
        <p> {{  product.price }}</p>
        <router-link to="/">View</router-link>
      </div>
  </div>

</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";

const keyword = ref('');
const products = computed(() => store.state.searchedProducts)
function searchProducts() {
  store.dispatch('searchProducts', keyword.value)
}

</script>