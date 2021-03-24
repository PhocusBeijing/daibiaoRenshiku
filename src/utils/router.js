import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/apps/Main/router.js'
import Login from '@/apps/Login/router.js'
import Errorpage from '@/apps/Error/router.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/welcome'
    }, {
      path: '*',
      redirect: '/error'
    },
    Login,
    Main,
    Errorpage
  ]
})
