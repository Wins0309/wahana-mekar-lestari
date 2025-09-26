<script setup>
import { ref, computed } from 'vue'
import Header from '@/components/Header.vue'
import NotFound from '@/pages/NotFound.vue'
import Home from '@/pages/Home.vue'
import InfiniteDelight from '@/pages/InfiniteDelight.vue'
import KahiGaol from '@/pages/KahiGaol.vue'
import Horeca from '@/pages/Horeca.vue'
import Footer from '@/components/Footer.vue'
import Distributor from '@/pages/Distributor.vue'
import AboutUs from '@/pages/AboutUs.vue'
import ContactUs from '@/pages/ContactUs.vue'

const currentPath = ref(window.location.pathname)

const routes = {
  '/': Home,
  '/infinite-delight': InfiniteDelight,
  '/kahi-gaol': KahiGaol,
  '/horeca': Horeca,
  '/distributor': Distributor,
  '/about-us': AboutUs,
  '/contact-us': ContactUs
}

// Listen for browser back/forward button clicks
window.addEventListener('popstate', () => {
  currentPath.value = window.location.pathname
})

// Function to navigate programmatically
const navigate = (path) => {
  window.history.pushState({}, '', path)
  currentPath.value = path
}

// Make navigate available globally (optional)
window.navigate = navigate

const currentView = computed(() => {
  return routes[currentPath.value] || NotFound
})
</script>

<template>
  <Header />
  <component :is="currentView" />
  <Footer />
</template>