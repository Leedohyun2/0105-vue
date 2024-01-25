<template>
    <div>
      <h2>* v-model</h2>
      <p>텍스트 변경하기</p>
      <p><input type="text" v-model="vmodel"></p>
      <p v-bind:title="vmodel">입력된 값 : {{ vmodel }}</p>
    </div>
</template>

<script>
import { ref } from 'vue';

export default { 
  setup() {
    const vmodel = ref('Hello, VueJS!');
    return {
      vmodel
    }
  },
}
  
</script>

<style>

</style>