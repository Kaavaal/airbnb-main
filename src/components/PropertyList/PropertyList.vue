<template>
  <div class="property-list">
    <PropertyCard
      v-for="property in properties"
      :key="property.id"
      :property="property"
      @open-modal="$emit('showDetails', property)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { mockProperties } from '@/data/mockProperties'
import PropertyCard from '@/components/PropertyCard/PropertyCard.vue'

defineEmits(['showDetails'])

const properties = ref(mockProperties)
</script>

<style lang="scss" scoped src="./PropertyList.scss"></style>
