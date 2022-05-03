<!--
 * @Description: 布局
 * @Author: xq
 * @Date: 2022-04-10 11:03:08
 * @LastEditTime: 2022-05-03 11:04:08
 * @LastEditors: xq
-->
<template>
  <n-layout has-sider class="wrapper">
    <n-layout-sider inverted>
      <TheGlobalSider />
    </n-layout-sider>
    <n-layout>
      <n-layout-header>
        <TheGlobalHeader />
      </n-layout-header>
      <n-layout-content content-style="padding: 24px; color:#000">
        <n-card class="context-wrapper" bordered>
          <router-view></router-view>
        </n-card>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import TheGlobalHeader from './TheGlobalHeader.vue';
import TheGlobalSider from './TheGlobalSider.vue';
</script>

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
  .n-layout-content {
    height: calc(100vh - 60px);
    background-color: #eee;
  }
  .context-wrapper {
    background-color: #fff;
    height: 100%;
    min-height: 500px;
    color: #000;
  }
}
</style>
