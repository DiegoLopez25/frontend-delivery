import { defineStore } from 'pinia'

export const useStore = defineStore("storeDelibery",{
  state: () => {
    return{
      token : null
    }
  },
  getters: {
    setToken(state, payload){
      state.token = payload
    }
  },
  actions: {
  }
})
