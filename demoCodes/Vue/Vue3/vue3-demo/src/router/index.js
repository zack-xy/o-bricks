import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('@/pages/Home.vue') },
    { path: '/signatureBoard', component: () => import('@/pages/SignatureBoard.vue')  },
  ]
})

export default router
