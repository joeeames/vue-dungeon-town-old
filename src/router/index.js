import Vue from 'vue'
import Router from 'vue-router'
import Town from '@/town/Town'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/town'
    },
    {
      path: '/town',
      name: 'Town',
      component: Town
    }
  ]
})
