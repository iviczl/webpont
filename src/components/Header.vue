<script setup>
import { useUserStore } from './stores/user.js'
const store = useUserStore()

const logOut = () => {
  store.logOut()
  this.router.push('login')
}
const lang= { 
  hu: [
    { key: 'language', value: 'nyelv'}
  ],
  en: [
    { key: 'language', value: 'language'}
  ]
}

const actualText = (key) => {
  return lang[store.language].find(t => t.key === key).value
}
</script>

<template>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      {{actualText('language')}}
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
  <button @click="logOut">Log out</button>
</template>