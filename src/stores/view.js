import { defineStore } from 'pinia'

export const useViewStore = defineStore({
  id: 'view',

  state: () => ({
    visitedRoute: [],
    condition: false,
  }),

  actions: {
    toggleCondition() {
      this.condition = !this.condition
    },
    addVisitedRoute(name) {
      if (!this.visitedRoute.includes(name)) {
        this.visitedRoute.push(name)
      }
    },
    clearVisitedRoute() {
      this.visitedRoute = []
    },
  },
})
