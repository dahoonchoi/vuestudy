<template>
    <div>
        <b-list-group style="width:60% ;margin-left:20%; " >
        <b-list-group-item variant="secondary"  v-bind:class="{done: todoitem.done , lightTodo: todoitem.lightTodo}">{{todoitem.todo}}
           <div style="float:right">
            <b-btn v-b-modal="`modal${todoitem.idx}`">edit</b-btn>
            <b-btn @click="toggleHandler">check</b-btn>
            <b-btn @click="deleteHandler">delet</b-btn> 
            <b-btn @click="importantHandler">important</b-btn> 
           </div>

            <b-modal :id="`modal${todoitem.idx}`" centered title=" Todolist ">
                <input type="text" v-model="todoitem.todo">
            </b-modal>
        </b-list-group-item>

        </b-list-group>

       </div>
       


</template>

<script>
    export default {
        name: 'TodoItem',
        props: ["todoitem"],
        methods: {
            toggleHandler () {
               this.$emit("toggleDone", this.todoitem.idx);
               console.log(this.todoitem.done)
            },
            deleteHandler () {
                this.$emit("deleteTodo", this.todoitem.idx)
            },
            editHandler () {
                this.$emit("editTodo", this.todoitem.idx)

            },
            importantHandler () {
                this.$emit("lightTodo", this.todoitem.idx)
                console.log(this.todoitem.lightTodo)
            }
        }
    }
</script>

<style scoped>
.done{
    text-decoration-line: line-through
}
.lightTodo{
    background-color: aquamarine
}

</style>


