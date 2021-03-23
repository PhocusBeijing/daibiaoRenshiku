import Dfrwsb from './Index.vue'
import DfrwsbList from './List.vue'
import DfrwsbShangbao from './Shangbao.vue'

export default {
  path: '/dfrwsb',
  component: Dfrwsb,
  children: [
    {
      path: '/',
      redirect: '/dfrwsb/list'
    }, {
      path: '/dfrwsb/list',
      name: 'DfrwsbList',
      component: DfrwsbList
    }, {
      path: '/dfrwsb/shangbao',
      name: 'DfrwsbShangbao',
      component: DfrwsbShangbao
    }
  ]
}
