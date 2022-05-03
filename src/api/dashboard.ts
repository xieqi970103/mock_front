/*
 * @Description:
 * @Author: xq
 * @Date: 2022-04-14 23:03:24
 * @LastEditTime: 2022-04-14 23:15:27
 * @LastEditors: xq
 */
import { request } from '@/utils/request'
export const test = (params?: object) => request('/api', params)
