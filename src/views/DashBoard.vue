<script setup>
const users = await fetch('./assets/users.json')
</script>

<template>
  <main>
    <ul>
      <li v-for="user in users" :key="user.name" >
        <span>{{ user.name }}</span>
        <span>{{ user.email }}</span>
      </li>
    </ul>
  </main>
</template>
