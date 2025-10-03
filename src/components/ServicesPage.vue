<script setup lang="ts">
import { onMounted } from 'vue'
import ServiceComponent from './ServiceComponent.vue'
import { servicesData } from '@/stores/globals'
import type { Service } from '@/interfaces/Service'

onMounted(async () => {
  let result = await fetch('http://127.0.0.1:3000/servizi', {
    mode: 'cors',
    credentials: 'include',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
    //COSI NON VA
  })
  servicesData.value = (await JSON.parse(await result.text())) as Service[]
})
</script>

<template>
  <div
    class="flex lg:flex-col xs:flex-col sm:flex-col sm:md:flex-col font-hubballi lg:justify-between items-start sm:md:mt-20 xs:space-y-8"
  >
    <ServiceComponent v-for="service in servicesData" :data="service" :key="service.id" />
  </div>
</template>
