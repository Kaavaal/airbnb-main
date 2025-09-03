<template>
  <footer class="app-footer">
    <div class="footer-content">
      <section class="inspiration-section">
        <h2 class="section-title">Inspiration for future getaways</h2>

        <div class="tabs">
          <button
            :class="{ active: activeTab === 'inspiration' }"
            @click="selectTab('inspiration')"
          >
            Travel tips & inspiration
          </button>
          <button :class="{ active: activeTab === 'apartments' }" @click="selectTab('apartments')">
            Airbnb-friendly apartments
          </button>
        </div>

        <div class="tab-content">
          <div v-if="activeTab === 'inspiration'" class="content-grid">
            <a v-for="link in inspirationLinks" :key="link.title" href="#">
              <span class="link-title">{{ link.title }}</span>
              <span class="link-subtitle">{{ link.subtitle }}</span>
            </a>
          </div>

          <div v-if="activeTab === 'apartments'" class="content-grid">
            <a v-for="link in apartmentLinks" :key="link.title" href="#">
              <span class="link-title">{{ link.title }}</span>
              <span class="link-subtitle">{{ link.subtitle }}</span>
            </a>
          </div>
        </div>
      </section>

      <div class="bottom-bar">
        <p>© 2025 Airbnb, Inc. ⋅ For ⋅ Ralabs ⋅ by Oleksii</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

type TabName = 'inspiration' | 'apartments'

const activeTab: Ref<TabName> = ref('inspiration')

const selectTab = (tabName: TabName) => {
  activeTab.value = tabName
}

const inspirationLinks = [
  { title: 'Family travel hub', subtitle: 'Tips and inspiration' },
  { title: 'Family budget travel', subtitle: 'Get there for less' },
  { title: 'Vacation ideas', subtitle: 'Make it special, without making it a special trip' },
  { title: 'Travel Europe on a budget', subtitle: 'Explore nature with the family' },
  { title: 'Outdoor adventure', subtitle: 'Explore nature with the family' },
  { title: 'Bucket list: national parks', subtitle: 'Must-see parks for family travel' },
  { title: 'Kid-friendly state parks', subtitle: 'Check out these family-friendly historic stays' },
]

const apartmentLinks = [
  { title: 'New York', subtitle: 'New York' },
  { title: 'Los Angeles', subtitle: 'California' },
  { title: 'Chicago', subtitle: 'Illinois' },
  { title: 'Houston', subtitle: 'Texas' },
  { title: 'Phoenix', subtitle: 'Arizona' },
  { title: 'Philadelphia', subtitle: 'Pennsylvania' },
  { title: 'San Antonio', subtitle: 'Texas' },
]
</script>

<style lang="scss" scoped src="./TheFooter.scss"></style>
