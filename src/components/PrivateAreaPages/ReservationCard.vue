<script setup lang="ts">
import type Reservation from '@/interfaces/Reservation';
const {reservation}  = defineProps<{reservation : Reservation}>()

async function deleteReservation(id_to_delete:number) {
    const result = await fetch("http://127.0.0.1:3000/user/annulla/"+id_to_delete,{credentials: 'include', method: 'post'})
}
</script>


<template>
    <div class="flex justify-between items-center">
        <div class="font-bold text-2xl">{{ reservation.service_name }} con {{ reservation.staff_name }}</div>
        <div>{{ reservation.data_prenotazione }}</div>
        <button 
            class="border self-center bg-red-800 text-white rounded-full py-2 w-[6em] text-sm"
            @click="deleteReservation(reservation.id)"
        >
            Annulla
        </button>
    </div>
</template>