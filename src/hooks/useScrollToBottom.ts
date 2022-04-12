/*
 * @Description: 是否滚动倒底部
 * @Author: xq
 * @Date: 2022-04-12 21:53:24
 * @LastEditTime: 2022-04-12 21:53:24
 * @LastEditors: xq
 */
import { onMounted, onUnmounted } from 'vue'

export const useScrollToBottom = (callback = () => ({})) => {
  const handleScrolling = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      callback()
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScrolling)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScrolling)
  })
}
