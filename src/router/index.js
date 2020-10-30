import { createWebHistory, createRouter } from "vue-router";

import Forsida from '@/components/Forsida'
import Upplysingar from '@/components/Upplysingar'
import Skrainn from '@/components/Skrainn'
import ErrorPage from '@/components/Errorpage'

const routes = [
  {
    path: '/',
    name: 'Forsida',
    component: Forsida
  },
  {
    path: '/upplysingar',
    name: 'Upplysingar',
    component: Upplysingar
  },
  {
    path: '/skra-inn',
    name: 'Skra-inn',
    component: Skrainn
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: ErrorPage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;