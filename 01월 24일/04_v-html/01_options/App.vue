<template>
    <div v-text="vhtml"></div>
    <div v-html="vhtml"></div>
</template>

<script>
 export default {
  data(){
    return {
      vhtml: "<i>Options API Text!!!</i>"
    }
  }
 }
</script>

<style>
  div div {
    border: 3px solid teal;
    margin-bottom: 10px;
    padding: 20px
  }
</style>