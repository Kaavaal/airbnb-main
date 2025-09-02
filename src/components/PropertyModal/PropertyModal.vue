<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <button class="close-button" @click="$emit('close')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path d="m6 6 20 20M26 6 6 26"></path>
        </svg>
      </button>

      <div class="image-section">
        <img :src="property.imageUrl" :alt="property.title" />
      </div>

      <div class="details-section">
        <h2 class="title">{{ property.title }}</h2>
        <div class="rating-reviews">
          <span class="star">★</span>
          <span>{{ property.rating }} (203 reviews)</span>
        </div>

        <div class="info-grid">
          <div>
            <span class="label">HOSTED BY</span>
            <span class="value host">
              {{ property.details.host }}
              <span v-if="property.details.isSuperhost" class="superhost-badge">Superhost</span>
            </span>
          </div>
          <div>
            <span class="label">PROPERTY TYPE</span>
            <span class="value">{{ property.details.propertyType }}</span>
          </div>
          <div>
            <span class="label">GUESTS</span>
            <span class="value">{{ property.details.guests }} guests</span>
          </div>
          <div>
            <span class="label">BEDROOMS</span>
            <span class="value">{{ property.details.bedrooms }} bed</span>
          </div>
        </div>

        <div class="about-section">
          <h3>About this place</h3>
          <p>{{ property.details.description }}</p>
        </div>

        <div class="amenities-section">
          <h3>What this place offers</h3>
          <ul>
            <li v-for="amenity in property.details.amenities" :key="amenity">✓ {{ amenity }}</li>
          </ul>
        </div>

        <div class="booking-footer">
          <span class="price"
            >₴{{ property.price.toLocaleString('ru-RU') }} <small>night</small></span
          >
          <button class="reserve-button" @click="$emit('close')">Reserve</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  property: {
    type: Object,
    required: true,
  },
})

defineEmits(['close'])
</script>

<style lang="scss" scoped src="./PropertyModal.scss"></style>
