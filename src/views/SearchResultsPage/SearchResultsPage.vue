<template>
  <div class="page-container">
    <h1 class="header-title">Stays in Poland</h1>
    <PropertyList @show-details="openModal" />
    <PropertyModal v-if="selectedProperty" :property="selectedProperty" @close="closeModal" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import PropertyList from '@/components/PropertyList/PropertyList.vue'
import PropertyModal from '@/components/PropertyModal/PropertyModal.vue'
import type { IProperty } from '@/types/interfaces'
import { usePropertyStore } from '@/stores/propertyStore'

const selectedProperty = ref<IProperty | null>(null)
const store = usePropertyStore()

const openModal = (property: IProperty) => {
  selectedProperty.value = property
}

const closeModal = () => {
  selectedProperty.value = null
}

onMounted(() => {
  store.fetchProperties()
})
</script>

<style lang="scss" scoped src="./SearchResultsPage.scss"></style>
