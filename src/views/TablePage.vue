<script setup>
import {onBeforeMount, onBeforeUnmount } from 'vue'
import { useViewStore } from '@/stores/view'
import { ElTable, ElTableColumn } from 'element-plus'

defineOptions({
  name: 'TablePage'
})

const viewStore = useViewStore()

const tableList = [
  { name: 'Col 1' },
  { name: 'Col 2' },
  { name: 'Col 3' },
]

onBeforeMount(() => {
  viewStore.addVisitedRoute('TablePage')
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount: TablePage')
})
</script>

<template>
  <div>Table Page</div>
  <br>
  <ElTable :data="tableList" style="width: 300px;">
    <ElTableColumn prop="name" label="name" v-if="viewStore.condition" />
    <ElTableColumn prop="name" label="name" v-else />
  </ElTable>
</template>
