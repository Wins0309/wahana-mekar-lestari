<template>
  <section class="c-news-events py-16 lg:pt-[175px] lg:pb-[100px] bg-[#e8e0d6]">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <h2 class="text-center text-[#6C5545] mb-12">
        News & Event
      </h2>

      <!-- Swiper Container -->
      <div class="relative lg:px-[100px]">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :navigation="{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }"
          :breakpoints="{
            768: {
              slidesPerView: 3,
              spaceBetween: 56,
            }
          }"
          class="news-swiper"
        >
          <swiper-slide v-for="(item, index) in newsItems" :key="index" class="!h-auto">
            <a :href="item.link" class="news-card bg-white rounded-[10px] overflow-hidden shadow-lg h-full flex flex-col hover:opacity-90">
              <!-- Image -->
              <div class="relative h-64 overflow-hidden">
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-full h-full object-cover"
                />
                <!-- Overlay -->
                <div class="absolute inset-0 bg-gradient-to-b from-[rgba(77,58,49,0.81)] via-[rgba(77,58,49,0.36)] to-transparent"></div>
              </div>

              <!-- Content -->
              <div class="p-6 lg:px-8 bg-[#6C5545] text-[#F1E8DF] flex-grow flex flex-col items-center justify-start">
                <div class="text-sm text-gray-200 mb-2">{{ item.date }}</div>
                <h4 class="text-[25px] font-bold mb-4 lg:mb-8 text-center">{{ item.title }}</h4>
                <p class="text-center">{{ item.description }}</p>
              </div>
            </a>
          </swiper-slide>
        </swiper>

        <!-- Custom Navigation -->
        <div class="flex items-center justify-center gap-4 mt-4">
          <div class="swiper-button-prev-custom z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#8b6f47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

          <div class="swiper-button-next-custom z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="#8b6f47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { ref } from 'vue'

//Import images
import Image1 from '@/images/news-1.png'
import Image2 from '@/images/news-2.png'
import Image3 from '@/images/news-3.png'

// Swiper modules
const modules = [Navigation]

// Sample news data - replace with your actual data
const newsItems = ref([
  {
    date: 'June 1st 2025',
    title: 'Cosplay Costume Competition',
    description: 'The Cosplay Competition at Kohi Gaol was a successful event that brought together cosplayers and fans alike.',
    image: Image1,
    link: '/news-and-events/coffee-pack'
  },
  {
    date: 'March 12th 2025',
    title: 'Hampers Idul Fitri',
    description: 'Infinite Delights Ramadhan special hampers offer a range of mouth-watering menu options.',
    image: Image2,
    link: '/news-and-events/hampers-idul-fitri'
  },
  {
    date: 'June 1st 2025',
    title: 'Our New Menu',
    description: 'Every month, we drop a brand-new menu for you to sip, taste, and fall in love with. Don\'t miss out—because once it\'s gone, it\'s gone!',
    image: Image3,
    link: '/news-and-events/our-new-menu'
  },
  {
    date: 'June 1st 2025',
    title: 'Cosplay Costume Competition',
    description: 'The Cosplay Competition at Kohi Gaol was a successful event that brought together cosplayers and fans alike.',
    image: Image1,
    link: '/news-and-events/coffee-pack'
  },
  {
    date: 'March 12th 2025',
    title: 'Hampers Idul Fitri',
    description: 'Infinite Delights Ramadhan special hampers offer a range of mouth-watering menu options.',
    image: Image2,
    link: '/news-and-events/hampers-idul-fitri'
  },
  {
    date: 'June 1st 2025',
    title: 'Our New Menu',
    description: 'Every month, we drop a brand-new menu for you to sip, taste, and fall in love with. Don\'t miss out—because once it\'s gone, it\'s gone!',
    image: Image3,
    link: '/news-and-events/our-new-menu'
  }
])
</script>