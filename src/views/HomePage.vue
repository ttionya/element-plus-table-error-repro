<script setup>
import { onBeforeMount, onBeforeUnmount } from 'vue'
import { useViewStore } from '@/stores/view'

defineOptions({
  name: 'HomePage'
})

const viewStore = useViewStore()

onBeforeMount(() => {
  viewStore.addVisitedRoute('HomePage')
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount: HomePage')
})
</script>

<template>
  <div>Home Page</div>
</template>
