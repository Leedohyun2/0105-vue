<template>
    <div>
      <h2>* v-bind</h2>
      <p>텍스트 변경하기</p>
      <p><input type="text" v-bind:value="vbind"></p>
      <p>입력된 값 : {{ vbind }}</p>
    </div>
</template>

<script>
export default { 
  setup() {
    const vbind = 'TEXT';
    return {
      vbind
    }
  },
}
  
</script>

<style>

</style>