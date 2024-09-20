<script setup lang="ts">
import { resetPasswordPanelApplyOpened, resetToken } from '@/stores/globals'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
const pw = ref('')
const pw2 = ref('')
const errors = ref([''])
const success = ref('')
async function sendResetRequest(pw: string, pw2: string): Promise<boolean> {
  errors.value = []
  if (pw === pw2) {
    let result = await fetch('http://127.0.0.1:3000/reset-password-apply/' + resetToken.value, {
      mode: 'cors',
      credentials: 'include',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: pw })
      //COSI NON VA
    })
    if (result.status === 404) {
      errors.value.push(await result.text())
      return false
    } else if (result.status === 400) {
      let errorResult: ErrorRegistration = await JSON.parse(await result.text())
      errors.value = errorResult.error.issues.map((issue) => issue.message)
      return false
    } else if (result.status === 200) {
      success.value = 'Password aggiornata'
      return true
    }
    return false
  } else {
    errors.value.push('Le password non corrispondono')
    return false
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
      <div class="flex flex-row justify-evenly">
        <button
          @click="
            async () => {
              let canClose: boolean = await sendResetRequest(pw, pw2)
            }
          "
          class="border self-center text-white bg-black rounded-full py-2 w-[6em] text-sm"
        >
          Conferma
        </button>
        <RouterLink to="/">
          <button
            @click="
              () => {
                resetPasswordPanelApplyOpened = false
                $route.params.token = ''
              }
            "
            class="border self-center text-white bg-black rounded-full py-2 w-[6em] text-sm"
          >
            Chiudi
          </button>
        </RouterLink>
      </div>
      <div v-for="(err, i) in errors" :key="i" class="text-sm text-red-500">{{ err }}</div>
      <div v-if="success" class="text-sm green-red-500">{{ success }}</div>
    </div>
  </div>
</template>
