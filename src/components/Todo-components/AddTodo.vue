<template>
<form @submit.prevent="onSubmit">
  <input type="text" v-model="title">
  <button type="submit">Create</button>
</form>
</template>

<script>
import TodoControl from "../../mixins/TodoControl"
export default {
    data(){
        return{
            title: ''
        }
    },
    mixins:[TodoControl],
methods:{}
}
</script>

<style>

</style>n