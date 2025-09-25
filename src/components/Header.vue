<template>
  <header class="lg:fixed lg:top-0 lg:left-0 lg:right-0 z-[99]">
    <div class="relative bg-[#6C5545] lg:bg-transparent w-full h-full lg:py-[50px] py-4">
      <!--   Top Fade   -->
      <div class="absolute top-0 left-0 right-0 z-[2] hidden lg:block">
        <img src="@/images/hero-top-fade.png" alt="Hero Top Fade" />
      </div>

      <!--   Content   -->
      <div class="container mx-auto relative z-[3] px-4 lg:px-0">
        <div class="flex items-center justify-between">
          <!--     Icons     -->
          <a href="/" class="flex items-center gap-4 lg:gap-8">
            <span v-html="WML" />
            <span class="hidden lg:block" v-html="ptWml" />
          </a>

          <!--     Desktop Nav Menu     -->
          <div class="hidden lg:flex items-center gap-4 lg:gap-16 text-[#F1E8DF]">
            <a href="/about-us" class="hover:text-white transition-colors">About Us</a>
            <a href="/business-unit" class="hover:text-white transition-colors">Business unit</a>
            <a href="/news-and-event" class="hover:text-white transition-colors">News & event</a>
            <a href="/contact-us" class="hover:text-white transition-colors">Contact us</a>
          </div>

          <!--     Mobile Hamburger Button     -->
          <button
            @click="toggleMobileMenu"
            class="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            :class="{ 'active': isMobileMenuOpen }"
          >
            <span
              class="block w-6 h-0.5 bg-[#F1E8DF] transition-all duration-300 ease-in-out"
              :class="{ 'rotate-45 translate-y-2': isMobileMenuOpen }"
            ></span>
            <span
              class="block w-6 h-0.5 bg-[#F1E8DF] transition-all duration-300 ease-in-out"
              :class="{ 'opacity-0': isMobileMenuOpen }"
            ></span>
            <span
              class="block w-6 h-0.5 bg-[#F1E8DF] transition-all duration-300 ease-in-out"
              :class="{ '-rotate-45 -translate-y-2': isMobileMenuOpen }"
            ></span>
          </button>
        </div>
      </div>
    </div>

    <!--   Mobile Menu Overlay   -->
    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-[100] lg:hidden"
      @click="closeMobileMenu"
    ></div>

    <!--   Mobile Slide Menu   -->
    <div
      class="fixed top-0 left-0 right-0 w-full bg-[#6C5545] transform transition-transform duration-300 ease-in-out z-[101] lg:hidden min-h-screen"
      :class="{ 'translate-y-0': isMobileMenuOpen, '-translate-y-full': !isMobileMenuOpen }"
    >
      <div class="flex flex-col min-h-screen">
        <!--   Mobile Menu Header   -->
        <div class="flex items-center justify-between p-6">
          <div class="flex items-center gap-4">
            <span v-html="WML" />
          </div>
          <button
            @click="closeMobileMenu"
            class="w-10 h-10 flex items-center justify-center text-[#F1E8DF] hover:text-white rounded-full hover:bg-gray-800 transition-all"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!--   Mobile Menu Items   -->
        <nav class="flex-1 py-8">
          <div class="flex flex-col space-y-1">
            <a
              href="/about-us"
              @click="closeMobileMenu"
              class="block px-6 py-5 text-[#F1E8DF] hover:text-white hover:bg-gray-800 transition-colors text-lg"
            >
              About Us
            </a>
            <a
              href="/business-unit"
              @click="closeMobileMenu"
              class="block px-6 py-5 text-[#F1E8DF] hover:text-white hover:bg-gray-800 transition-colors text-lg"
            >
              Business unit
            </a>
            <a
              href="/news-and-event"
              @click="closeMobileMenu"
              class="block px-6 py-5 text-[#F1E8DF] hover:text-white hover:bg-gray-800 transition-colors text-lg"
            >
              News & event
            </a>
            <a
              href="/contact-us"
              @click="closeMobileMenu"
              class="block px-6 py-5 text-[#F1E8DF] hover:text-white hover:bg-gray-800 transition-colors text-lg"
            >
              Contact us
            </a>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import WML from '@/images/WML.svg?raw'
import ptWml from '@/images/pt-wml.svg?raw'

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Close menu on escape key
const handleEscape = (event) => {
  if (event.key === 'Escape') {
    closeMobileMenu()
  }
}

// Prevent body scroll when menu is open
const updateBodyScroll = () => {
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

// Watch for menu state changes
import { watch } from 'vue'
watch(isMobileMenuOpen, updateBodyScroll)

// Add event listeners
onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

// Cleanup event listeners
onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  // Restore body scroll on unmount
  document.body.style.overflow = ''
})
</script>