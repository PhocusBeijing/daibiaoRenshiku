import Zyrwgl from './Index.vue'
import ZyrwglList from './List.vue'
import ZyrwglInfo from './Info.vue'

export default {
  path: '/zyrwgl',
  component: Zyrwgl,
  children: [
    {
      path: '/',
      redirect: '/zyrwgl/list'
    }, {
      path: '/zyrwgl/list',
      name: 'ZyrwglList',
      component: ZyrwglList
    }, {
      path: '/zyrwgl/info',
      name: 'ZyrwglInfo',
      component: ZyrwglInfo
    }
  ]
}
