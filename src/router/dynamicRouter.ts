/*
 * @Description: 动态路由
 * @Author: xq
 * @Date: 2022-04-10 20:18:31
 * @LastEditTime: 2022-05-03 10:56:16
 * @LastEditors: xq
 */
import { Analytics } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { Component, h } from 'vue'
import { RouteRecordRaw } from 'vue-router'
const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}
/* 基础路由 */
const dynamicRouters: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layouts/index.vue'),
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: '首页',
        meta: {
          key: 'dashboard',
          icon: renderIcon(Analytics),
        },
      },
      {
        path: '/ruleManage',
        component: () => import('@/views/RuleManage/index.vue'),
        name: '规则管理',
        meta: {
          key: 'ruleManage',
          icon: renderIcon(Analytics),
        },
      },
      {
        path: '/person',
        component: () => import('@/views/person/index.vue'),
        name: '个人中心',
        meta: {
          key: 'person',
          icon: renderIcon(Analytics),
        },
      },
    ],
  },
]
export default dynamicRouters
