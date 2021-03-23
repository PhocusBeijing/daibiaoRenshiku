import Rwmdgl from './Index.vue'
import RwmdglList from './List.vue'

export default {
  path: '/rwmdgl',
  component: Rwmdgl,
  children: [
    {
      path: '/',
      redirect: '/rwmdgl/list'
    }, {
      path: '/rwmdgl/list',
      name: 'RwmdglList',
      component: RwmdglList
    }
  ]
}
