import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/pages/index'
import vote from '@/components/pages/vote'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/vote',
      name: 'vote',
      component: vote
    }
  ]
})
