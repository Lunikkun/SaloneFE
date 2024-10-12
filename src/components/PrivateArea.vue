<script setup lang="ts">
import { session } from '@/stores/globals'
</script>
<template>
  <p v-if="session === undefined" class="font-hubballi text-6xl">LOGIN NON AVVENUTO</p>
  <div v-else
    class="flex border-2 md:flex-row xs:flex-col sm:flex-col sm:md:flex-col font-hubballi justify-between items-center "
  >
      <div class="flex flex-col gap-y-6 py-4">
        <div class="bg-white text-black text-xs text-center font-fanwood rounded-r-full h-auto">ACCOUNT</div>
        <div class="bg-white text-black text-xs text-center font-fanwood rounded-r-full h-auto">PRENOTA</div>
        <div class="bg-white text-black text-xs text-center font-fanwood rounded-r-full h-auto">LISTA PRENOTAZIONI</div>
        <div class="bg-white text-black text-xs text-center font-fanwood rounded-r-full h-auto">RECENSISCI</div>
      </div>
      <div>PANEL</div>
  </div>
</template>
