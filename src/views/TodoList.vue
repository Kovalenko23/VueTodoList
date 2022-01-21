<template>
  <div class="container">
    <div class="top-frame" />
    <div class="TodoList">
      <ul class="nav-tabs">
        <li role="presentation" @click="currentTab = 'home'">
          <a>Home Tasks</a>
        </li>
        <li role="presentation" @click="currentTab = 'work'">
          <a>Work Tasks</a>
        </li>
      </ul>
      <div v-if="currentTab === 'home'">
        <TodoList :todos="todos" @remove-todo="removeTodo" />
        <AddTodo @add-todo="AddTodo" />
      </div>

      <div v-if="currentTab === 'work'">
        <TodoListWork :todosWork="todosWork" @remove-todo="removeTodoWork" />
        <AddTodo @add-todo="AddTodoWork" />
      </div>
    </div>
    <div class="bottom-frame" />
  </div>
</template>

<script>
import TodoList from "../components/Todo-components/TodoList.vue";
import AddTodo from "../components/Todo-components/AddTodo.vue";
import TodoControl from "../mixins/TodoControl";
import TodoListWork from "../components/Todo-components/TodoListWork.vue";
export default {
  data() {
    return {
      currentTab: "home",
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
  methods: {},
};
</script>
<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.top-frame {
  width: 35em;
  height: 2em;
  border: 2px solid red;
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
}
.bottom-frame {
  width: 35em;
  height: 2em;
  border: 2px solid red;
  border-radius: 0 0 50% 50% / 0 0 100% 100%;
}
.todo-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.TodoList {
  border: 2px solid;
  flex-direction: column;
  width: 35em;
  height: 50em;
}
.nav-tabs {
  width: 100px;
  height: 60px;
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