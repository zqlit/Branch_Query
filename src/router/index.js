import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/views/NewsView.vue')
  },
  {
    path: '/company',
    name: 'Company',
    component: () => import('@/views/CompanyView.vue')
  },
  {
    path: '/social',
    name: 'Social',
    component: () => import('@/views/SocialView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router