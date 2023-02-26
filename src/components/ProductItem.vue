<template>
  <div className='product bg-white hover:shadow rounded-lg p-3'>
    <router-link :to="{name: 'productDetail', params: {id: product.id}}">
      <div class="relative w-full aspect-w-1 aspect-h-1 h-64">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute top-0 bottom-0 left-0 right-0"
            style="padding-bottom: 100%;"
          ></div>
          <img
            :src="product.images[0]"
            :alt="product.title"
            class="absolute top-0 left-0 w-full h-full object-contain rounded-lg p-5"
          />
        </div>
      </div>
    </router-link>
    <div className='product-details mt-2 flex flex-col items-start p-5'>
      <router-link :to="{name: 'productDetail', params: {id: product.id}}" class="w-full">
      <div className="font-bold text-center mb-1">{{ product.title }}</div>
      <div className="text-lg  text-center">${{ product.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}</div>
      </router-link>


    </div>

  </div>
</template>

<script setup>
const { product } = defineProps({
  product: {
    required: true,
    type: Object,
  },
});
</script>