<script setup>
  import {ref,onMounted} from 'vue'
  import axios from '@/utils/axios.js'

  defineProps({
    msg: String
  })

  const count = ref(0)
  onMounted(()=>{
    axios.get('/')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  })


</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <button type="button">我是新增内容</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
  a {
    color: #42b983;
  }
</style>
