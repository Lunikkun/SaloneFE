import { createRouter, createWebHistory } from 'vue-router'


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
  ]
})

export default router
