<template>
  <transition name="slide-fade">
    <div v-if="visible" class="wrapper">
      <div class="mask"></div>
      <div
        :style="'width: '+width+'px; height: '+height+'px;'"
        class="container centerbox white-bg card-shadow">
        <!-- 标题 -->
        <div class="primarylight-bg ht-40 pr">
          <span class="title">弹框名称</span>
          <span @click="visible=false" class="close"><a-icon type="close" /></span>
        </div>
        <!-- 内容 -->
        <div>Content</div>
        <!-- 操作 -->
        <div class="ta-c pd-24 wi-100x pa bm-0 lf-0">
          <button class="btn btn-primary">确认</button>
          <button @click="visible=false" class="btn">取消</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/javascript">
export default {
  name: 'defaultDialog',
  data () {
    return {
      width: 600,
      height: 400,
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
      z-index: 2;
    }
  }
</style>
