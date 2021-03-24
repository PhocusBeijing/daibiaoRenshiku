import mainFrame from './Index.vue'
import Welcome from '@/apps/Welcome/Index.vue'
import Zyrwgl from '@/apps/Zyrwgl/router.js' // 中央任务管理 贺肖健
import Zysjkgl from '@/apps/Zysjkgl/router.js' // 中央数据库管理
import Dbrsk from '@/apps/Dbrsk/router.js' // 代表人士库
import Rwmdgl from '@/apps/Rwmdgl/router.js'
import Dfrwsb from '@/apps/Dfrwsb/router.js'
export default {
  path: '/',
  component: mainFrame,
  children: [
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    Dbrsk,
    Rwmdgl,
    Dfrwsb,
    Zyrwgl,
    Zysjkgl
  ]
}
