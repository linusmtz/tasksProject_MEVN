import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthViews/AuthView.vue'

    //  component: () => import('../views/AboutView.vue')


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: AuthView
    }
  ]
})

export default router
