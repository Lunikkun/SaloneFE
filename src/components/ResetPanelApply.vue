<script setup lang="ts">
import { resetToken } from '@/stores/globals';
import { ref } from 'vue'
const pw = ref('')
const pw2 = ref('')

async function sendResetRequest(pw: string, pw2: string) {
  if (pw == pw2) {
    let result = await fetch('http://127.0.0.1:3000/reset-password-apply/'+resetToken.value, {
      mode: 'cors',
      credentials: 'include',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password:pw })
      //COSI NON VA
    })
    console.log(await JSON.parse(await result.text()))
  }
}
</script>
<template>
  <div class="bg-white text-black z-999 absolute w-[250px] rounded-2xl">
    <div
      class="flex flex-col align-middle justify-center space-y-4 px-6 mt-5 py-6 font-fanwood box-content"
    >
      <div>
        <input placeholder="Nuova password" class="text-sm w-[100%]" v-model="pw" />
        <div class="border-[0.2px]"></div>
      </div>
      <div>
        <input placeholder="Conferma nuova password" class="text-sm w-[100%]" v-model="pw2" />
        <div class="border-[0.2px]"></div>
      </div>
      <button
        @click="() => {sendResetRequest(pw, pw2)}"
        class="border self-center text-white bg-black rounded-full py-2 w-[6em] text-sm"
      >
        Conferma
      </button>
    </div>
  </div>
</template>
