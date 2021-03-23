import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeRouter: '',
    screenHeight: 0,
    screenWidth: 0
  },
  getters: {
    activeRouter: state => state.activeRouter,
    screenWidth: state => state.screenWidth,
    screenHeight: state => state.screenHeight
  },
  mutations: {
    /*
    * 窗口变化更新宽高
    */
    windowResize (state, data) {
      state.screenWidth = data.w
      state.screenHeight = data.h
    },
    /*
    * 当前激活应用
    */
    updateActiveRouter (state, data) {
      state.activeRouter = data
    }
  },
  // 严格模式
  strict: process.env.NODE_ENV !== 'production'
})
