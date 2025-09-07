<template>
  <div class="language-switcher">
    <ul class="language-list">
      <li v-for="lang in languages" :key="lang.code" class="language-item">
        <a href="#">
          <span class="language-name">{{ lang.name }}</span>
          <span class="language-region">{{ lang.region }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const languages = [
  { code: 'en', name: 'English', region: 'United States' },
  { code: 'pl', name: 'Polski', region: 'Polska' },
  { code: 'de', name: 'Deutsch', region: 'Deutschland' },
  { code: 'fr', name: 'Français', region: 'France' },
  { code: 'es', name: 'Español', region: 'España' },
]
</script>

<style lang="scss" scoped src="./LanguageSwitcher.scss"></style>
