import mainFrame from './Index.vue'
import Welcome from '@/apps/Welcome/Index.vue'
import Zyrwgl from '@/apps/Zyrwgl/router.js'
import Zysjkgl from '@/apps/Zysjkgl/router.js'
import Dbrsk from '@/apps/Dbrsk/router.js'
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
