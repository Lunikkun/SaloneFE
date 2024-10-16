<script setup lang="ts">
const props = defineProps<{serv:Service}>()
</script>
<template>
  <div>
    {{ props.serv.id }}
  </div>
</template>
