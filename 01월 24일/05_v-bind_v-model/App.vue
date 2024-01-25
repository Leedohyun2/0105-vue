<template>
    <div>
      <h2>* v-bind &amp; v-model</h2>
      <p>v-bind
        <input type="text" v-bind:value="vbind">
      </p>
      <p>v-model
        <input type="text" v-model="vbind">
      </p>
      <p>
        입력된 값 : {{ vbind }}
      </p>
    </div>
</template>

<script>
export default { 
  data() {
    return {
      vbind: "text"
    }
  },
}
  
</script>

<style>

</style>