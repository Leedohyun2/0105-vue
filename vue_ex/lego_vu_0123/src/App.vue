<template>
  <div id="app">
    <h1>{{ homeTitle }}</h1>
    <button @click="incNum++">click</button>
    <div>
      <lego_header></lego_header>
    </div>
  </div>
</template>

<script>
import lego_header from './components/lego_header.vue'

export default {
  components: {
    lego_header,
  },
  data() {
    return {
      homeTitle: "레고헤더",
      incNum: 1,
    };
  },
};
</script>

<style>
</style>
