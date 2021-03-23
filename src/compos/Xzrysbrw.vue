<template>
  <div v-if="visible" class="wrapper">
    <div class="mask"></div>
    <div class="container centerbox white-bg card-shadow">
      <div class="primary-bg ht-40 pr">
        <span class="title">弹框名称</span>
        <span @click="visible=false" class="close"><a-icon type="close" /></span>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'defaultDialog',
  data () {
    return {
      visible: false
    }
  }
}
</script>

<style type="text/css" lang="less" scoped>
  .wrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    .mask {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
    .title {
      color: #FFFFFF;
      position: absolute;
      left: 10px;
      top: 10px;
    }
    .close {
      display: inline-block;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #FFFFFF;
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
    }
    .container {
      width: 600px;
      height: 400px;
      z-index: 2;
    }
  }
</style>
