<template>
  <div class="profile-dropdown">
    <ul class="dropdown-list">
      <li v-for="item in mainItems" :key="item.text" class="dropdown-item">
        <a :href="item.link">{{ item.text }}</a>
      </li>
    </ul>
    <div class="divider"></div>
    <ul class="dropdown-list">
      <li v-for="item in secondaryItems" :key="item.text" class="dropdown-item">
        <a :href="item.link">{{ item.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const mainItems = [{ text: 'Log in or sign up', link: '#' }]

const secondaryItems = [
  { text: 'Help Center', link: '#' },
  { text: 'Become a host', link: '#' },
]
</script>

<style lang="scss" scoped src="./ProfileDropdown.scss"></style>
