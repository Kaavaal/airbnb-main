import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { mockProperties } from '@/data/mockProperties'
import { isWithinInterval } from 'date-fns'

export const usePropertyStore = defineStore('property', () => {
  const properties = ref(mockProperties)
  const filters = ref({
    searchQuery: '',
    guests: 0,
    checkin: null,
    checkout: null,
  })

  const filteredProperties = computed(() => {
    return properties.value.filter((property) => {
      const searchLower = filters.value.searchQuery.toLowerCase()
      const matchesSearch =
        !searchLower ||
        property.location.toLowerCase().includes(searchLower) ||
        property.title.toLowerCase().includes(searchLower)

      const matchesGuests = filters.value.guests === 0 || property.maxGuests >= filters.value.guests

      const matchesDates = (() => {
        const userCheckin = filters.value.checkin
        const userCheckout = filters.value.checkout
        if (!userCheckin || !userCheckout) return true

        return property.availability.some((range) => {
          const propertyStart = new Date(range.start)
          const propertyEnd = new Date(range.end)
          return (
            isWithinInterval(userCheckin, { start: propertyStart, end: propertyEnd }) &&
            isWithinInterval(userCheckout, { start: propertyStart, end: propertyEnd })
          )
        })
      })()

      return matchesSearch && matchesGuests && matchesDates
    })
  })

  function applyFilters(newFilters) {
    filters.value.searchQuery = newFilters.searchQuery
    filters.value.guests = newFilters.guests
    filters.value.checkin = newFilters.checkin
    filters.value.checkout = newFilters.checkout
  }

  return {
    properties,
    filters,
    filteredProperties,
    applyFilters,
  }
})
