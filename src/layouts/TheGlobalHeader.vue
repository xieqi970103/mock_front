<!--
 * @Description: 头部
 * @Author: xq
 * @Date: 2022-04-10 22:18:11
 * @LastEditTime: 2022-04-10 22:32:35
 * @LastEditors: xq
-->
<template>
  <div class="header-wrapper">
    <n-avatar
      :style="{
        color: 'yellow',
        backgroundColor: 'red',
      }"
    >
      X
    </n-avatar>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.header-wrapper {
  display: flex;
  height: 60px;
  justify-content: end;
  align-items: center;
  padding: 0px 24px;
}
</style>
