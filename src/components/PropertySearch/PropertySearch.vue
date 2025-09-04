<template>
  <div class="search-container" ref="searchContainerRef">
    <div class="search-bar" :class="{ 'is-active': activeSection !== null }">
      <div
        class="search-item"
        :class="{ active: activeSection === 'where' }"
        @click="setActiveSection('where')"
      >
        <span class="label">Where</span>
        <input
          type="text"
          class="value-input"
          placeholder="Search destinations"
          v-model="searchState.searchQuery.value"
          @keydown.enter="executeSearch"
        />
        <button
          v-if="searchState.searchQuery.value && activeSection === 'where'"
          class="clear-button"
          @click.stop="searchState.clearSearchQuery"
        >
          <IconClose />
        </button>
      </div>
      <div
        class="search-item"
        :class="{ active: activeSection === 'checkin' }"
        @click="setActiveSection('checkin')"
      >
        <span class="label">Check in</span>
        <span class="value">{{ searchState.checkInDisplayValue.value }}</span>
      </div>
      <div
        class="search-item"
        :class="{ active: activeSection === 'checkout' }"
        @click="setActiveSection('checkout')"
      >
        <span class="label">Check out</span>
        <span class="value">{{ searchState.checkOutDisplayValue.value }}</span>
      </div>
      <div
        class="search-item with-button"
        :class="{ active: activeSection === 'who' }"
        @click="setActiveSection('who')"
      >
        <div class="search-item-content">
          <span class="label">Who</span>
          <span class="value">{{ searchState.guestDisplayValue.value }}</span>
        </div>
        <button class="search-button" @click.stop="executeSearch">
          <IconSearch />
          <span v-if="activeSection !== null">Search</span>
        </button>
      </div>
    </div>
    <GuestSelectorPanel
      v-if="activeSection === 'who'"
      :initial-counts="searchState.guestCounts"
      @increment="searchState.handleGuestChange"
      @decrement="searchState.handleGuestChange"
    />
    <DatePickerPanel
      v-if="activeSection === 'checkin' || activeSection === 'checkout'"
      :initial-dates="searchState.dateRange.value"
      @update-dates="searchState.handleDateUpdate"
    />
    <LocationPanel
      v-if="activeSection === 'where'"
      :query="searchState.searchQuery.value"
      :locations="uniqueLocations"
      @select-location="handleLocationSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useSearchState } from '@/composables/useSearchState'
import { useClickOutside } from '@/composables/useClickOutside'
import { usePropertyStore } from '@/stores/propertyStore'

import GuestSelectorPanel from '@/components/PropertySearch/GuestSelectorPanel.vue'
import LocationPanel from '@/components/PropertySearch/LocationPanel.vue'
import DatePickerPanel from '@/components/DatePickerPanel/DatePickerPanel.vue'
import IconClose from '@/components/icons/IconClose.vue'
import IconSearch from '@/components/icons/IconSearch.vue'

const activeSection = ref<string | null>(null)
const searchContainerRef = ref<HTMLElement | null>(null)
const propertyStore = usePropertyStore()

const searchState = useSearchState()

const uniqueLocations = computed(() => {
  const locations = propertyStore.properties.map((p) => p.location)
  return [...new Set(locations)].map((location) => ({
    city: location,
    country: 'Poland',
  }))
})

const setActiveSection = (sectionName: string) => {
  activeSection.value = activeSection.value === sectionName ? null : sectionName
}

const handleLocationSelect = (location: string) => {
  searchState.searchQuery.value = location
  activeSection.value = 'checkin'
}

const executeSearch = () => {
  propertyStore.applyFilters({
    searchQuery: searchState.searchQuery.value,
    guests: searchState.guestCounts.adults + searchState.guestCounts.children,
    checkin: searchState.dateRange.value[0],
    checkout: searchState.dateRange.value[1],
  })
  activeSection.value = null
}

useClickOutside(searchContainerRef, () => {
  activeSection.value = null
})
</script>

<style lang="scss" scoped src="./PropertySearch.scss"></style>
