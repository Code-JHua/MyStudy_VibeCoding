<script setup lang="ts">
  import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onBeforeUpdate, onUpdated, ref } from 'vue';
  const h2Ref = ref(null)

  onBeforeMount(() => {
    console.log('onBeforeMount', h2Ref.value)
  })
  onMounted(() => {
    console.log('onMounted', h2Ref.value)
  })

</script>

<template>
  <div>
    <h2 ref="h2Ref">hello vue3</h2>
  </div>
</template>

<style lang="scss" scoped>

</style>