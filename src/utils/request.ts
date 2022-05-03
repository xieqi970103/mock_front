/*
 * @Description:
 * @Author: xq
 * @Date: 2022-04-14 21:36:39
 * @LastEditTime: 2022-04-14 23:24:37
 * @LastEditors: xq
 */
import Axios, { AxiosRequestConfig } from 'axios'

const client = Axios.create({
  // 你的配置
  timeout: 120000,
})

export async function request(url: string, config?: AxiosRequestConfig) {
  const response = await client.request({ url, ...config })
  const result = response.data
  // 你的业务判断逻辑
  return result
}

export default client
