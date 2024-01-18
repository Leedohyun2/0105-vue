<template>
  <header>
    <button @click="onToggle">
      <i class="fa-solid fa-bars"></i>
    </button>
    <div v-show="toggle" class="toggle_menu">red</div>
    <div v-show="!toggle" class="toggle_menu">blue</div>
  </header>


  <div class="main_container">
    <h1>To-Do List</h1>
    <form class="d-flex" @submit="onSubmit">
      <div class="flex-grow-1 mr-2">
        <input class="form-control" type="text" v-model="todo" placeholder="할일을 입력하세요">
      </div>
      <div>
        <button class="btn btn-primary" type="submit" @click="onSubmit">Add</button>
      </div>
    </form>

    <div v-for="todo in todos" :key="todo.id" class="card mt-2">
      <div class="card-body p-2">
        {{ todo.subject }}
      </div>
    </div>

    <div class="card mt-2">
      <div class="card-body p-2">
        {{ todo.subject }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const toggle = ref(false);
    const todo = ref('');
    const todos = ref([
      { id: 1, subject: '휴대폰 사기' },
      { id: 2, subject: '장보기' },
    ]);

    const onSubmit = (e) => {
      // console.log(todo.value)
      e.preventDefault();
      todos.value.push({
        id: Date.now(),
        subject: todo.value
      });
    };

    const onToggle = () => {
      toggle.value = !toggle.value;
    }

    // const greeting= (name) => {
    //   return 'hello, ' + name;
    // }
    // const greet = greeting(name);

    // const updateName = () => {
    //    ref를 사용하면 변수값뒤에 .value를 붙여야함
    // }

    return {
      todo,
      onSubmit,
      todos,
      toggle,
      onToggle
    }
  }
}
</script>

<style>
header {
  background: skyblue;
}
</style>
