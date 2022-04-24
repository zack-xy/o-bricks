import Vue from 'vue'
import ZVueRouter from './z-vue-router'

Vue.use(ZVueRouter)

const routes = [
  {
    path: '/editableDivPage',
    component: () => import('@/views/editableDivPage')
  },
  {
    path: '/myHomePage',
    component: () => import('@/views/myHomePage')
  },
  {
    path: '/betterRenderTable',
    component: () => import('@/views/betterRenderTable')
  },
]

const router = new ZVueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router