<script setup>
import { RouterView, RouterLink, useRoute } from 'vue-router'
import { useViewStore } from '@/stores/view'
import { ElButton } from 'element-plus'

const route = useRoute()
const viewStore = useViewStore()

function onClick() {
  viewStore.clearVisitedRoute()
  viewStore.toggleCondition()
}
</script>

<template>
  <div>Current cached route: {{ viewStore.visitedRoute.join() || 'Empty' }}</div>
  <br>
  <div>
    <RouterLink to="/home">Home</RouterLink>
    <RouterLink to="/table">Table</RouterLink>
  </div>
  <br>
  <ElButton @click="onClick">clear visited route and change condition</ElButton>

  <hr :style="{ margin: '20px 0' }">
  <div>
    <RouterView v-slot="{ Component }">
      <KeepAlive :include="viewStore.visitedRoute">
        <Component :is="Component" :key="route.fullPath" />
      </KeepAlive>
    </RouterView>
  </div>
</template>
