import { defineStore } from 'pinia'

export const useSideBarStore = defineStore('sideBarStore', {
  state: () => {
    return { 
        isOpen: false
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
})