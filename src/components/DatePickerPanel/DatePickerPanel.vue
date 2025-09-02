<template>
  <div class="date-picker-panel">
    <VueDatePicker
      v-model="date"
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

<script setup>
import { ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const props = defineProps({
  initialDates: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['update-dates'])

const date = ref(props.initialDates)

const handleDateUpdate = (value) => {
  emit('update-dates', value)
}
</script>

<style lang="scss" scoped>
@import './DatePickerPanel.scss';
</style>
