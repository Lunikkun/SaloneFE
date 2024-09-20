import { createRouter, createWebHistory } from 'vue-router'
import ServiziSalone from '../components/ServicesPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('../views/viewView.vue')
    },
    {
      path: '/:token',
      name: 'homePasswordReset',
      component: ()=>import('../components/ResetPanelApply.vue'),     
    },
    {
      path: '/servizi',
      name: 'services',
      component: ServiziSalone,   
    },
  ]
})

export default router
