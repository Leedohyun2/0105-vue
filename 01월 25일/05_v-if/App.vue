<template>
    <div>
      <h2>* v-if</h2>
      <p>Number : {{ number }}</p>
      <p v-if="number < 5">숫자가 5보다 작습니다.</p>
      <p v-else>숫자가 5와 같거나 큽니다.</p>
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