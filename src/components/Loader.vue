<template>
  <div class="loader-container">
    <div class="spinner"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px;
}

.spinner {
  border: 4px solid $background-secondary;
  border-top: 4px solid $red;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
