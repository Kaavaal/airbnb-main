<template>
  <div class="guest-selector-panel">
    <div class="guest-row">
      <div class="guest-info">
        <span class="title">Adults</span>
        <span class="subtitle">Ages 13 or above</span>
      </div>
      <div class="counter">
        <button
          class="counter-button"
          @click="emit('decrement', { type: 'adults', operation: 'decrement' })"
          :disabled="props.initialCounts.adults <= 1"
        >
          &ndash;
        </button>
        <span class="count-value">{{ props.initialCounts.adults }}</span>
        <button
          class="counter-button"
          @click="emit('increment', { type: 'adults', operation: 'increment' })"
        >
          +
        </button>
      </div>
    </div>

    <div class="guest-row">
      <div class="guest-info">
        <span class="title">Children</span>
        <span class="subtitle">Ages 2–12</span>
      </div>
      <div class="counter">
        <button
          class="counter-button"
          @click="emit('decrement', { type: 'children', operation: 'decrement' })"
          :disabled="props.initialCounts.children === 0"
        >
          &ndash;
        </button>
        <span class="count-value">{{ props.initialCounts.children }}</span>
        <button
          class="counter-button"
          @click="emit('increment', { type: 'children', operation: 'increment' })"
        >
          +
        </button>
      </div>
    </div>

    <div class="guest-row">
      <div class="guest-info">
        <span class="title">Infants</span>
        <span class="subtitle">Under 2</span>
      </div>
      <div class="counter">
        <button
          class="counter-button"
          @click="emit('decrement', { type: 'infants', operation: 'decrement' })"
          :disabled="props.initialCounts.infants === 0"
        >
          &ndash;
        </button>
        <span class="count-value">{{ props.initialCounts.infants }}</span>
        <button
          class="counter-button"
          @click="emit('increment', { type: 'infants', operation: 'increment' })"
        >
          +
        </button>
      </div>
    </div>

    <div class="guest-row">
      <div class="guest-info">
        <span class="title">Pets</span>
        <a href="#" class="subtitle-link">Bringing a service animal?</a>
      </div>
      <div class="counter">
        <button
          class="counter-button"
          @click="emit('decrement', { type: 'pets', operation: 'decrement' })"
          :disabled="props.initialCounts.pets === 0"
        >
          &ndash;
        </button>
        <span class="count-value">{{ props.initialCounts.pets }}</span>
        <button
          class="counter-button"
          @click="emit('increment', { type: 'pets', operation: 'increment' })"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  initialCounts: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['increment', 'decrement'])
</script>

<style lang="scss" scoped>
@import './GuestSelectorPanel.scss';
</style>
