<template>
  <header class="app-header">
    <div class="top-bar">
      <div class="left-section" @click="reloadPage">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
          alt="Airbnb Logo"
          class="logo"
        />
      </div>
      <div class="center-section">
        <nav class="navigation">
          <a
            href="#"
            class="nav-link"
            :class="{ active: activeLink === 'Homes' }"
            @click="setActiveLink('Homes')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="28px" height="28px">
              <path
                fill="#c75146"
                d="M35.6,30.3l-9.1-8.2c-1.1-1-2.7-1-3.8,0l-9.1,8.2C13,30.8,13,31.7,13.6,32.2c0.6,0.5,1.5,0.5,2.1,0l8.5-7.6c0.5-0.4,1.2-0.4,1.7,0l8.5,7.6c0.3,0.2,0.6,0.4,1,0.4c0.4,0,0.8-0.1,1.1-0.4C36.1,31.7,36.1,30.8,35.6,30.3z"
              />
              <path
                fill="#c75146"
                d="M25.1,13.4L25.1,13.4c-1.1,0-2-0.9-2-2v-2.3c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v2.3C27.1,12.5,26.2,13.4,25.1,13.4z"
              />
              <path
                fill="#f2b87c"
                d="M42.9,24.3l-6.2-5.5V11c0-1.1-0.9-2-2-2h-3.4c-1.1,0-2,0.9-2,2v2.4l-2.9-2.6c-2.1-1.9-5.5-1.9-7.6,0L7.1,24.3c-1.4,1.2-1.6,3.3-0.4,4.7c1.2,1.4,3.3,1.6,4.7,0.4l12.8-11.4c0.5-0.4,1.2-0.4,1.7,0L38.6,29c0.7,0.6,1.5,0.9,2.4,0.9c0.9,0,1.8-0.3,2.5-1.1C44.7,27.5,44.4,25.5,42.9,24.3z"
              />
            </svg>
            <span>Homes</span>
          </a>
          <a
            href="#"
            class="nav-link"
            :class="{ active: activeLink === 'Experiences' }"
            @click="setActiveLink('Experiences')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="28px" height="28px">
              <path
                fill="#f44336"
                d="M34.5,22.5c0-5.2-4.3-9.5-9.5-9.5s-9.5,4.3-9.5,9.5c0,4.8,3.6,8.8,8.2,9.4l-2.1,4.2c-0.2,0.4,0,0.8,0.4,1c0.2,0.1,0.4,0.1,0.6,0.1c0.2,0,0.5-0.1,0.6-0.3l2.8-5.6h0l2.8,5.6c0.3,0.5,0.9,0.7,1.4,0.4c0.5-0.3,0.7-0.9,0.4-1.4l-2.1-4.2C31.2,30.9,34.5,27.1,34.5,22.5z"
              />
              <path
                fill="#f4b46a"
                d="M28,32.1c-0.1-0.1-0.3-0.2-0.5-0.2h-5c-0.2,0-0.4,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.5v5c0,0.2,0.1,0.4,0.2,0.5C22.1,38.4,22.3,38.5,22.5,38.5h5c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.5v-5C28.2,32.4,28.1,32.2,28,32.1z"
              />
              <path
                fill="#fff"
                d="M29.5,22.5c0,1.6-0.8,3.1-2.2,4.1c-0.2-1.1-1.2-2-2.3-2s-2.1,0.8-2.3,2c-1.4-1-2.2-2.5-2.2-4.1c0-2.5,2-4.5,4.5-4.5S29.5,20,29.5,22.5z"
              />
            </svg>
            <span>Experiences</span>
          </a>
          <a
            href="#"
            class="nav-link"
            :class="{ active: activeLink === 'Services' }"
            @click="setActiveLink('Services')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="28px" height="28px">
              <path
                fill="#a5a29a"
                d="M25,39.9c-2.2,0-4,1.8-4,4v0c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1v0C29,41.7,27.2,39.9,25,39.9z"
              />
              <path
                fill="#f4b46a"
                d="M40.1,30.3c-2.1-2.6-3.4-5.9-3.7-9.3c-0.4-5.3-4.8-9.6-10.2-9.6c-5.4,0-9.8,4.3-10.2,9.6c-0.3,3.4-1.6,6.7-3.7,9.3C11.1,31.7,11,33,11.5,34.1c0.5,1.2,1.7,2,3,2h21c1.3,0,2.5-0.8,3-2C41,33,39.9,31.7,40.1,30.3z"
              />
              <path
                fill="#f2b87c"
                d="M34.5,36.2H15.5c-1.3,0-2.5-0.8-3-2c-0.1-0.2-0.1-0.5,0-0.7c0.5-1,1.2-2,2-2.9l1.1-1.3c0.1-0.1,0.2-0.2,0.2-0.4v-5.2c0-4.3,3.5-7.8,7.8-7.8s7.8,3.5,7.8,7.8v5.2c0,0.1,0.1,0.3,0.2,0.4l1.1,1.3c0.8,0.9,1.5,1.9,2,2.9c0.1,0.2,0.2,0.5,0,0.7C37,35.4,35.8,36.2,34.5,36.2z"
              />
            </svg>
            <span>Services</span>
          </a>
        </nav>
      </div>
      <div class="right-section">
        <div class="user-profile">
          <span class="host-link">Become a host</span>
          <button class="icon-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path
                d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
              ></path>
            </svg>
          </button>
          <button class="menu-button">
            <svg
              class="hamburger-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="bottom-bar">
      <PropertySearch />
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import PropertySearch from '@/components/PropertySearch/PropertySearch.vue'

const activeLink = ref('Homes')
const setActiveLink = (linkName) => {
  activeLink.value = linkName
}

const reloadPage = () => {
  window.location.reload()
}
</script>

<style lang="scss" scoped>
@import './TheHeader.scss';
</style>
