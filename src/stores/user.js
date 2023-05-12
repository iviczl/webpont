import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => { 
  const userName = ref('')
  const token = ref('')

  function login(name, password) {
    userName = name
    token = Date.now.toString()
  }

  function logout() {
    userName = ''
    token = ''
  }

})