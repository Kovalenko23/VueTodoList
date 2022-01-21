export default {
    actions: {
        async loadUsers(ctx) {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const users = await res.json();
         ctx.commit('updateUsers',users )
        }
    },
    mutations: {
        updateUsers(state, users) {
            state.users = users
        }
    },
    state: {
        posts: []
    },
    getters: {
        allUsers(state) {
            return state.posts
        }
    },
}