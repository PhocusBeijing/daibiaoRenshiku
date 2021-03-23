// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './utils/store.js'
import router from './utils/router.js'
import * as common from './utils/common.js'
import * as http from './utils/http.js'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import 'mango-css'
Vue.use(Antd)
require('./utils/compos.js')
/* 注册HTTP方法 */
Object.keys(http).forEach(key => {
  Vue.prototype[key] = http[key]
})
/* 注册自定义方法 */
Object.keys(common).forEach(key => {
  Vue.prototype[key] = common[key]
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  created () {
    let that = this
    this.setWindowSize()
    window.onresize = function () {
      that.setWindowSize()
    }
  },
  methods: {
    setWindowSize () {
      let windowData = {
        w: this.size('innerWidth'),
        h: this.size('innerHeight')
      }
      this.$store.commit('windowResize', windowData)
    }
  },
  components: { App },
  template: '<App/>'
})
