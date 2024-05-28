import { createRouter, createWebHistory } from 'vue-router'
import RegisterPage from '../Modules/Register/RegisterPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../Modules/HomePage/HomePage.vue')
      
    },
  ]
})

export default router
