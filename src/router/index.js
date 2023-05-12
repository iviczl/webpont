import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from '../views/DashBoard.vue'
import Login from '../views/Login.vue'
import { useUserStore } from '../stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashBoard,
      meta: { authNeeded: true }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { authNeeded: false }
    }
  ]
})

router.beforeEach(async (to, from) => {
  if(to.name === 'login') { return true }

  if(to.meta.authNeeded && useUserStore().token) {
    return to
  }

  return false
})

export default router
