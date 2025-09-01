<script setup>
import TheHeader from '@/components/TheHeader/TheHeader.vue'
import SearchResultsPage from '@/views/SearchResultsPage/SearchResultsPage.vue'
import TheFooter from '@/components/TheFooter/TheFooter.vue'
</script>

<template>
  <div class="app-layout">
    <TheHeader />
    <main class="app-content">
      <SearchResultsPage />
    </main>
    <TheFooter />
  </div>
</template>

<style>
body {
  margin: 0;
  background-color: #fff;
  color: #222;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-content {
  flex: 1;
}
</style>
