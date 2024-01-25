<template>
    <div>
      <h2>* v-on</h2>
      <p>Number : {{ number }}</p>
      <p><button @click="addNumber">값 증가</button></p>
    </div>
</template>

<script setup>
import { ref } from "vue"

const number = ref(0)
const addNumber = () => {
  number.value++
}
</script>