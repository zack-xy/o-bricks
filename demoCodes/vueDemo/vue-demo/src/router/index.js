import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/editableDivPage',
    component: () => import('@/views/editableDivPage')
  },
  {
    path: '/myHomePage',
    component: () => import('@/views/myHomePage'),
    children: [
      {
        path: "/myHomePage/info",
        component: { render (h) { return h('div', 'info页面') } }
      }
    ]
  },
  {
    path: '/betterRenderTable',
    component: () => import('@/views/betterRenderTable')
  },
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router