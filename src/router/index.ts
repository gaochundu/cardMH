import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('GIS_USER_LOGIN_IDSTR') // 假设你使用 localStorage 存储 token 来判断用户是否登录
  if (to.name !== 'login' && !isAuthenticated) {
    // 如果用户未登录且要访问的不是登录页面，重定向到登录页面
    next({ name: 'login' })
  } else {
    // 否则继续导航
    next()
  }
})
export default router
