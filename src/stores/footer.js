import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFooterStore = defineStore('footer', () => {
  // State
  const currentLanguage = ref('en')
  const isInitialized = ref(false)
  
  // Language options
  const languages = ref([
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
  ])
  
  // Footer links data
  const footerLinks = ref({
    support: [
      { text: 'Help Center', href: '/help' },
      { text: 'AirCover', href: '/aircover' },
      { text: 'Anti-discrimination', href: '/anti-discrimination' },
      { text: 'Disability support', href: '/accessibility' },
      { text: 'Cancellation options', href: '/cancellation' },
      { text: 'Report neighborhood concern', href: '/report' }
    ],
    hosting: [
      { text: 'Airbnb your home', href: '/host' },
      { text: 'AirCover for Hosts', href: '/host-aircover' },
      { text: 'Hosting resources', href: '/hosting-resources' },
      { text: 'Community forum', href: '/community' },
      { text: 'Hosting responsibly', href: '/responsible-hosting' },
      { text: 'Airbnb-friendly apartments', href: '/apartments' }
    ],
    airbnb: [
      { text: 'Newsroom', href: '/newsroom' },
      { text: 'New features', href: '/features' },
      { text: 'Careers', href: '/careers' },
      { text: 'Investors', href: '/investors' },
      { text: 'Gift cards', href: '/gift-cards' },
      { text: 'Airbnb.org emergency stays', href: '/emergency-stays' }
    ]
  })
  
  // Computed
  const currentLanguageData = computed(() => {
    return languages.value.find(lang => lang.code === currentLanguage.value) || languages.value[0]
  })
  
  const availableLanguages = computed(() => {
    return languages.value.filter(lang => lang.code !== currentLanguage.value)
  })
  
  // Actions
  const setLanguage = (languageCode) => {
    const language = languages.value.find(lang => lang.code === languageCode)
    if (language) {
      currentLanguage.value = languageCode
      // Save to localStorage for persistence
      localStorage.setItem('airbnb-language', languageCode)
      
      // Emit custom event for other components to listen
      window.dispatchEvent(new CustomEvent('language-changed', {
        detail: { language: languageCode, languageData: language }
      }))
    }
  }
  
  const initializeFooter = () => {
    if (isInitialized.value) return
    
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('airbnb-language')
    if (savedLanguage && languages.value.find(lang => lang.code === savedLanguage)) {
      currentLanguage.value = savedLanguage
    }
    
    // Detect browser language if no saved preference
    if (!savedLanguage) {
      const browserLang = navigator.language.split('-')[0]
      const supportedLang = languages.value.find(lang => lang.code === browserLang)
      if (supportedLang) {
        currentLanguage.value = browserLang
      }
    }
    
    isInitialized.value = true
  }
  
  const getLocalizedText = (key, fallback = '') => {
    // This could be expanded to use i18n libraries like vue-i18n
    // For now, return the fallback text
    return fallback
  }
  
  const updateFooterLinks = (section, links) => {
    if (footerLinks.value[section]) {
      footerLinks.value[section] = links
    }
  }
  
  const addFooterLink = (section, link) => {
    if (footerLinks.value[section]) {
      footerLinks.value[section].push(link)
    }
  }
  
  const removeFooterLink = (section, linkText) => {
    if (footerLinks.value[section]) {
      const index = footerLinks.value[section].findIndex(link => link.text === linkText)
      if (index > -1) {
        footerLinks.value[section].splice(index, 1)
      }
    }
  }
  
  // Reset store (useful for testing or logout)
  const resetFooter = () => {
    currentLanguage.value = 'en'
    isInitialized.value = false
    localStorage.removeItem('airbnb-language')
  }
  
  return {
    // State
    currentLanguage,
    isInitialized,
    languages,
    footerLinks,
    
    // Computed
    currentLanguageData,
    availableLanguages,
    
    // Actions
    setLanguage,
    initializeFooter,
    getLocalizedText,
    updateFooterLinks,
    addFooterLink,
    removeFooterLink,
    resetFooter
  }
})
