<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ReservationCard from './ReservationCard.vue';
import type Reservation from '@/interfaces/Reservation';

const userReservation = ref<Reservation[]>()
onMounted(async()=>{
    let data = await fetch("http://127.0.0.1:3000/user/prenotazioniutente", {credentials:'include'})
    userReservation.value = await data.json()
    console.log(userReservation)
})
</script>
<template>
    <div class="flex flex-col border-4 w-full h-full gap-y-2">
        <hr class="w-full border-2"/>
        <div>LISTA PRENOTAZIONI</div>
        <div :key="elem.id" v-for="elem in userReservation">
            <ReservationCard :reservation="elem"/>
        </div>
    </div>
</template>
