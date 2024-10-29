<script setup lang="ts">
import { session } from '@/stores/globals'
function convertToLocalDate(isoDate: Date | undefined | null) {
  if(isoDate !== undefined && isoDate!== null){
    let _date = new Date(isoDate).toLocaleDateString()
    return _date
  }
  return "Qualcosa è andato storto!"
}
</script>
<template>
  <div class="flex sm:flex-row flex-col justify-around items-center w-full font-fanwood">
    <div class="text-lg" v-if="session?.userData?.id !== undefined">
      <div class="text-clip">{{ session?.userData?.nome[0].toUpperCase() + session?.userData?.nome.slice(1) }}</div>
      <div>
        {{ session?.userData?.cognome[0].toUpperCase() + session?.userData?.cognome.slice(1) }}
      </div>
    </div>
    <div class="border border-black sm:h-[40vh] sm:w-auto w-[80vw]"></div>
    <div class="flex flex-col justify-evenly h-[34vh]">
      <p class="text-3xl">Informazioni Personali</p>
      <div class="flex justify-between border-b-[.5px] border-black">
        <div>Nome</div>
        <div>{{ session?.userData?.nome }}</div>
      </div>

      <div class="flex justify-between border-b-[.5px] border-black">
        <div>Cognome</div>
        <div>{{ session?.userData?.cognome }}</div>
      </div>

      <div class="flex justify-between border-b-[.5px] border-black">
        <div>Email</div>
        <div>{{ session?.userData?.mail }}</div>
      </div>

      <div
        v-if="session?.userData?.gender === 'Male'"
        class="self-center text-black bg-[#8094FB] rounded-full py-2 w-[6em] text-sm"
      >
        {{ session?.userData?.gender }}
      </div>
      <div
        v-else
        class="self-center text-black bg-[#F7B6E1] text-center rounded-full py-2 w-full text-sm"
      >
        {{ session?.userData?.gender }}
      </div>
      <div class="flex justify-between border-b-[.5px] border-black">
        <div>Data di Iscrizione</div>
        <div>{{ convertToLocalDate(session?.userData?.creationDate) }}</div>
      </div>
    </div>
  </div>
</template>
