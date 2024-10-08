<script setup lang="ts">
const props = defineProps<{
  data: Service
  image?: string
}>()
</script>
<template>
  <div class="flex flex-row justify-between w-full px-4">
    <div class="flex flex-row">
      <img src="/long.webp?url" class="w-[15vw] h-[20vh] rounded-full" />
      <div class="flex flex-col">
        <div class="font-dmserif text-6xl font-bold">
          {{ props.data.nome }}
        </div>
        <div class="font-fanwood p-y-4">
          {{ data.descrizione }}
        </div>
      </div>
    </div>
    <button
      class="border self-center font-fanwood text-white bg-black rounded-full py-2 w-[6em] text-sm"
    >
      PRENOTA
    </button>
  </div>
  <hr class="h-px my-8 w-full bg-gray-200 border-0 dark:bg-gray-700" />
</template>
