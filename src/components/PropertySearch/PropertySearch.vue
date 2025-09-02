<template>
  <div class="search-container" ref="searchContainerRef">
    <div class="search-bar" :class="{ 'is-active': activeSection !== null }">
      <div
        class="search-item"
        :class="{ active: activeSection === 'where' }"
        @click="setActiveSection('where')"
      >
        <span class="label">Where</span>
        <div class="input-wrapper">
          <input
            type="text"
            class="value-input"
            placeholder="Search destinations"
            v-model="searchQuery"
          />
          <button
            v-if="searchQuery && activeSection === 'where'"
            class="clear-button"
            @click.stop="clearSearchQuery"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style="
                display: block;
                fill: none;
                height: 12px;
                width: 12px;
                stroke: currentcolor;
                stroke-width: 4;
                overflow: visible;
              "
            >
              <path d="m6 6 20 20M26 6 6 26"></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        class="search-item"
        :class="{ active: activeSection === 'checkin' }"
        @click="setActiveSection('checkin')"
      >
        <span class="label">Check in</span>
        <span class="value">{{ checkInDisplayValue }}</span>
      </div>
      <div
        class="search-item"
        :class="{ active: activeSection === 'checkout' }"
        @click="setActiveSection('checkout')"
      >
        <span class="label">Check out</span>
        <span class="value">{{ checkOutDisplayValue }}</span>
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
    <GuestSelectorPanel
      v-if="activeSection === 'who'"
      :initial-counts="guestCounts"
      @increment="handleGuestChange"
      @decrement="handleGuestChange"
    />
    <DatePickerPanel
      v-if="activeSection === 'checkin' || activeSection === 'checkout'"
      :initial-dates="dateRange"
      @update-dates="handleDateUpdate"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSearchState } from '@/composables/useSearchState'
import { useClickOutside } from '@/composables/useClickOutside'

import GuestSelectorPanel from '@/components/PropertySearch/GuestSelectorPanel.vue'
import DatePickerPanel from '@/components/DatePickerPanel/DatePickerPanel.vue'

const activeSection = ref(null)
const searchContainerRef = ref(null)

const {
  searchQuery,
  guestCounts,
  handleGuestChange,
  handleDateUpdate,
  checkInDisplayValue,
  checkOutDisplayValue,
  guestDisplayValue,
  clearSearchQuery,
  dateRange,
} = useSearchState()

const setActiveSection = (sectionName) => {
  activeSection.value = activeSection.value === sectionName ? null : sectionName
}

useClickOutside(searchContainerRef, () => {
  activeSection.value = null
})
</script>

<style lang="scss" scoped>
@import '@/components/PropertySearch/PropertySearch.scss';
</style>
