<template>
  <header class="app-header">
    <div class="top-bar">
      <div class="left-section">
        <a href="#" @click.prevent="reloadPage" class="logo-link">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
            alt="Airbnb Logo"
            class="logo"
          />
        </a>
      </div>
      <div class="center-section">
        <nav class="navigation">
          <a
            v-for="link in navLinks"
            :key="link.id"
            href="#"
            class="nav-link"
            :class="{ active: activeLink === link.id }"
            @click="setActiveLink(link.id)"
          >
            <component :is="link.icon" />
            <span>{{ link.text }}</span>
          </a>
        </nav>
      </div>
      <div class="right-section" ref="profileSectionRef">
        <div class="user-profile">
          <span class="host-link">Become a host</span>
          <button class="icon-button">
            <IconGlobe />
          </button>
          <button class="menu-button" @click="toggleProfileDropdown">
            <IconHamburger />
          </button>
        </div>
        <ProfileDropdown v-if="isProfileDropdownOpen" />
      </div>
    </div>
    <div class="bottom-bar">
      <PropertySearch />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Component } from 'vue'
import PropertySearch from '@/components/PropertySearch/PropertySearch.vue'
import IconHome from '@/components/icons/IconHome.vue'
import IconExperience from '@/components/icons/IconExperience.vue'
import IconService from '@/components/icons/IconService.vue'
import IconGlobe from '@/components/icons/IconGlobe.vue'
import IconHamburger from '@/components/icons/IconHamburger.vue'
import ProfileDropdown from './ProfileDropdown.vue'
import { usePropertyStore } from '@/stores/propertyStore'
import { useClickOutside } from '@/composables/useClickOutside'

type NavLinkName = 'Homes' | 'Experiences' | 'Services'

interface NavLink {
  id: NavLinkName
  text: string
  icon: Component
}

const store = usePropertyStore()

const navLinks: NavLink[] = [
  { id: 'Homes', text: 'Homes', icon: IconHome },
  { id: 'Experiences', text: 'Experiences', icon: IconExperience },
  { id: 'Services', text: 'Services', icon: IconService },
]

const activeLink = ref<NavLinkName>('Homes')
const isProfileDropdownOpen = ref(false)
const profileSectionRef = ref<HTMLElement | null>(null)

const setActiveLink = (linkName: NavLinkName) => {
  activeLink.value = linkName
  store.fetchProperties()
}

const reloadPage = () => {
  window.location.reload()
}

const toggleProfileDropdown = () => {
  isProfileDropdownOpen.value = !isProfileDropdownOpen.value
}

useClickOutside(profileSectionRef, () => {
  isProfileDropdownOpen.value = false
})
</script>

<style lang="scss" scoped src="./TheHeader.scss"></style>
