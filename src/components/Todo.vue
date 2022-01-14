<template>
  <TodoList
 :todos="todos"
 @remove-todo="removeTodo"
 />
 <AddTodo
 @add-todo="AddTodo"/>
</template>

<script>

import TodoList from "./components/TodoList.vue"
import AddTodo from "./components/AddTodo.vue"
export default {
  data(){
    return{
todos: [
{id:1, title: 'create first task', completed: false},
{id:2, title: 'create second task', completed: false},
{id:3, title: 'create third task', completed: false}


]
    }
  },
  name: 'App',
  components: {
 TodoList,
 AddTodo
  },
  methods:{
    removeTodo(id){
      this.todos = this.todos.filter(t=> t.id !==id)
    
    },

    AddTodo(todo){
      this.todos.push(todo)
    }
  }
}
</script>

<style>

</style>