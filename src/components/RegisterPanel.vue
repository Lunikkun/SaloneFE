<script setup lang="ts">
import { registerPanelOpened } from '@/stores/globals'
import { ref, watch } from 'vue'

const email = ref('')
const pw = ref('')
const pw2 = ref('')
const nome = ref('')
const cognome = ref('')
const gender = ref(false)
watch(gender, ()=>{console.log(gender.value)})
async function register(
  email: string,
  nome: string,
  cognome: string,
  pw: string,
  pw2: string,
  gender: boolean
) {
  console.log(gender);
  if (pw === pw2) {
    let result = await fetch('http://127.0.0.1:3000/register', {
      mode: 'cors',
      credentials: 'include',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, nome, cognome, password:pw, isMale:gender })
    })
    console.log(result)
  }
}
</script>

<template>
  <div class="bg-white text-black z-999 absolute w-[200px] rounded-2xl">
    <div
      class="flex flex-col align-middle justify-center space-y-4 px-6 mt-5 py-6 font-fanwood box-content"
    >
      <div>
        <input placeholder="Marta" class="text-sm w-[100%]" v-model="nome" />
        <div class="border-[0.2px]"></div>
      </div>
      <div>
        <input placeholder="Rossi" class="text-sm w-[100%]" v-model="cognome" />
        <div class="border-[0.2px]"></div>
      </div>
      <div>
        <input placeholder="martarossi@gmail.com" class="text-sm w-[100%]" v-model="email" />
        <div class="border-[0.2px]"></div>
      </div>
      <div>
        <input placeholder="Password..." type="password" class="text-sm w-[100%]" v-model="pw" />
        <div class="border-[0.2px]"></div>
      </div>
      <div>
        <input
          placeholder="Conferma password..."
          type="password"
          class="text-sm w-[100%]"
          v-model="pw2"
        />
        <div class="border-[0.2px]"></div>
      </div>
      <div class="flex flex-row justify-evenly text-sm w-[100%] font-fanwood text-[#252525]">
        <input type="radio" v-model="gender" name="gender" v-bind:value="true"/>
        <p>Maschio</p>
        <input type="radio" v-model="gender" name="gender" v-bind:value="false"/>
        <p>Femmina</p>
      </div>
      <button
        @click="
          () => {
            registerPanelOpened = false
            if (email !== '' && nome !== '' && pw !== '' && pw2 !== '')
              register(email, nome, cognome, pw, pw2, gender)
          }
        "
        class="border self-center text-white bg-black rounded-full py-2 w-[6em] text-sm"
      >
        Conferma
      </button>
    </div>
  </div>
</template>
