import { createRouter, createWebHistory } from 'vue-router'
import type { Router, RouterOptions } from 'vue-router'

const routerOptions: RouterOptions = {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Root',
      component: () => import('@/App.vue')

    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      redirect(): string {
        return '/'
      }
    }
  ]
}

const router: Router = createRouter(routerOptions)

export default router
