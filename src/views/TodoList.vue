<template>
  <div class="TodoList">
  <div class="tabs">
    <span
      class="tab"
      :class="{ activeTab: selectedTab === tab }"
      v-for="(tab, index) in tabs"
      :key="index"
      @click="selectedTab = tab"
      >{{ tab }}</span
    >
  </div>
  <div class="HomeTodo" v-show="selectedTab === 'Home Tasks'">
    <TodoList :todos="todos" @remove-todo="removeTodo" />
    <AddTodo @add-todo="AddTodo" />
  </div>

  <div class="WorkTodo" v-show="selectedTab === 'Work Tasks'">
    <TodoListWork :todosWork="todosWork" @remove-todo="removeTodoWork" />
    <AddTodo @add-todo="AddTodoWork" />
  </div>
  </div>
</template>

<script>
import TodoList from "../components/TodoList.vue";
import AddTodo from "../components/AddTodo.vue";
import TodoControl from "../mixins/TodoControl";
import TodoListWork from "../components/TodoListWork.vue";
export default {
  data() {
    return {
      tabs: ["Home Tasks", "Work Tasks"],
      selectedTab: "Home Tasks",

      todos: [
        { id: 1, title: "create first task", completed: false },
        { id: 2, title: "create second task", completed: false },
        { id: 3, title: "create third task", completed: false },
      ],
      todosWork: [
        { id: 1, title: "create first task for Work", completed: false },
        { id: 2, title: "create second task for Work", completed: false },
        { id: 3, title: "create third task for Work", completed: false },
      ],
    };
  },
  name: "App",
  components: {
    TodoListWork,
    TodoList,
    AddTodo,
  },
  mixins: [TodoControl],
  methods: {
    // removeTodo(id){
    //   this.todos = this.todos.filter(t=> t.id !==id)
    // },
    // AddTodo(todo){
    //   this.todos.push(todo)
    // }
  },
};
</script>
<style>
.activeTab {
  transition: opacity 5s;
  text-decoration: underline;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #7df187;
  border: 1px solid #000000;
  font-size: 16px;
  line-height: 1.5;
  cursor: pointer;
  margin: 12px;
  top: 1px;
}
</style>