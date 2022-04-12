/*
 * @Description: 剪切板
 * @Author: xq
 * @Date: 2022-04-12 21:45:23
 * @LastEditTime: 2022-04-12 21:45:23
 * @LastEditors: xq
 */
function copyToClipboard(text: string | number) {
  const input = document.createElement('input')
  input.setAttribute('value', `${text}`)
  document.body.appendChild(input)
  input.select()
  const result = document.execCommand('copy')
  document.body.removeChild(input)
  return result
}

export const useCopyToClipboard = () => {
  return (text: string | number) => {
    if (typeof text === 'string' || typeof text === 'number') {
      return copyToClipboard(text)
    }
    return false
  }
}
