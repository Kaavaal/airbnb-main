<template>
  <div class="date-picker-panel">
    <VueDatePicker
      :model-value="props.initialDates"
      range
      inline
      multi-calendars
      auto-apply
      partial-range
      :min-date="new Date()"
      :enable-time-picker="false"
      @update:model-value="handleDateUpdate"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { PropType } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const props = defineProps({
  initialDates: {
    type: Array as PropType<(Date | null)[]>,
    default: () => [],
  },
})

const emit = defineEmits<{
  (e: 'update-dates', value: Date[] | null): void
}>()

const handleDateUpdate = (value: Date[] | null) => {
  emit('update-dates', value)
}
</script>

<style lang="scss" scoped src="./DatePickerPanel.scss"></style>
