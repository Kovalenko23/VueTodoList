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
      layout: 'MainLayout'
    }
  },
  {
    path: '/UsersBase',
    name: 'UsersBase',
    component: () => import('../views/UsersBase'),
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
