import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header', () => {
  // State
  const activeNavItem = ref('homes')
  const isInitialized = ref(false)
  const isScrolled = ref(false)
  
  // Navigation items configuration
  const navigationItems = ref([
    {
      id: 'homes',
      label: 'Homes',
      icon: 'HomeIcon',
      route: '/homes',
      badge: null
    },
    {
      id: 'experiences',
      label: 'Experiences',
      icon: 'ExperienceIcon',
      route: '/experiences',
      badge: 'NEW'
    },
    {
      id: 'services',
      label: 'Services',
      icon: 'ServicesIcon',
      route: '/services',
      badge: 'NEW'
    }
  ])
  
  // User menu items
  const userMenuItems = ref([
    {
      id: 'signup',
      label: 'Sign up',
      action: 'signup',
      type: 'primary'
    },
    {
      id: 'login',
      label: 'Log in',
      action: 'login',
      type: 'secondary'
    },
    {
      id: 'host-home',
      label: 'Host your home',
      action: 'host-home',
      type: 'default'
    },
    {
      id: 'host-experience',
      label: 'Host an experience',
      action: 'host-experience',
      type: 'default'
    },
    {
      id: 'help',
      label: 'Help',
      action: 'help',
      type: 'default'
    }
  ])
  
  // Computed
  const currentNavItem = computed(() => {
    return navigationItems.value.find(item => item.id === activeNavItem.value)
  })
  
  const hasActiveBadge = computed(() => {
    return navigationItems.value.some(item => item.badge && item.id === activeNavItem.value)
  })
  
  const primaryUserActions = computed(() => {
    return userMenuItems.value.filter(item => item.type === 'primary')
  })
  
  const secondaryUserActions = computed(() => {
    return userMenuItems.value.filter(item => item.type === 'secondary')
  })
  
  const defaultUserActions = computed(() => {
    return userMenuItems.value.filter(item => item.type === 'default')
  })
  
  // Actions
  const setActiveNav = (navId) => {
    const navItem = navigationItems.value.find(item => item.id === navId)
    if (navItem) {
      activeNavItem.value = navId
      
      // Save to localStorage for persistence
      localStorage.setItem('airbnb-active-nav', navId)
      
      // Emit custom event for other components to listen
      window.dispatchEvent(new CustomEvent('nav-changed', {
        detail: { navId, navItem }
      }))
      
      // Handle navigation (you can integrate with Vue Router here)
      handleNavigation(navItem.route)
    }
  }
  
  const handleNavigation = (route) => {
    // This can be integrated with Vue Router
    // For now, we'll just emit an event
    window.dispatchEvent(new CustomEvent('navigate', {
      detail: { route }
    }))
  }
  
  const initializeHeader = () => {
    if (isInitialized.value) return
    
    // Load saved navigation state from localStorage
    const savedNav = localStorage.getItem('airbnb-active-nav')
    if (savedNav && navigationItems.value.find(item => item.id === savedNav)) {
      activeNavItem.value = savedNav
    }
    
    // Set up scroll listener for header styling
    setupScrollListener()
    
    isInitialized.value = true
  }
  
  const setupScrollListener = () => {
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 0
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Store the cleanup function
    window._headerScrollCleanup = () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }
  
  const updateNavigationItems = (items) => {
    navigationItems.value = items
  }
  
  const addNavigationItem = (item) => {
    navigationItems.value.push(item)
  }
  
  const removeNavigationItem = (itemId) => {
    const index = navigationItems.value.findIndex(item => item.id === itemId)
    if (index > -1) {
      navigationItems.value.splice(index, 1)
    }
  }
  
  const updateUserMenuItems = (items) => {
    userMenuItems.value = items
  }
  
  const addUserMenuItem = (item) => {
    userMenuItems.value.push(item)
  }
  
  const removeUserMenuItem = (itemId) => {
    const index = userMenuItems.value.findIndex(item => item.id === itemId)
    if (index > -1) {
      userMenuItems.value.splice(index, 1)
    }
  }
  
  const handleUserAction = (action) => {
    // Handle user menu actions
    switch (action) {
      case 'signup':
        // Handle signup logic
        window.dispatchEvent(new CustomEvent('user-signup'))
        break
      case 'login':
        // Handle login logic
        window.dispatchEvent(new CustomEvent('user-login'))
        break
      case 'host-home':
        // Handle host home logic
        window.dispatchEvent(new CustomEvent('host-home'))
        break
      case 'host-experience':
        // Handle host experience logic
        window.dispatchEvent(new CustomEvent('host-experience'))
        break
      case 'help':
        // Handle help logic
        window.dispatchEvent(new CustomEvent('user-help'))
        break
      default:
        console.log('Unknown user action:', action)
    }
  }
  
  // Reset store (useful for testing or logout)
  const resetHeader = () => {
    activeNavItem.value = 'homes'
    isInitialized.value = false
    isScrolled.value = false
    localStorage.removeItem('airbnb-active-nav')
    
    // Clean up scroll listener
    if (window._headerScrollCleanup) {
      window._headerScrollCleanup()
      delete window._headerScrollCleanup
    }
  }
  
  return {
    // State
    activeNavItem,
    isInitialized,
    isScrolled,
    navigationItems,
    userMenuItems,
    
    // Computed
    currentNavItem,
    hasActiveBadge,
    primaryUserActions,
    secondaryUserActions,
    defaultUserActions,
    
    // Actions
    setActiveNav,
    handleNavigation,
    initializeHeader,
    setupScrollListener,
    updateNavigationItems,
    addNavigationItem,
    removeNavigationItem,
    updateUserMenuItems,
    addUserMenuItem,
    removeUserMenuItem,
    handleUserAction,
    resetHeader
  }
})
