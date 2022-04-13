/*
 * @Description:
 * @Author: xq
 * @Date: 2022-04-06 21:49:10
 * @LastEditTime: 2022-04-13 21:19:53
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
// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next('/dashboard')
  } else {
    next()
  }
  // if(to)
})
export default router
