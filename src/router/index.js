import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/components/Game'
import Explications from '@/components/Explications'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/explications',
      name: 'Explications',
      component: Explications
    }
  ]
})
