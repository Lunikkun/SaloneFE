<script setup lang="ts">
import { register } from '@/composables/fetch'
import { errors } from '@/stores/globals'
import { ref } from 'vue'

const email = ref('')
const pw = ref('')
const pw2 = ref('')
const nome = ref('')
const cognome = ref('')
const gender = ref(false)

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
        <input type="radio" v-model="gender" name="gender" v-bind:value="true" />
        <p>Maschio</p>
        <input type="radio" v-model="gender" name="gender" v-bind:value="false" />
        <p>Femmina</p>
      </div>
      <button
        @click="
          () => {
            if (email !== '' && nome !== '' && pw !== '' && pw2 !== '') {
              register(email, nome, cognome, pw, pw2, gender)
            }
          }
        "
        class="border self-center text-white bg-black rounded-full py-2 w-[6em] text-sm"
      >
        Conferma
      </button>
        <div v-for="err in errors" :key="err" class="text-sm text-red-500">{{ err }}</div>
    </div>
  </div>
</template>
