<template>
  <div v-if="paginatedProperties.length > 0">
    <div class="property-list">
      <PropertyCard
        v-for="property in paginatedProperties"
        :key="property.id"
        :property="property"
        @open-modal="$emit('showDetails', property)"
      />
    </div>
    <div class="load-more-container" v-if="hasMore">
      <button @click="loadMore" class="load-more-button">
        <span>Show More</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  </div>
  <div v-else class="no-results">
    <h3>No exact matches</h3>
    <p>Try changing or removing some of your filters.</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { usePropertyStore } from '@/stores/propertyStore'
import PropertyCard from '@/components/PropertyCard/PropertyCard.vue'
import type { IProperty } from '@/types/interfaces'

defineEmits<{
  (e: 'showDetails', payload: IProperty): void
}>()

const store = usePropertyStore()

const PAGE_SIZE = 16
const visibleCount = ref(PAGE_SIZE)

const paginatedProperties = computed(() => {
  return store.filteredProperties.slice(0, visibleCount.value)
})

const loadMore = () => {
  visibleCount.value += PAGE_SIZE
}

const hasMore = computed(() => {
  return visibleCount.value < store.filteredProperties.length
})

watch(
  () => store.filters,
  () => {
    visibleCount.value = PAGE_SIZE
  },
  { deep: true },
)
</script>

<style lang="scss" scoped src="./PropertyList.scss"></style>
