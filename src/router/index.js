import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/home/HomePage.vue'
import Consultoria from '../pages/consultoria/Consultoria.vue'
import CriarSiteGratis from '../pages/criar-site-gratis/CriarSiteGratis.vue'
import Onboarding from '../pages/onboarding/Onboarding.vue'
import SobrePage from '../pages/sobre/SobrePage.vue'
import TermosDeUsoPage from '../pages/termos/TermosDeUsoPage.vue'
import PrivacidadePage from '../pages/privacidade/PrivacidadePage.vue'
import PlansPage from '../pages/planos/PlansPage.vue' // Importar a nova página de Planos

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: 'MeuWP — Criador de Sites WordPress simples',
        description: 'Crie site grátis em minutos com o MeuWP. Modelos prontos por profissão, SSL e backup inclusos. Teste grátis, sem cartão.',
        robots: 'index, follow'
      }
    },
    {
      path: '/consultoria',
      name: 'consultoria',
      component: Consultoria,
      meta: {
        title: 'Consultoria — MeuWP',
        description: 'Consultoria para presença digital: site, SEO e performance com especialistas do MeuWP.',
        robots: 'index, follow'
      }
    },
    {
      path: '/criar-site-gratis',
      name: 'criar-site-gratis',
      component: CriarSiteGratis,
      meta: {
        title: 'Criar site grátis | MeuWP — seu site profissional em 5 minutos',
        description: 'Crie site grátis agora com o MeuWP. Sem cartão, modelos prontos, site rápido e seguro. Publique em 5 minutos.',
        robots: 'index, follow'
      }
    },
    {
      path: '/onboarding',
      name: 'onboarding',
      component: Onboarding,
      meta: {
        title: 'Começar — MeuWP',
        description: 'Comece seu site gratuitamente com o MeuWP.',
        robots: 'noindex, nofollow'
      }
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: SobrePage,
      meta: {
        title: 'Sobre — MeuWP',
        description: 'Conheça o MeuWP: criador de sites WordPress simples, rápido e sem complicação.',
        robots: 'index, follow'
      }
    },
    {
      path: '/termos',
      name: 'termos',
      component: TermosDeUsoPage,
      meta: {
        title: 'Termos de Uso — MeuWP',
        description: 'Termos de uso do MeuWP.',
        robots: 'noindex, follow'
      }
    },
    {
      path: '/privacidade',
      name: 'privacidade',
      component: PrivacidadePage,
      meta: {
        title: 'Privacidade — MeuWP',
        description: 'Política de privacidade do MeuWP.',
        robots: 'noindex, follow'
      }
    },
    {
      path: '/planos', // Adicionar a nova rota para a página de planos
      name: 'planos',
      component: PlansPage,
      meta: {
        title: 'Planos — MeuWP',
        description: 'Planos do MeuWP: comece grátis e faça upgrade quando quiser.',
        robots: 'index, follow'
      }
    }
  ],
})

// Atualiza título, description, canonical e robots após cada navegação
router.afterEach((to) => {
  const defaultTitle = 'MeuWP — Criador de Sites WordPress simples'
  const defaultDescription = 'Crie site grátis em minutos com o MeuWP. Modelos prontos por profissão, SSL e backup inclusos. Teste grátis, sem cartão.'
  const defaultRobots = 'index, follow'

  document.title = (to.meta && to.meta.title) || defaultTitle

  const descriptionTag = document.querySelector('meta[name="description"]')
  if (descriptionTag) {
    descriptionTag.setAttribute('content', (to.meta && to.meta.description) || defaultDescription)
  } else {
    const meta = document.createElement('meta')
    meta.name = 'description'
    meta.content = (to.meta && to.meta.description) || defaultDescription
    document.head.appendChild(meta)
  }

  const robotsTag = document.querySelector('meta[name="robots"]')
  if (robotsTag) {
    robotsTag.setAttribute('content', (to.meta && to.meta.robots) || defaultRobots)
  } else {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = (to.meta && to.meta.robots) || defaultRobots
    document.head.appendChild(meta)
  }

  const baseUrl = 'https://meuwp.com'
  const canonicalHref = `${baseUrl}${to.path || '/'}${to.hash || ''}`
  let canonicalLink = document.querySelector('link[rel="canonical"]')
  if (!canonicalLink) {
    canonicalLink = document.createElement('link')
    canonicalLink.setAttribute('rel', 'canonical')
    document.head.appendChild(canonicalLink)
  }
  canonicalLink.setAttribute('href', canonicalHref)
})

export default router
