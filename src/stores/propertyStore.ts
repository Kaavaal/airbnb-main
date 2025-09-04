import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { mockProperties } from '@/data/mockProperties'
import { isWithinInterval } from 'date-fns'
import type { IProperty, IFilters } from '@/types/interfaces'
import type { Ref } from 'vue'

export const usePropertyStore = defineStore('property', () => {
  const properties: Ref<IProperty[]> = ref([])
  const isLoading = ref(false)

  const filters = ref<IFilters>({
    searchQuery: '',
    guests: 0,
    checkin: null,
    checkout: null,
  })

  const filteredProperties = computed(() => {
    // Эта логика остается без изменений
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

  function applyFilters(newFilters: Partial<IFilters>) {
    isLoading.value = true

    setTimeout(() => {
      filters.value = { ...filters.value, ...newFilters }
      isLoading.value = false
    }, 500)
  }

  function fetchProperties() {
    isLoading.value = true
    setTimeout(() => {
      properties.value = mockProperties as IProperty[]
      isLoading.value = false
    }, 500)
  }

  return {
    properties,
    filters,
    isLoading,
    filteredProperties,
    applyFilters,
    fetchProperties,
  }
})
