<template>
  <a-layout class="ht-100x">
    <a-layout-sider class="primary-bg">
      <div class="ht-60 white">
        <a-icon class="pr tp-22 lf-22" type="menu-fold" />
      </div>
      <a-menu
      mode="inline"
      theme="dark"
      class="primary-bg"
      @click="menuClick"
      :inline-collapsed="collapsed">
      <a-menu-item
        :key="item.key"
        v-for="item in menuData">
        <a-icon :type="item.icon" />
        <span>{{item.title}}</span>
      </a-menu-item>
    </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="white-bg bb">
        <span class="navtitle">民主党派代表人士库</span>
        <ul class="navlink primarylight">
          <router-link tag="li" to="/welcome">
            <a-icon type="bank" />
            <span>首页</span>
          </router-link>
          <li>
            <a-icon type="bank" />
            <span>临时名单</span>
          </li>
          <li>
            <a-icon type="bank" />
            <span>管理员</span>
          </li>
          <li>
            <a-icon type="bank" />
            <span>退出</span>
          </li>
        </ul>
      </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script type="text/javascript">
export default {
  name: 'Main',
  data () {
    return {
      collapsed: false,
      menuData: [
        {
          key: '1',
          icon: 'pie-chart',
          title: '中央任务管理',
          router: '/zyrwgl'
        }, {
          key: '2',
          icon: 'pie-chart',
          title: '中央数据库管理',
          router: '/zysjkgl'
        }, {
          key: '3',
          icon: 'pie-chart',
          title: '代表人士库',
          router: '/dbrsk'
        }, {
          key: '4',
          icon: 'pie-chart',
          title: '人物名单管理',
          router: '/rwmdgl'
        }, {
          key: '5',
          icon: 'pie-chart',
          title: '地方任务上报',
          router: '/dfrwsb'
        }
      ]
    }
  },
  methods: {
    menuClick (val) {
      let path = this.menuData[val.key * 1 - 1].router
      this.$router.push(path, () => {})
    }
  }
}
</script>
