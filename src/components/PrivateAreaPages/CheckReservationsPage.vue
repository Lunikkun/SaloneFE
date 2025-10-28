<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ReservationCard from './ReservationCard.vue';
import type Reservation from '@/interfaces/Reservation';

const userReservation = ref<Reservation[]>()
let result
onMounted(async()=>{
    let data = await fetch("http://127.0.0.1:3000/user/prenotazioniutente", {credentials:'include'})
    userReservation.value = await data.json()
    console.log(result)
})
</script>
<template>
    <div class="flex flex-col justify-evenly items-start">
        <div :key="elem.id" v-for="elem in userReservation">
            <ReservationCard :reservation="elem"/>
        </div>
    </div>
</template>
