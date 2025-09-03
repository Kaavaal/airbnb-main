import type { Ref, ComputedRef } from 'vue'

export interface IGuestCounts {
  adults: number
  children: number
  infants: number
  pets: number
}

export interface ISearchDates {
  checkin: Date | null
  checkout: Date | null
}

export interface IUseSearchState {
  searchQuery: Ref<string>
  dates: ISearchDates
  guestCounts: IGuestCounts
  handleGuestChange: (payload: {
    type: keyof IGuestCounts
    operation: 'increment' | 'decrement'
  }) => void
  handleDateUpdate: (selectedDates: Date[] | null) => void
  checkInDisplayValue: ComputedRef<string>
  checkOutDisplayValue: ComputedRef<string>
  guestDisplayValue: ComputedRef<string>
  clearSearchQuery: () => void
  dateRange: ComputedRef<(Date | null)[]>
}

export interface IAvailability {
  start: string
  end: string
}

export interface IPropertyDetails {
  host: string
  isSuperhost: boolean
  propertyType: string
  guests: number
  bedrooms: number
  bathrooms: number
  description: string
  amenities: string[]
}

export interface IProperty {
  id: number
  imageUrl: string
  title: string
  location: string
  price: number
  rating: number
  maxGuests: number
  isGuestFavorite: boolean
  availability: IAvailability[]
  details: IPropertyDetails
}

export interface IFilters {
  searchQuery: string
  guests: number
  checkin: Date | null
  checkout: Date | null
}

export interface ILocation {
  city: string
  country: string
}
