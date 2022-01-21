<template>
  <li class="items">
    <span :class="{done: todo.completed}">
        <input type="checkbox" @change="todo.completed= !todo.completed"  >
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
        require: true 
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
.items{
  border: 2px solid;
  border-radius: 7px;
  padding: 4px;
  margin: 5px;
  
  ;
}
</style>