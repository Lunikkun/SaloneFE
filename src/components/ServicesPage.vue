<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ServiceComponent from './ServiceComponent.vue';

const services = ref<Service[]>()
onMounted(async() => {
  let result = await fetch('http://127.0.0.1:3000/servizi', {
    mode: 'cors',
    credentials: 'include',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
    //COSI NON VA
  })

  services.value = await JSON.parse(await result.text())
})
</script>

<template>
  <div
    class="flex lg:flex-row xs:flex-col sm:flex-col sm:md:flex-col font-hubballi lg:justify-between items-center sm:md:mt-20 xs:space-y-8"
  >
    <ServiceComponent v-for="service in services" :data="service" :key="service.id">kvjy</ServiceComponent>
  </div>
</template>