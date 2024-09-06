<script setup lang="ts">
import { defineAsyncComponent, watch } from 'vue'
import NavbarHome from './components/NavbarHome.vue'
import HomePage from './components/HomePage.vue'
import { useRoute } from 'vue-router'
import { resetPasswordPanelApplyOpened, resetToken } from './stores/globals'
const FooterPage = defineAsyncComponent(() => import('./components/FooterPage.vue'))
watch(useRoute(), (route) => {
  resetToken.value = route.params.token
  if(resetToken.value !== undefined)
    resetPasswordPanelApplyOpened.value = true
  console.log('TOKEN:' + route.params.token)
})
</script>

<template>
  <div class="w-screen h-full bg-gradient-to-b from-[#e7d0cc] to-[#b5bbcb] via-50%">
    <NavbarHome></NavbarHome>
    <HomePage></HomePage>
    <FooterPage></FooterPage>
  </div>
</template>
