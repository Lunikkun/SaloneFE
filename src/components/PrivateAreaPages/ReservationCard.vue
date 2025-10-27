<script setup lang="ts">
import type Reservation from '@/interfaces/Reservation';

const data = defineProps<Reservation>()
</script>


<template>
    <div>{{data.id}}</div>
</template>