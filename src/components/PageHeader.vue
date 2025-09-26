<template>
  <section class="c-pageheader">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <!--   Image Content   -->
      <div class="image-wrapper aspect-square lg:aspect-auto lg:h-[100vh] lg:max-h-[100vh]">
        <img
          class="w-full h-full object-cover"
          :src="imageUrl"
          :alt="imageAlt || 'Page Header Image'"
        />
      </div>

      <!--   Content Section   -->
      <div class="content-wrapper relative bg-[#F1E8DF] flex flex-col items-center justify-end p-8 lg:items-start lg:p-[88px]">
        <div v-if="backgroundImage" class="absolute top-0 left-0 right-0 bottom-0 z-[1]">
          <img class="w-full h-full object-cover" :src="backgroundImage" alt="Background Image" />
        </div>
        <div class="relative flex flex-col items-center lg:items-start mb-8 lg:mb-[80px] z-[2]">
          <img
            v-if="logoImageUrl"
            class="mb-2"
            :class="logoMaxWidth"
            :src="logoImageUrl"
            :alt="logoAlt || 'Logo'"
          />
          <p class="text-xs text-[#6C5545]" v-if="afterLogoText" v-html="afterLogoText"></p>
        </div>
        <h2 v-if="contentHeading" class="relative z-[2] mb-8 lg:mb-[50px]" :class="contentColor" v-html="contentHeading"></h2>
        <div
          class="relative z-[2]"
          :class="[contentMaxWidth, contentColor]"
          v-html="content"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Define props with validation
const props = defineProps({
  // Main image URL (required)
  imageUrl: {
    type: String,
    required: true
  },

  // Logo image URL (required)
  logoImageUrl: {
    type: String,
    required: false,
    default: null
  },

  // Content text (required, can include HTML)
  content: {
    type: String,
    required: true
  },

  contentHeading: {
    type: String,
    required: false
  },

  //Content color
  contentColor: {
    type: String,
    required: false,
    default: 'text-[#6C5545]'
  },

  // Optional alt text for main image
  imageAlt: {
    type: String,
    default: ''
  },

  // Optional alt text for logo
  logoAlt: {
    type: String,
    default: ''
  },

  // Logo max width classes (optional)
  logoMaxWidth: {
    type: String,
    default: ''
  },

  //After logo text
  afterLogoText: {
    type: String,
    default: null
  },

  // Content max width classes (optional)
  contentMaxWidth: {
    type: String,
    default: ''
  },

  //Background image (content section only)
  backgroundImage: {
    type: String,
    default: null
  }
})
</script>