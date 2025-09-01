<template>
  <div class="search-container" ref="searchContainerRef">
    <div class="search-bar" :class="{ 'is-active': activeSection !== null }">
      <div
        class="search-item"
        :class="{ active: activeSection === 'where' }"
        @click="setActiveSection('where')"
      >
        <span class="label">Where</span>
        <span class="value">Search destinations</span>
      </div>
      <div
        class="search-item"
        :class="{ active: activeSection === 'checkin' }"
        @click="setActiveSection('checkin')"
      >
        <span class="label">Check in</span>
        <span class="value">Add dates</span>
      </div>
      <div
        class="search-item"
        :class="{ active: activeSection === 'checkout' }"
        @click="setActiveSection('checkout')"
      >
        <span class="label">Check out</span>
        <span class="value">Add dates</span>
      </div>
      <div
        class="search-item with-button"
        :class="{ active: activeSection === 'who' }"
        @click="setActiveSection('who')"
      >
        <div class="search-item-content">
          <span class="label">Who</span>
          <span class="value">{{ guestDisplayValue }}</span>
        </div>
        <button class="search-button">
          <svg class="search-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill="none">
              <path
                d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
              ></path>
            </g>
          </svg>
          <span v-if="activeSection !== null">Search</span>
        </button>
      </div>
    </div>
    <GuestSelectorPanel v-if="activeSection === 'who'" @update-guests="handleGuestUpdate" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import GuestSelectorPanel from './GuestSelectorPanel.vue'

const activeSection = ref(null)
const totalGuests = ref(0)
const searchContainerRef = ref(null)

const setActiveSection = (sectionName) => {
  activeSection.value = activeSection.value === sectionName ? null : sectionName
}

const handleGuestUpdate = (count) => {
  totalGuests.value = count
}

const guestDisplayValue = computed(() => {
  if (totalGuests.value === 0) {
    return 'Add guests'
  }
  if (totalGuests.value === 1) {
    return '1 guest'
  }
  return `${totalGuests.value} guests`
})

const handleClickOutside = (event) => {
  if (searchContainerRef.value && !searchContainerRef.value.contains(event.target)) {
    activeSection.value = null
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>

<style lang="scss" scoped>
@import './PropertySearch.scss';
</style>
