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
      <div class="content-wrapper bg-[#F1E8DF] flex flex-col items-center justify-end p-8 lg:items-start lg:p-[88px]">
        <div class="mb-8 lg:mb-[80px]">
          <img
            class="mb-2"
            :class="logoMaxWidth"
            :src="logoImageUrl"
            :alt="logoAlt || 'Logo'"
          />
          <p class="text-xs text-[#6C5545]" v-if="afterLogoText" v-html="afterLogoText"></p>
        </div>
        <div
          class="text-[#6C5545]"
          :class="contentMaxWidth"
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
    required: true
  },

  // Content text (required, can include HTML)
  content: {
    type: String,
    required: true
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
  }
})
</script>