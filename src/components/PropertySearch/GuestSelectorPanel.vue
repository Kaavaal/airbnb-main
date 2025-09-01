<template>
  <div class="guest-selector-panel">
    <div class="guest-row">
      <div class="guest-info">
        <span class="title">Adults</span>
        <span class="subtitle">Ages 13 or above</span>
      </div>
      <div class="counter">
        <button class="counter-button" @click="decrement('adults')" :disabled="counts.adults <= 1">
          &ndash;
        </button>
        <span class="count-value">{{ counts.adults }}</span>
        <button class="counter-button" @click="increment('adults')">+</button>
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
          @click="decrement('children')"
          :disabled="counts.children === 0"
        >
          &ndash;
        </button>
        <span class="count-value">{{ counts.children }}</span>
        <button class="counter-button" @click="increment('children')">+</button>
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
          @click="decrement('infants')"
          :disabled="counts.infants === 0"
        >
          &ndash;
        </button>
        <span class="count-value">{{ counts.infants }}</span>
        <button class="counter-button" @click="increment('infants')">+</button>
      </div>
    </div>

    <div class="guest-row">
      <div class="guest-info">
        <span class="title">Pets</span>
        <a href="#" class="subtitle-link">Bringing a service animal?</a>
      </div>
      <div class="counter">
        <button class="counter-button" @click="decrement('pets')" :disabled="counts.pets === 0">
          &ndash;
        </button>
        <span class="count-value">{{ counts.pets }}</span>
        <button class="counter-button" @click="increment('pets')">+</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, watch } from 'vue'

const emit = defineEmits(['update-guests'])

const counts = reactive({
  adults: 1,
  children: 0,
  infants: 0,
  pets: 0,
})

const totalGuests = computed(() => counts.adults + counts.children)

watch(
  totalGuests,
  (newTotal) => {
    emit('update-guests', newTotal)
  },
  { immediate: true },
)

const increment = (type) => {
  counts[type]++
}

const decrement = (type) => {
  if (type === 'adults' && counts.adults > 1) {
    counts.adults--
  } else if (type !== 'adults' && counts[type] > 0) {
    counts[type]--
  }
}
</script>

<style lang="scss" scoped>
@import './GuestSelectorPanel.scss';
</style>
