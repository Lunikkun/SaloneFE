<script setup lang="ts">
import LoginPanel from './LoginPanel.vue'
import RegisterPanel from './RegisterPanel.vue'
import { loginPanelOpened, registerPanelOpened, session } from '@/stores/globals'

console.log(session.value);

async function logout() {
  let result = await fetch('http://127.0.0.1:3000/logout', {
    credentials: 'include',
    method: 'POST',
    headers: {},
    mode: 'cors'
  })
  session.value = undefined
  console.log(result)
}

</script>

<template>
  <div class="p-4 flex sm:justify-between justify-around items-center">
    <div class="lg:space-x-6 space-x-4 font-fanwood sm:text-xl text-lg">
      <p class="inline">Home</p>
      <p class="inline">Servizi</p>
      <p class="inline">Chi sono</p>
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
      <button v-else class="bg-white rounded-full lg:p-2 p-1">{{ session.userData.nome }}</button>
      <button
        v-if="session === undefined"
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
      <button v-else @click="() => logout()">Logout</button>
      <LoginPanel v-if="loginPanelOpened" class="z-10 top-14"></LoginPanel>
      <RegisterPanel v-if="registerPanelOpened" class="z-10 top-14"></RegisterPanel>
    </div>
  </div>
</template>
