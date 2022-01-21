import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/TodoList',
    name: 'TodoList',
    component: () => import('../views/TodoList.vue'),
    meta: {
      layout: 'todo'
    }
  },
  {
    path: '/UsersBase',
    name: 'UsersBase',
    component: () => import('../views/UsersBase'),
    meta: {
      layout: 'main'
    }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router