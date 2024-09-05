<script setup lang="ts">
import { resetPasswordPanelOpened } from '@/stores/globals';
import { ref } from 'vue'

let email = ref('')

async function reset(mail: String) {

  let result = await fetch('http://127.0.0.1:3000/reset-password', {
    mode: 'cors',
    credentials : 'include',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: mail }),
    //COSI NON VA
  })

}
</script>
<template>
  <div  class="bg-white text-black z-999 absolute w-[250px] rounded-2xl">
    <div
      class="flex flex-col align-middle justify-center space-y-4 px-6 mt-5 py-6 font-fanwood box-content"
    >
      <div>
        <input placeholder="martarossi@gmail.com" class="text-sm w-[100%]" v-model="email" />
        <div class="border-[0.2px]"></div>
      </div>
      <button
        @click="() => {reset(email);resetPasswordPanelOpened=false}"
        class="border self-center text-white bg-black rounded-full py-2 w-[6em] text-sm"
      >
        Conferma
      </button>
    </div>
  </div>
</template>
