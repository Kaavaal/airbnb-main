<template>
  <div class="guest-selector-panel">
    <div v-for="category in guestCategories" :key="category.id" class="guest-row">
      <div class="guest-info">
        <span class="title">{{ category.title }}</span>
        <a v-if="category.isLink" href="#" class="subtitle-link">{{ category.subtitle }}</a>
        <span v-else class="subtitle">{{ category.subtitle }}</span>
      </div>
      <div class="counter">
        <button
          class="counter-button"
          @click="emit('decrement', { type: category.id, operation: 'decrement' })"
          :disabled="props.initialCounts[category.id] <= category.min"
        >
          &ndash;
        </button>
        <span class="count-value">{{ props.initialCounts[category.id] }}</span>
        <button
          class="counter-button"
          @click="emit('increment', { type: category.id, operation: 'increment' })"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { IGuestCounts } from '@/types/interfaces'

const props = defineProps({
  initialCounts: {
    type: Object as PropType<IGuestCounts>,
    required: true,
  },
})

const emit = defineEmits<{
  (e: 'increment', payload: { type: keyof IGuestCounts; operation: 'increment' }): void
  (e: 'decrement', payload: { type: keyof IGuestCounts; operation: 'decrement' }): void
}>()

const guestCategories = [
  { id: 'adults', title: 'Adults', subtitle: 'Ages 13 or above', min: 1, isLink: false },
  { id: 'children', title: 'Children', subtitle: 'Ages 2–12', min: 0, isLink: false },
  { id: 'infants', title: 'Infants', subtitle: 'Under 2', min: 0, isLink: false },
  { id: 'pets', title: 'Pets', subtitle: 'Bringing a service animal?', min: 0, isLink: true },
]
</script>

<style lang="scss" scoped src="./GuestSelectorPanel.scss"></style>
