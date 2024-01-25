<template>
    <HelloWorld></HelloWorld>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue';

  export default {
  data() {
    return {  }
  },

  components: {
    // HelloWorld: HelloWorld
    HelloWorld
  }
}
</script>

<style>
  #date, #date2 {
    border: 3px solid teal;
    margin-bottom: 10px;
    padding: 20px
  }
</style>