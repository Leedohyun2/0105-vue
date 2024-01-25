<template>
    <div id="date">
      {{  date }}
    </div>

    <div id="date2">
      {{  date2 }}
    </div>
</template>

<script setup>
  const date2 = new Date()
</script>

<style>
  #date, #date2 {
    border: 3px solid teal;
    margin-bottom: 10px;
    padding: 20px
  }
</style>