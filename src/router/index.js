import Vue from 'vue'
import Router from 'vue-router'

import Forsida from '@/components/Forsida'
import Upplysingar from '@/components/Upplysingar'
import Skrainn from '@/components/Skrainn'
import ErrorPage from '@/components/Errorpage'

Vue.use(Router)

export default new Router({
  routes: [
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
      path: '*',
      component: ErrorPage
    }
  ]
})
