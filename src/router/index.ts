/*
 * @Description:
 * @Author: xq
 * @Date: 2022-04-06 21:49:10
 * @LastEditTime: 2022-04-10 20:39:46
 * @LastEditors: xq
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import dynamicRouters from './dynamicRouter'
/* 基础路由 */
const baseRoutes: Array<RouteRecordRaw> = [
  {
    path: '/404',
    component: () =>
      import(/* webpackChunkName: "fail" */ '@/views/exception/404.vue'),
  },
]
const routes: Array<RouteRecordRaw> = [...baseRoutes, ...dynamicRouters]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
