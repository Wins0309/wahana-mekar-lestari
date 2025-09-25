<template>
  <section class="c-image-content" :style="{ backgroundColor: backgroundColor }">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <!--   Image Content   -->
      <div
        class="image-wrapper aspect-square lg:aspect-auto mb-8 lg:mb-0 lg:h-[100vh] lg:max-h-[100vh]"
        :class="{ 'lg:order-2': imageAlignment === 'right', 'lg:order-1': imageAlignment === 'left' }"
      >
        <img
          class="w-full h-full object-cover"
          :src="imageUrl"
          :alt="imageAlt || 'Section Image'"
        />
      </div>

      <!--   Content Section   -->
      <div
        class="content-wrapper flex flex-col items-center justify-center p-8 lg:items-start lg:p-[88px]"
        :class="{
          'lg:order-1': imageAlignment === 'right',
          'lg:order-2': imageAlignment === 'left',
          'lg:items-end lg:text-right': imageAlignment === 'left' && !centerContent,
          'lg:items-start lg:text-left': imageAlignment === 'right' && !centerContent
        }"
      >
        <h2
          class="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8"
          :style="{'color': contentColor}"
          :class="contentMaxWidth"
        >
          {{ heading }}
        </h2>
        <div
          :style="{'color': contentColor}"
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

  // Heading text (required)
  heading: {
    type: String,
    required: true
  },

  // Content text (required, can include HTML)
  content: {
    type: String,
    required: true
  },

  contentColor: {
    type: String,
    default: '#FFFFFF'
  },

  // Image alignment: 'left' or 'right' (optional)
  imageAlignment: {
    type: String,
    default: 'right',
    validator: (value) => ['left', 'right'].includes(value)
  },

  // Background color for the whole section (optional)
  backgroundColor: {
    type: String,
    default: 'transparent'
  },

  // Optional alt text for main image
  imageAlt: {
    type: String,
    default: ''
  },

  // Content max width classes (optional)
  contentMaxWidth: {
    type: String,
    default: ''
  },

  // Center content alignment regardless of image position
  centerContent: {
    type: Boolean,
    default: false
  }
})
</script>