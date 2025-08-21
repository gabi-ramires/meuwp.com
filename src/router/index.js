import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import Consultoria from '../pages/consultoria/Consultoria.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/consultoria',
      name: 'consultoria',
      component: Consultoria
    }
  ],
})

export default router
