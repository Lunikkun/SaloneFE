<script setup lang="ts">
import { loginPanelOpened, resetPasswordPanelOpened, session } from '@/stores/globals'
import { ref } from 'vue'

let email = ref('')
let pw = ref('')
let errors = ref()
//session.value = undefined

async function login(mail: string, password: string) {
  let result = await fetch('http://127.0.0.1:3000/login', {
    mode: 'cors',
    credentials: 'include',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: mail, password })
  })

  let res = await JSON.parse(await result.text())
  if (res.session === undefined) errors.value = res.error
  else errors.value = undefined

  if (res.session !== null) session.value = res
  else session.value = undefined
  console.log(res)
}
</script>
<template>
  <div class="bg-white text-black z-999 absolute w-[250px] rounded-2xl">
    <div
      class="flex flex-col align-middle justify-center space-y-4 px-6 mt-5 py-6 font-fanwood box-content"
    >
      <div>
        <input placeholder="martarossi@gmail.com" class="text-sm w-[100%]" v-model="email" />
        <div class="border-[0.2px]"></div>
      </div>
      <div>
        <input placeholder="Password..." type="password" class="text-sm w-[100%]" v-model="pw" />
        <div class="border-[0.2px]"></div>
      </div>
      <a
        class="text-xs text-[#2b2b2b] text-center text-pretty"
        @click="
          () => {
            resetPasswordPanelOpened = true
            loginPanelOpened = false
          }
        "
        >Password dimenticata? Clicca qui</a
      >
      <button
        @click="
          () => {
            if (email !== '' && pw !== '') {
              login(email, pw)
            }
            loginPanelOpened = false
          }
        "
        class="border self-center text-white bg-black rounded-full py-2 w-[6em] text-sm"
      >
        Conferma
      </button>
      <p v-if="errors !== undefined" class="text-center font-fanwood text-red-800 font-bold">
        {{ errors.issues[0].message }}
      </p>
      <p
        v-if="session !== undefined && session.result === false"
        class="text-center font-fanwood text-red-800 font-bold"
      >
        {{ session.description }}
      </p>
    </div>
  </div>
</template>
