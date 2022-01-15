<template>
  <div>
    <ul>
      <TodoItem
        v-for="(todo, i) of todosWork"
        :todo="todo"
        :index="i"
        @remove-todo="removeTodo"
      />
    </ul>
  </div>
</template>


<script>
import TodoItem from "./TodoItem.vue";

export default {
  props: ["todosWork"],
  components: { TodoItem },

  methods: {
    removeTodo(id) {
      this.$emit("removeTodo", id);
    },
  },
};
</script>

<style>
</style>