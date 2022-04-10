<!--
 * @Description: 
 * @Author: xq
 * @Date: 2022-04-05 20:07:35
 * @LastEditTime: 2022-04-10 20:27:05
 * @LastEditors: xq
-->

<template>
  <n-message-provider>
    <n-config-provider :theme="theme">
      <router-view></router-view>
    </n-config-provider>
  </n-message-provider>
</template>
<script setup lang="ts">
import type { GlobalTheme } from 'naive-ui';
import { darkTheme } from 'naive-ui';
import { ref } from 'vue';
const theme = ref<GlobalTheme | null>(darkTheme)
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
