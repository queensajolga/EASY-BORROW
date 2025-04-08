import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import RenteeDashboardView from '@/views/RenteeDashboardView.vue'
import RenterDashboardView from '@/views/RenterDashboardView.vue'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/renteedashboard',
      name: 'renteedashboard',
      component: RenteeDashboardView,
    },
    {
      path: '/renterdashboard',
      name: 'renterdashboard',
      component: RenterDashboardView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
  ],
})

export default router
