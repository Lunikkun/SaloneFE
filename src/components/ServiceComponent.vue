<script setup lang="ts">
const props = defineProps<{
  data: Service
  image?: string
}>()
</script>
<template>
  <div class="flex sm:flex-row flex-col justify-between w-full px-4">
    <div class="flex flex-row gap-x-8">
      <img src="/cut.png?url" class="xs:w-[10vw] h-[12vh] rounded-3xl hidden sm:flex" />
      <div class="flex flex-col gap-y-4">
        <div class="font-dmserif md:text-5xl  sm:text-4xl font-bold text-3xl">
          {{ props.data.nome }}
        </div>
        <div class="font-fanwood p-y-4 xs:text-sm text-wrap w-[60vw]">
          {{ data.descrizione }}
        </div>
      </div>
    </div>
    <button
      class="border self-center font-fanwood text-white bg-black rounded-full py-2 w-[12em] text-sm m-4"
    >
      PRENOTA
    </button>
  </div>
  <hr class="h-px my-8 w-full bg-gray-200 border-0 dark:bg-gray-700" />
</template>
