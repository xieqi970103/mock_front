<!--
 * @Description: 
 * @Author: xq
 * @Date: 2022-04-10 11:40:22
 * @LastEditTime: 2022-04-13 21:55:41
 * @LastEditors: xq
-->
<template>
  <div class="wrapper">
    <n-result
      status="404"
      title="404 资源不存在"
      description="生活总归带点荒谬"
      class="wrapper"
    >
      <template #footer>
        <router-link to="/"><n-button>找点乐子吧</n-button></router-link>
      </template>
    </n-result>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #18181c;
}
</style>
