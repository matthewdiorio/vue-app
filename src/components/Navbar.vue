
<template>
    <header class="bg-white shadow-md h-24 text-black flex justify-between">
      <router-link :to="{name: 'home'}">
        Home
      </router-link>
      <router-link :to="{name: 'shop'}">
        Shop
      </router-link>
    </header>
    <main>
      <router-view />
    </main>
</template>