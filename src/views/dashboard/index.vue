<!--
 * @Description: 首页
 * @Author: xq
 * @Date: 2022-04-10 11:03:08
 * @LastEditTime: 2022-04-12 21:57:23
 * @LastEditors: xq
-->
<template>首页</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.wrapper {
  height: 100vh;
}
.n-layout {
  .n-layout-header {
    background: rgba(128, 128, 128, 0.2);
    height: 60px;
    line-height: 60px;
  }
  .n-layout-sider {
    background: rgba(128, 128, 128, 0.3);
  }
  .n-layout-content {
    height: calc(100vh - 60px);
  }
}
</style>
