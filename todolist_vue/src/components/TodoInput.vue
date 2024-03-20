<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="fa-solid fa-plus"></i>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTodoItem: ""
        }
    },

    methods: {
        addTodo() {
            // 인풋 박스의 입력값이 있을때만 저장
            if (this.newTodoItem !== "") {
                // 인풋 박스에 입력된 텍스트의 앞뒤 공백 문자열 제거
                var value = this.newTodoItem && this.newTodoItem.trim();
                this.$emit('addTodo', value);
                // 로컬스토리지에 인풋값 저장
                // localStorage.setItem(value, value);
                // 인풋 박스의 입력값을 초기화
                this.clearInput();
            }
        },
        clearInput() {
            this.newTodoItem = '';
        }
    }
}
</script>

<style>
    input:focus {
        outline:none;
    }

    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }

    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }

    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }

    .addBtn {
        color: white;
        vertical-align: middle;
    }
</style>