<template>
  <div>
    <ul class='tasks'>
      <TodoItem
        v-for="(todo, i) of todos"
        :todo="todo"
        :index="i"
        :key="todo"
        @remove-todo="removeTodo"
      />
    </ul>
  </div>
</template>


<script>
import TodoItem from "./TodoItem.vue";

export default {
  props: ["todos"],
  components: { TodoItem },

  methods: {
    removeTodo(id) {
      this.$emit("removeTodo", id);
    },
  },
};
</script>

<style>

.tasks{
  display:flex;
  
}
</style>