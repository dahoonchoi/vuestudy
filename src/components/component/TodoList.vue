<template>
    <div >
            <template v-for="item in todolist" >
                <TodoItem v-bind:key="item.idx" 
                v-bind:todoitem="item"
                v-on:toggleDone="toggleDone" 
                v-on:deleteTodo="deleteTodo"
                v-on:editTodo="editTodo"
                v-on:lightTodo="lightTodo"
                />
            </template> 
    </div>  

</template>

<script>
    import TodoItem from "./TodoItem.vue"
    export default {
        name: "TodoList",
        components: {
            TodoItem
        },
        props: ["todolist"],
        methods: {
            toggleDone (no) {
                console.log(no)
                this.$emit("toggleDone", no)
            },
            deleteTodo (no) {
                this.$emit("deleteTodo",no)
            },
            editTodo (no) {
                this.$emit("editTodo",no)
            },
            lightTodo (no) {
                this.$emit("lightTodo", no)
                console.log(no)
            }
    

        },
    }
</script>

<style scoped>

</style>