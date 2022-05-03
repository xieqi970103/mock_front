<!--
 * @Description: 
 * @Author: xq
 * @Date: 2022-04-05 20:07:35
 * @LastEditTime: 2022-05-03 11:01:14
 * @LastEditors: xq
-->

<template>
  <n-message-provider>
    <n-config-provider>
      <router-view></router-view>
    </n-config-provider>
  </n-message-provider>
</template>
<script setup lang="ts">
// const theme = ref<GlobalTheme | null>(darkTheme)
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
