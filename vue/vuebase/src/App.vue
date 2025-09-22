<!-- 一般使用 reactive 定义响应式对象, ref 定义响应式原始类型 -->
<script setup lang="ts">
  import { ref, reactive } from 'vue'
  // let count = ref(0) // 响应式变量
  const state = reactive({
    count: 0,
    age: 18,
    name: '张三',
  })

  const handleAdd = () => {
    console.log(state.count)
    state.count++
    state.age++
  }

  const flag = ref(false)
  const changeColor = () => {
    flag.value = !flag.value
  }

  const list = ref(['html', 'css', 'js'])

  const show = ref(true)

  const msg = ref('hello')

</script>

<template>
  <div>
    <h1>{{ state.count }} -- {{ state.age }}</h1>
    <button @click="handleAdd">add</button>
  </div>

  <div>
    <h2 :class="{'red': flag}" @click="changeColor">钟总嘎嘎帅</h2>
  </div>

  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>

  <div>
    <h2 v-show="show">hello</h2>
    <button @click="show = !show">visible</button>
  </div>

  <div>
    <input type="text" v-model="msg">
    <h3>{{ msg }}</h3>
  </div>
</template>

<style lang="css" scoped>
  .red {
    color: red;
  }
</style>