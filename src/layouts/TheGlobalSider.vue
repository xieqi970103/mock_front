<!--
 * @Description: 菜单
 * @Author: xq
 * @Date: 2022-04-10 13:39:16
 * @LastEditTime: 2022-05-03 11:06:59
 * @LastEditors: xq
-->
<template>
  <h1>Mock</h1>
  <n-menu inverted :options="menuOptions" @update:value="updateMenu" />
</template>

<script setup lang="ts">
import type { MenuOption } from 'naive-ui';
import { useMessage } from 'naive-ui';
import { RouteRecordRaw, useRouter } from 'vue-router';
import dynamicRouters from '../router/dynamicRouter';

// 菜单目录
const menuOptions: MenuOption[] = []
const getMenuOption = (
  routes: Array<RouteRecordRaw>,
  menu: Array<MenuOption>,
) => {
  routes.forEach((itemMenu) => {
    const menuObj: MenuOption = {
      label: itemMenu.name as string,
      key: itemMenu.meta?.key as string,
      path: itemMenu.path,
      children: [],
    }
    if (Array.isArray(itemMenu.children)) {
      getMenuOption(itemMenu.children, menuObj.children as MenuOption[])
    } else {
      delete menuObj.children
    }
    menu.push(menuObj)
  })
  return menu
}

getMenuOption(dynamicRouters[0].children as Array<RouteRecordRaw>, menuOptions)

const message = useMessage()
// 切换菜单
const router = useRouter()
const updateMenu = (key: string, item: MenuOption) => {
  router.push({ path: item.path as string })
}
</script>

<style scoped lang="less"></style>
