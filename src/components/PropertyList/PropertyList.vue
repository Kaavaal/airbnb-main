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
        <IconChevronRight />
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
import type { Ref, ComputedRef } from 'vue'
import { usePropertyStore } from '@/stores/propertyStore'
import PropertyCard from '@/components/PropertyCard/PropertyCard.vue'
import IconChevronRight from '@/components/icons/IconChevronRight.vue'
import type { IProperty } from '@/types/interfaces'

defineEmits<{
  (e: 'showDetails', payload: IProperty): void
}>()

const store = usePropertyStore()

const PAGE_SIZE: number = 16
const visibleCount: Ref<number> = ref(PAGE_SIZE)

const paginatedProperties: ComputedRef<IProperty[]> = computed(() => {
  return store.filteredProperties.slice(0, visibleCount.value)
})

const loadMore = (): void => {
  visibleCount.value += PAGE_SIZE
}

const hasMore: ComputedRef<boolean> = computed(() => {
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
