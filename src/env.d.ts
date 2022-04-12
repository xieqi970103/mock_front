/*
 * @Description:
 * @Author: xq
 * @Date: 2022-04-05 20:07:35
 * @LastEditTime: 2022-04-12 21:32:28
 * @LastEditors: xq
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
