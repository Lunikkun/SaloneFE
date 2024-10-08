<script setup lang="ts">
const props = defineProps<{
    data: Service
}>()
</script>
<template>
    <div>
        {{ props.data.id }}
    </div>
</template>