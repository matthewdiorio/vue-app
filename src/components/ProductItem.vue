<template>
  <img :src="product.thumbnail" :alt="product.title" />
  <h3>{{ product.title }}</h3>
 <p>{{ product.price }}</p>
  <router-link :to="{name: 'productDetail', params: {id: product.id}}">View</router-link>
</template>

<script setup>

const {product} = defineProps({
    product: {
        required: true,
        type: Object
    }
})

</script>