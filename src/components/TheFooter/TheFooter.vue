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
            <a href="#">
              <span class="link-title">Family travel hub</span>
              <span class="link-subtitle">Tips and inspiration</span>
            </a>
            <a href="#">
              <span class="link-title">Family budget travel</span>
              <span class="link-subtitle">Get there for less</span>
            </a>
            <a href="#">
              <span class="link-title">Vacation ideas</span>
              <span class="link-subtitle">Make it special, without making it a special trip</span>
            </a>
            <a href="#">
              <span class="link-title">Travel Europe on a budget</span>
              <span class="link-subtitle">Explore nature with the family</span>
            </a>
            <a href="#">
              <span class="link-title">Outdoor adventure</span>
              <span class="link-subtitle">Explore nature with the family</span>
            </a>
            <a href="#">
              <span class="link-title">Bucket list: national parks</span>
              <span class="link-subtitle">Must-see parks for family travel</span>
            </a>
            <a href="#">
              <span class="link-title">Kid-friendly state parks</span>
              <span class="link-subtitle">Check out these family-friendly historic stays</span>
            </a>
          </div>

          <div v-if="activeTab === 'apartments'" class="content-grid">
            <a href="#">
              <span class="link-title">New York</span>
              <span class="link-subtitle">New York</span>
            </a>
            <a href="#">
              <span class="link-title">Los Angeles</span>
              <span class="link-subtitle">California</span>
            </a>
            <a href="#">
              <span class="link-title">Chicago</span>
              <span class="link-subtitle">Illinois</span>
            </a>
            <a href="#">
              <span class="link-title">Houston</span>
              <span class="link-subtitle">Texas</span>
            </a>
            <a href="#">
              <span class="link-title">Phoenix</span>
              <span class="link-subtitle">Arizona</span>
            </a>
            <a href="#">
              <span class="link-title">Philadelphia</span>
              <span class="link-subtitle">Pennsylvania</span>
            </a>
            <a href="#">
              <span class="link-title">San Antonio</span>
              <span class="link-subtitle">Texas</span>
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

<script setup>
import { ref } from 'vue'

const activeTab = ref('inspiration')

const selectTab = (tabName) => {
  activeTab.value = tabName
}
</script>

<style lang="scss" scoped src="./TheFooter.scss"></style>
