<!--
 * @Description: 规则管理
 * @Author: xq
 * @Date: 2022-04-10 20:41:02
 * @LastEditTime: 2022-05-03 11:59:34
 * @LastEditors: xq
-->
<template>
  <div>
    <n-data-table
      :columns="columns"
      :bordered="false"
      :data="data"
    ></n-data-table>
  </div>
</template>
<script lang="ts">
export default {
  name: 'RuleManage',
}
</script>
<script setup lang="ts">
import { h, defineComponent, reactive } from 'vue'
import { NButton, useMessage, DataTableColumns } from 'naive-ui'
type Song = {
  no: number
  title: string
  length: string
}
const message = useMessage()
const createColumns = ({
  play,
}: {
  play: (row: Song) => void
}): DataTableColumns<Song> => {
  return [
    {
      title: 'No',
      key: 'no',
    },
    {
      title: 'Title',
      key: 'title',
    },
    {
      title: 'Length',
      key: 'length',
    },
    {
      title: 'Action',
      key: 'actions',
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: 'small',
            onClick: () => play(row),
          },
          { default: () => 'Play' },
        )
      },
    },
  ]
}
// 表头
const columns = reactive(
  createColumns({
    play(row: Song) {
      message.info(`Play ${row.title}`)
    },
  }),
)

/* 获取数据 */
const data: Song[] = [
  { no: 3, title: 'Wonderwall_test', length: '4:18' },
  { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
]
</script>

<style scoped></style>
