import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import Consultoria from '../pages/consultoria/Consultoria.vue'
import CriarSiteGratis from '../pages/criar-site-gratis/CriarSiteGratis.vue'
import Onboarding from '../pages/onboarding/Onboarding.vue'

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
    },
    {
      path: '/criar-site-gratis',
      name: 'criar-site-gratis',
      component: CriarSiteGratis
    },
    {
      path: '/onboarding',
      name: 'onboarding',
      component: Onboarding
    }
  ],
})

export default router
