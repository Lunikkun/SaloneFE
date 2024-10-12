<script setup lang="ts">
import { defineAsyncComponent, onMounted, watch } from 'vue'
import NavbarHome from './components/NavbarHome.vue'
import { RouterView, useRoute } from 'vue-router'
import { resetPasswordPanelApplyOpened, resetToken, session } from './stores/globals'

const FooterPage = defineAsyncComponent(() => import('./components/FooterPage.vue'))
watch(useRoute(), (route) => {
  resetToken.value = route.params.token
  if(resetToken.value !== undefined)
    resetPasswordPanelApplyOpened.value = true
  console.log('TOKEN:' + route.params.token)
})


onMounted(async() => {
  console.log('MODULO_DENTRO')
  let result = await fetch('http://127.0.0.1:3000/validatelogin', {
    mode: 'cors',
    credentials: 'include',
    method: 'POST',
    headers: {}
  })
  let res = await JSON.parse(await result.text())
  console.log(res)
  if(result.status === 200)
    session.value = res
  else session.value = undefined 
})

</script>

<template>
  <div class="w-screen h-full bg-gradient-to-b from-[#e7d0cc] to-[#b5bbcb] via-50%">
    <NavbarHome></NavbarHome>
    <RouterView></RouterView>
    <FooterPage></FooterPage>
  </div>
</template>
