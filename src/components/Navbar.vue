<template>
  <header class="bg-white shadow-md h-24 text-black flex justify-between">
    <router-link :to="{name: 'home'}">
      Home
    </router-link>
    <div>
      <router-link :to="{name: 'shop'}">
        Shop
      </router-link>
      <router-link :to="{name: 'checkout'}">
        Checkout
      </router-link>
    </div>
  </header>
  <main>
    <router-view />
  </main>
</template>