/*
 * @Description:
 * @Author: xq
 * @Date: 2022-04-06 21:49:10
 * @LastEditTime: 2022-04-13 21:39:46
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
  {
    path: '/:pathmatch(.*)',
    redirect: '/404',
  },
]
const routes: Array<RouteRecordRaw> = [...baseRoutes, ...dynamicRouters]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
// 路由守卫
router.beforeEach((to, from, next) => {
  console.log(to.path)
  if (to.path === '/') {
    console.log(to.path)

    next('/dashboard')
  } else {
    next()
  }
})
export default router
