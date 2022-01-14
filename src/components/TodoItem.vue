<template>
  <li>
    <span :class="{done: todo.completed}">
        <input type="checkbox" @change="todo.completed= !todo.completed" >
        <strong>{{index +1}}</strong>
        {{todo.title}}
    </span>
    <button @click="$emit('remove-todo', todo.id)"> &times;</button>
  </li>
</template>

<script>
export default {
props:{
    todo:{
        type:Object,
        require: true  //если todo не передан, комонент не работает
    },
    index: Number
},
}
</script>

}
<style>
.done{ 
    text-decoration: line-through;
}
</style>