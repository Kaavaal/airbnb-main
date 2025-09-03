<template>
  <div class="property-card" @click="$emit('openModal', property)">
    <div class="image-container">
      <img :src="property.imageUrl" alt="Property image" class="property-image" />
      <div v-if="property.isGuestFavorite" class="guest-favorite-badge">Guest favorite</div>
      <button class="like-button" @click.stop="toggleLike">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          class="heart-icon"
          :class="{ liked: isLiked }"
        >
          <path
            d="M16 28.267a1.8 1.8 0 0 1-1.28-.533L3.24 16.267a7.94 7.94 0 0 1 1.2-11.2 8.06 8.06 0 0 1 11.38 0L16 5.2l.18-.133a8.06 8.06 0 0 1 11.38 0 7.94 7.94 0 0 1 1.2 11.2L17.28 27.733a1.8 1.8 0 0 1-1.28.534z"
          ></path>
        </svg>
      </button>
    </div>
    <div class="info-container">
      <h3 class="title">{{ property.title }}</h3>
      <div class="price-rating">
        <span class="price">₴{{ property.price.toLocaleString('ru-RU') }} for 2 nights</span>
        <span class="rating">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="star-icon">
            <path
              fill-rule="evenodd"
              d="M15.1 1.58a1 1 0 0 1 1.8 0l3.05 6.18 6.82 1a1 1 0 0 1 .55 1.7l-4.94 4.82.94 6.8a1 1 0 0 1-1.45 1.05L16 23.4l-6.1 3.2a1 1 0 0 1-1.45-1.05l1.17-6.8-4.94-4.82a1 1 0 0 1 .55-1.7l6.82-1L15.1 1.58z"
            ></path>
          </svg>
          {{ property.rating.toFixed(2) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { PropType } from 'vue'
import type { IProperty } from '@/types/interfaces'

defineProps({
  property: {
    type: Object as PropType<IProperty>,
    required: true,
  },
})

defineEmits<{
  (e: 'openModal', payload: IProperty): void
}>()

const isLiked = ref<boolean>(false)

const toggleLike = () => {
  isLiked.value = !isLiked.value
}
</script>

<style lang="scss" scoped src="./PropertyCard.scss"></style>
