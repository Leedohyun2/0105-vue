<template>
    <div>
      <h2>* v-bind</h2>
      <p>텍스트 변경하기</p>
      <p><input type="text" v-bind:value="vbind"></p>
      <p>입력된 값 : {{ vbind }}</p>
      <p><button @click="changeText">텍스트 변경</button></p>
    </div>
</template>

<script>
import { ref } from 'vue';

export default { 
  setup() {
    const vbind = ref('TEXT');
    const changeText = () => {
      vbind.value = "Print TEXT"
    }
    return {
      vbind,
      changeText
    }
  },
}
  
</script>

<style>

</style>