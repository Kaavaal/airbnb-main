import { ref, reactive, computed } from 'vue'
import { format } from 'date-fns'

export function useSearchState() {
  const searchQuery = ref('')

  const dates = reactive({
    checkin: null,
    checkout: null,
  })

  const guestCounts = reactive({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  })

  const handleGuestChange = ({ type, operation }) => {
    const limits = {
      adults: 1,
      children: 0,
      infants: 0,
      pets: 0,
    }

    const currentValue = guestCounts[type]
    const minValue = limits[type]

    if (operation === 'increment') {
      guestCounts[type]++
    } else if (operation === 'decrement' && currentValue > minValue) {
      guestCounts[type]--
    }
  }

  const handleDateUpdate = (selectedDates) => {
    if (selectedDates) {
      dates.checkin = selectedDates[0]
      dates.checkout = selectedDates[1]
    } else {
      dates.checkin = null
      dates.checkout = null
    }
  }

  const checkInDisplayValue = computed(() => {
    return dates.checkin ? format(dates.checkin, 'MMM d') : 'Add dates'
  })

  const checkOutDisplayValue = computed(() => {
    return dates.checkout ? format(dates.checkout, 'MMM d') : 'Add dates'
  })

  const totalGuests = computed(() => guestCounts.adults + guestCounts.children)

  const guestDisplayValue = computed(() => {
    if (totalGuests.value === 0) return 'Add guests'
    if (totalGuests.value === 1) return '1 guest'
    return `${totalGuests.value} guests`
  })

  const clearSearchQuery = () => {
    searchQuery.value = ''
  }

  const dateRange = computed(() => {
    return [dates.checkin, dates.checkout].filter(Boolean)
  })

  return {
    searchQuery,
    dates,
    guestCounts,
    handleGuestChange,
    handleDateUpdate,
    checkInDisplayValue,
    checkOutDisplayValue,
    guestDisplayValue,
    clearSearchQuery,
    dateRange,
  }
}
