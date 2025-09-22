<script setup lang="js">
  import { onBeforeMount, onMounted, ref } from 'vue';
  
  const songerList = ref([])

  onMounted(() => {
    fetch('https://mock.mengxuegu.com/mock/66585c4db462b81cb3916d3e/songer/songer', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      songerList.value = data.data
    })
  })    
  
const deleteSonger = (e) => {
    console.log(e);
    console.log(e.target.innerText);
    
    songerList.value = songerList.value.filter(item => item.name !== e.target.innerText)
  }
</script>

<template>
  <div>
    <ul @click="deleteSonger">
      <li v-for="(item, index) in songerList" :key="index" >{{ item.name }}</li>
    </ul>
  </div>
</template>

<style lang="css" scoped>

</style>
<!-- https://mock.mengxuegu.com/mock/66585c4db462b81cb3916d3e/songer/songer -->
