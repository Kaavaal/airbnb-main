<template>
  <div class="page-container">
    <header class="page-header">
      <h1 class="header-title">Our Stays</h1>
    </header>

    <main class="content-area">
      <div class="property-list-placeholder">
        <p>cards</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isModalVisible = ref(false)
</script>

<style lang="scss" scoped src="./SearchResultsPage.scss"></style>
