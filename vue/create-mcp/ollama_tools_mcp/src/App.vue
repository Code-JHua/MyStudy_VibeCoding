<script setup lang="js">
import { ref } from 'vue'

const message = ref('请帮我列出当前目录下的文件')
const status = ref('')
const Content = ref('')

const sendMessage = async () => {
  status.value = '思考中...'
  Content.value = message.value
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: message.value })
  })
  const data = await res.json()
  status.value = '思考完成'
  Content.value = data.reply
}
</script>

<template>
  <div>
    <label for="message">
      请输入你的问题：
      <input type="text" id="message" v-model="message" />
      <button @click="sendMessage">发送</button>
    </label>
  </div>
  <div>
    <div>{{ status }}</div>
    <div>
      <div>{{ Content }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>