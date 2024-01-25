<template>
    <div>
      <h2>* v-for</h2>
      <ol>
        <li v-for="item in items">{{ item }}</li>
      </ol>
    </div>
</template>

<script setup>
import { reactive } from "vue"

const items = reactive({
  1: '첫 번째 객체',
  2: '두 번째 객체',
  3: '세 번째 객체',
})
</script>