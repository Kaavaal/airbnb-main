<template>
  <div class="property-card" @click="$emit('openModal', property)">
    <div class="image-container">
      <img :src="property.imageUrl" alt="Property image" class="property-image" />
      <div v-if="property.isGuestFavorite" class="guest-favorite-badge">Guest favorite</div>
      <button class="like-button" @click.stop="toggleLike">
        <IconHeart :class="{ liked: isLiked }" />
      </button>
    </div>
    <div class="info-container">
      <h3 class="title">{{ property.title }}</h3>
      <div class="price-rating">
        <span class="price">₴{{ property.price.toLocaleString('ru-RU') }} for 2 nights</span>
        <span class="rating">
          <IconStar />
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
import IconHeart from '@/components/icons/IconHeart.vue'
import IconStar from '@/components/icons/IconStar.vue'

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
