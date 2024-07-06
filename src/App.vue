<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import NavbarHome from './components/NavbarHome.vue'
import HomePage from './components/HomePage.vue';
const FooterPage = defineAsyncComponent(() => import('./components/FooterPage.vue'))
</script>

<template>
  <div class="w-screen h-full bg-gradient-to-b from-[#e7d0cc] to-[#b5bbcb] via-50%">
    <NavbarHome></NavbarHome>
    <HomePage></HomePage>
    <FooterPage></FooterPage>
  </div>
</template>
