import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/apps/Home/router.js'
import Login from '@/apps/Login/router.js'
import Errorpage from '@/apps/Error/router.js'
import Contact from '@/apps/Contact/router.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '*',
      redirect: '/error'
    },
    Home,
    Login,
    Contact,
    Errorpage
  ]
})
