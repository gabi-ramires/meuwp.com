import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/home/HomePage.vue'
import Consultoria from '../pages/consultoria/Consultoria.vue'
import CriarSiteGratis from '../pages/criar-site-gratis/CriarSiteGratis.vue'
import Onboarding from '../pages/onboarding/Onboarding.vue'
import SobrePage from '../pages/sobre/SobrePage.vue'
import TermosDeUsoPage from '../pages/termos/TermosDeUsoPage.vue'
import PrivacidadePage from '../pages/privacidade/PrivacidadePage.vue'

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
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: SobrePage
    },
    {
      path: '/termos',
      name: 'termos',
      component: TermosDeUsoPage
    },
    {
      path: '/privacidade',
      name: 'privacidade',
      component: PrivacidadePage
    }
  ],
})

export default router
