/*
 * @Description:
 * @Author: xq
 * @Date: 2022-04-06 21:49:10
 * @LastEditTime: 2022-04-08 22:33:06
 * @LastEditors: xq
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'), // 建议进行路由懒加载，优化访问性能
    },
    // {
    //   path: '/demo',
    //   name: 'demo',
    //   component: () => import('@/views/Demo.vue')
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
