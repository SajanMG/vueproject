import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../views/Signup.vue'
import Home from '../views/Home.vue'
import Add from '../views/Add.vue'
import Update from '../views/Update.vue'
import Login from '../views/Login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/Add',
      name: 'Add',
      component: Add
    },
    {
      path: '/Update',
      name: 'Update',
      component: Update
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
   
  ]
})

export default router
