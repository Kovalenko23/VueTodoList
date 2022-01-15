export default {
    methods: {
        removeTodo(id) {
            this.todos = this.todos.filter(t => t.id !== id)

        },

        AddTodo(todo) {
            this.todos.push(todo)
        },
        
        AddTodoWork(todo) {
            this.todosWork.push(todo)
        },
        onSubmit() {                            //addTodo Loghic
            console.log("Submit", this.title)
            if (this.title.trim()) {
                const newTodo = {
                    id: Date.now(),
                    title: this.title,
                    complited: false
                }
                this.$emit('add-todo', newTodo)
                this.title = ""
            }
        },
        removeTodo(id) {
            this.$emit("removeTodo", id);
            this.todos = this.todos.filter(t=> t.id !==id)
        },
        removeTodoWork(id) {
            this.$emit("removeTodo", id);
            this.todosWork = this.todosWork.filter(t=> t.id !==id)
        },
    }
}