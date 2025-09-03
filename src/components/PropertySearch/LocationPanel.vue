<template>
  <div class="location-panel">
    <ul v-if="filteredLocations.length > 0" class="location-list">
      <li
        v-for="location in filteredLocations"
        :key="location.city"
        class="location-item"
        @click="selectLocation(location.city)"
      >
        <div class="icon-wrapper">
          <IconMapPin />
        </div>
        <div class="text-wrapper">
          <span class="city">{{ location.city }}</span>
          <span class="country">{{ location.country }}</span>
        </div>
      </li>
    </ul>
    <div v-else class="no-results">No matching locations found.</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import IconMapPin from '@/components/icons/IconMapPin.vue'
import type { ILocation } from '@/types/interfaces.ts'

const props = defineProps({
  query: {
    type: String,
    required: true,
  },
  locations: {
    type: Array as PropType<ILocation[]>,
    required: true,
  },
})

const emit = defineEmits<{
  (e: 'select-location', location: string): void
}>()

const filteredLocations = computed(() => {
  const queryLower = props.query.toLowerCase()
  if (!queryLower) {
    return props.locations
  }
  return props.locations.filter((loc) => loc.city.toLowerCase().includes(queryLower))
})

const selectLocation = (location: string) => {
  emit('select-location', location)
}
</script>

<style lang="scss" scoped src="./LocationPanel.scss"></style>
