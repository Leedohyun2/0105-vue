<template>
    <div>
      <h2>* v-on</h2>
      <p>Number : {{ number }}</p>
      <p><button @click="addNumber">값 증가</button></p>
      <!-- <p><button @click.prevent="addNumber">값 증가</button></p> -->
    </div>
</template>

<script>
export default {
  data(){
    return {
      number : 0
    }
  },
  methods: {
    addNumber(e){
      // e.preventDefault();
      this.number++
    }
  }
}
</script>