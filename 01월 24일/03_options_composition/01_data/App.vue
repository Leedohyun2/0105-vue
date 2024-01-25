<template>
    <div id="date">
      {{  date }}
    </div>

    <div id="date2">
      {{  date2 }}
    </div>
</template>

<script>
export default {
  // options API
  data(){
    return {
      date: new Date()
    }
  },

  // Composition API
  setup(){
    const date2 = new Date()
    return { date2 }
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