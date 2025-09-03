<template>
  <div class="page-container">
    <h1 class="header-title">Stays in Warsaw</h1>
    <PropertyList @show-details="openModal" />
    <PropertyModal v-if="selectedProperty" :property="selectedProperty" @close="closeModal" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PropertyList from '@/components/PropertyList/PropertyList.vue'
import PropertyModal from '@/components/PropertyModal/PropertyModal.vue'
import type { IProperty } from '@/types/interfaces'

const selectedProperty = ref<IProperty | null>(null)

const openModal = (property: IProperty) => {
  selectedProperty.value = property
}

const closeModal = () => {
  selectedProperty.value = null
}
</script>

<style lang="scss" scoped src="./SearchResultsPage.scss"></style>
