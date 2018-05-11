import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import Tousu from '../components/Tousu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/tousu',
      name:'Tousu',
      component: Tousu
    }
  ]
})
