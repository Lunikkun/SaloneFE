<script setup lang="ts">
import LoginPanel from './LoginPanel.vue'
import RegisterPanel from './RegisterPanel.vue'
import ResetPanelApply from './ResetPanelApply.vue'
import {
  loginPanelOpened,
  registerPanelOpened,
  resetPasswordPanelApplyOpened,
  resetPasswordPanelOpened,
  resetToken,
  session
} from '@/stores/globals'
import ResetPanel from './ResetPanel.vue'
import { RouterLink } from 'vue-router'
import router from '@/router'

console.log(session.value)

async function logout() {
  let result = await fetch('http://127.0.0.1:3000/logout', {
    credentials: 'include',
    method: 'POST',
    headers: {},
    mode: 'cors'
  })
  session.value = undefined
  console.log(result)
  router.push("/")
}
</script>

<template>
  <div class="p-4 flex sm:justify-between justify-around items-center">
    <div class="lg:space-x-6 space-x-4 font-fanwood sm:text-xl text-lg">
      <RouterLink to="/"><p class="inline">Home</p></RouterLink>
      <RouterLink to="/servizi"><p class="inline">Servizi</p></RouterLink>
      <RouterLink to="/chisono"><p class="inline">Chi sono</p></RouterLink>
    </div>
    <div class="sm:block hidden">
      <p class="font-quando text-3xl">Carmelinda</p>
      <p class="font-quando text-3xl">Hair Saloon</p>
    </div>
    <div class="lg:space-x-6 flex flex-row-reverse font-fanwood sm:text-xl text-md relative">
      <button
        v-if="session === undefined"
        @click="
          () => {
            console.log(session, registerPanelOpened)
            loginPanelOpened = false
            registerPanelOpened = !registerPanelOpened
          }
        "
        class="bg-white rounded-full lg:p-2 p-1"
      >
        Registrati
      </button>
      <RouterLink v-else to="/areaprivata">
        <div class="bg-white rounded-full lg:p-2 p-1 inline">Area Privata</div>
      </RouterLink>
      <button
        v-if="session === undefined && !resetPasswordPanelOpened"
        @click="
          () => {
            loginPanelOpened = !loginPanelOpened
            registerPanelOpened = false
            console.log(session, loginPanelOpened)
          }
        "
      >
        Accedi
      </button>
      <button
        v-else-if="session === undefined && resetPasswordPanelOpened"
        @click="() => (resetPasswordPanelOpened = !resetPasswordPanelOpened)"
      >
        Recupera
      </button>
      <button v-else @click="() => logout()">Logout</button>
      <LoginPanel
        v-if="loginPanelOpened && !resetPasswordPanelOpened"
        class="z-10 top-14"
      ></LoginPanel>
      <ResetPanel
        v-if="!loginPanelOpened && resetPasswordPanelOpened"
        class="z-10 top-14"
      ></ResetPanel>
      <RegisterPanel v-if="registerPanelOpened" class="z-10 top-14"></RegisterPanel>
      <ResetPanelApply
        v-if="resetToken !== undefined && resetPasswordPanelApplyOpened"
        class="z-10 top-14"
      ></ResetPanelApply>
    </div>
  </div>
</template>
