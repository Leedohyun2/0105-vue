<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <h1>App Component</h1>
    <div>
      <HelloWorld msg="Child Component" />
    </div>
  </header>
</template>

<style scoped>
h1{
  color: tomato
}
</style>
