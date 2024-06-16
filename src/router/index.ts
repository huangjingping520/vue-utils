import { createRouter, createWebHistory } from 'vue-router'
import type { Router, RouterOptions } from 'vue-router'

const routerOptions: RouterOptions = {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Root',
      component: () => import('@/pages/home/index.vue')

    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/pages/not-found/index.vue')
    },
    {
      path: '/catalogue',
      name: 'Catalogue',
      component: () => import('@/pages/catalogue/index.vue'),
      children: [
        {
          path: 'first',
          name: 'FirstCatalogue',
          component: () => import('@/pages/catalogue/first-catalogue.vue')
        },
        {
          path: 'second',
          name: 'SecondCatalogue',
          component: () => import('@/pages/catalogue/second-catalogue.vue')
        }
      ]
    }
  ]
}

const router: Router = createRouter(routerOptions)

export default router
