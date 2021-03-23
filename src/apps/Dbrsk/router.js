import Dbrsk from './Index.vue'
import DbrskList from './List.vue'

export default {
  path: '/dbrsk',
  component: Dbrsk,
  children: [
    {
      path: '/',
      redirect: '/dbrsk/list'
    }, {
      path: '/dbrsk/list',
      name: 'DbrskList',
      component: DbrskList
    }
  ]
}
