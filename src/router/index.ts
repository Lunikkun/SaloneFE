import  PrivateArea  from '@/components/PrivateArea.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ServiziSalone from '../components/ServicesPage.vue'
import ChiSono from '@/components/ChiSono.vue'
import HomePage from '@/components/HomePage.vue'
import ResetPanelApply from '@/components/ResetPanelApply.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/:token',
      name: 'homePasswordReset',
      component: HomePage,     
    },
    {
      path: '/servizi',
      name: 'services',
      component: ServiziSalone,   
    },
    {
      path: '/chisono',
      name: 'chisono',
      component: ChiSono,   
    },
    {
      path: '/areaprivata',
      name: 'areaprivata',
      component: PrivateArea,   
    },
  ]
})

export default router
