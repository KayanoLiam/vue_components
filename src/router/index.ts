import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/LoginRegister.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
