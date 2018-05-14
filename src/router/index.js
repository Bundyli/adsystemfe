import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import Tousu from '../components/Tousu'
import Tssb from '../components/Tssubmit'
import Tssc from '../components/Tssuccess'
import Share from '../components/Share'
import Root from '../components/Root'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Root',
    //   component: Root
    // },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/tousu',
      name:'Tousu',
      component: Tousu
    },
    {
      path:'/tssb',
      name:'Tssb',
      component: Tssb
    },
    {
      path:'/tssc',
      name:'Tssc',
      component: Tssc
    },
    {
      path:'/share',
      name:'Share',
      component: Share
    }
  ]
})
