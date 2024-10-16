import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { requiresAuth: true } // 添加 meta 属性
  },
  {
    path: '/network',
    name: 'network',
    component: () => import('@/views/NetworkView.vue'),
    meta: { requiresAuth: true } // 添加 meta 属性
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/views/NewsView.vue'),
    meta: { requiresAuth: true } // 添加 meta 属性
  },
  {
    path: '/company',
    name: 'Company',
    component: () => import('@/views/CompanyView.vue'),
    meta: { requiresAuth: true } // 添加 meta 属性
  },
  {
    path: '/social',
    name: 'Social',
    component: () => import('@/views/SocialView.vue'),
    meta: { requiresAuth: true } // 添加 meta 属性
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;