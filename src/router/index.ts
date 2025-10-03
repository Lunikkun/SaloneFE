import PrivateArea from '@/components/PrivateArea.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ServiziSalone from '../components/ServicesPage.vue'
import ChiSono from '@/components/ChiSono.vue'
import HomePage from '@/components/HomePage.vue'
import { session, loginPanelOpened } from '@/stores/globals'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { requiresAuth: false }
    },
    {
      path: '/:token',
      name: 'homePasswordReset',
      component: HomePage,
      meta: { requiresAuth: false }
    },
    {
      path: '/servizi',
      name: 'services',
      component: ServiziSalone,
      meta: { requiresAuth: false }
    },
    {
      path: '/chisono',
      name: 'chisono',
      component: ChiSono,
      meta: { requiresAuth: false }
    },
    {
      path: '/areaprivata',
      name: 'areaprivata',
      component: PrivateArea,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to) => {
  // se la rotta richiede autenticazione ma non abbiamo sessione, reindirizza a home
  const requiresAuth = to.meta?.requiresAuth === true
  if (requiresAuth && !session.value) {
    // apri il pannello di login (opzionale) e poi redirigi
    loginPanelOpened.value = true
    return { name: 'home' }
  }
  return true
})

export default router
