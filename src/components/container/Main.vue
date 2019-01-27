<template>
    <div>
        <inputTodo v-on:addTodo="addTodo"/>

        <TodoList  v-bind:todolist="todolist"
        v-on:toggleDone="toggleDone"
        v-on:deleteTodo="deleteTodo"
        v-on:editTodo="editTodo"
        v-on:lightTodo="lightTodo"
        >
        </TodoList>


       


    </div>
</template>

<script>
    import {
        TodoList,
        inputTodo
    } from '../component';

    export default {
        name: "Main",
        components: {
            TodoList,
            inputTodo
            
        },
        data () {
            return {
                todolist: [
                    {idx: 1, todo: "Vue.js 공부하기", done: true ,lightTodo: true},
                    {idx: 2, todo: "Vue Com 공부하기", done: false, lightTodo: false},
                    {idx: 3, todo: "Vue.js 공부하기1", done: false, lightTodo: false},
                    {idx: 4, todo: "Vue.js 공부하기2", done: false, lightTodo: false}
                ]
            }
        },
        methods: {
            addTodo(todo) {
                let newTodo = {idx: new Date().getTime(), todo: todo, done: false ,lightTodo: false}
                this.todolist.push(newTodo);
            },
            toggleDone(idx){
                let no = this.todolist.findIndex((item) => {
                    return item.idx === idx;
                });

                this.todolist[no].done = !this.todolist[no].done
            },
             deleteTodo(idx){
                let no = this.todolist.findIndex((item) => {
                    return item.idx === idx;
                });

                this.todolist.splice(no, 1)
            },

            editTodo(idx){
                let no = this.todolist.findIndex((item) => {
                    return item.idx === idx;
                });
            },

            lightTodo(idx){
                let no = this.todolist.findIndex((item) => {
                    return item.idx === idx;
                });

                this.todolist[no].lightTodo = !this.todolist[no].lightTodo
            },
                        
        }
    }


</script>

<style scoped>
   
</style>