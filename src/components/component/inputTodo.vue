<template>
    <div style="margin-bottom:1%">
        <input type="text" v-model ="inputValue" id="input">
       <b-button @click="addHandler">추가</b-button>

    </div>

</template>

<script>
    export default {
        name: 'inputTodo',
        data() {
            return {
                inputValue: ""
            }
        },
        methods: {
            addHandler(e){
                this.$emit('addTodo', this.inputValue)
                this.inputValue = "";
            }
        }
    }
    
</script>

<style scoped>
    #input{
        width: 500px
    }
</style>