<script setup lang="ts">
import type Reservation from '@/interfaces/Reservation';

//data prenotazione l'ho definita come Date ma la conta come stringa
const {reservation}  = defineProps<{reservation : Reservation}>()
console.log(typeof reservation.data_prenotazione)
const dataora = new Date(reservation.data_prenotazione)
async function deleteReservation(id_to_delete:number) {
   await fetch("http://127.0.0.1:3000/user/annulla/"+id_to_delete,{credentials: 'include', method: 'post'})
}
</script>


<template>
    <div class="flex items-center justify-between w-full">
        <div class="font-bold text-xl">{{ reservation.service_name }} con {{ reservation.staff_name }}</div>
        <div class="font-bold text- xl">{{ dataora.toLocaleDateString() }} {{ dataora.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) }}</div>
        <button 
            class="border self-center bg-red-800 text-white rounded-full py-2 w-[6em] text-sm"
            @click="deleteReservation(reservation.id)"
        >
            Annulla
        </button>
    </div>
</template>