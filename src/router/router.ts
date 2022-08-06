import {
  createRouter,
  createWebHashHistory,
  Router,
  RouteRecordRaw,
  createWebHistory
} from 'vue-router'
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/pages/login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页',
      keepAlive: false,
      requireAuth: false
    },
    component: () => import('@/pages/home/index.vue')
  }
]

const router: Router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
