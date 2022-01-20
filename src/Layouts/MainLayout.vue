<template>
  
</template>

<script>
export default {

}
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