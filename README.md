상태 고민으로 todoList에서 중요한 일정이 있어야 한다고 생각해서 
Todolight로 리스트의 background-color를 넣어주었습니다.
또한 edit를 생각하는 중 v-model이라는 양방향을 생각하여 바로 수정을 가능하도록 추가 했습니다.
//Todoitem.vue code

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

디자인도 어느정도 본다고 생각해서  더 꾸밀수 없을 거 같아서 배경에 이미지를 넣어서 좀 더 디자인을 추가?... 하였습니다.
