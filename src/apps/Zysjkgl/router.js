import Zysjkgl from './Index.vue'
import ZysjkglList from './List.vue'

export default {
  path: '/zysjkgl',
  component: Zysjkgl,
  children: [
    {
      path: '/',
      redirect: '/zysjkgl/list'
    }, {
      path: '/zysjkgl/list',
      name: 'ZysjkglList',
      component: ZysjkglList
    }
  ]
}
