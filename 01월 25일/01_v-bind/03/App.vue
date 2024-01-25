<template>
    <div>
      <h2>* v-bind</h2>
      <p>텍스트 변경하기</p>
      <p><input type="text" v-bind:value="vbind.id"></p>
      <p>입력된 값 : {{ vbind.id }}</p>
      <p><button @click="changeText">텍스트 변경</button></p>
    </div>
</template>

<script>
import { reactive } from 'vue';

export default { 
  setup() {
    // const vbind = ["aa", "bb", "cc"];
    const vbind = reactive({
      id: 1
    });
    const changeText = () => {
      vbind.id = 2;
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