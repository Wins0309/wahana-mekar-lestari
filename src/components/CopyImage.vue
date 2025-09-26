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
        class="content-wrapper bg-[#F1E8DF] flex flex-col items-center justify-end p-8 lg:items-start lg:p-[88px]"
        :class="{
          'lg:order-1': imageAlignment === 'right',
          'lg:order-2': imageAlignment === 'left',
          'lg:items-end lg:text-left': imageAlignment === 'left' && !centerContent,
          'lg:items-start lg:text-left': imageAlignment === 'right' && !centerContent
        }"
      >
        <h2
          class="font-bold text-[#6C5545] mb-6 lg:mb-8"
          :class="contentMaxWidth"
        >
          {{ heading }}
        </h2>
        <div
          class="text-[#6C5545]"
          :class="contentMaxWidth"
          v-html="content"
        ></div>

        <!--   Contact Us Buttons   -->
        <div v-if="contactUs && contactUs.length > 0" class="flex flex-col gap-4 mt-6 lg:mt-8 w-full">
          <a
            v-for="(contact, index) in contactUs"
            :key="index"
            :href="`tel:${contact.phoneNumber}`"
            class="contact-btn lg:max-w-[300px] flex items-center justify-start p-[12px] gap-1 lg:gap-2 bg-[#6C5545] rounded-[50px] hover:bg-[#5A4938] transition-colors"
          >
            <!-- WhatsApp Icon SVG -->
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C8.23277 20.003 6.4966 19.5353 4.97002 18.645L0.00401546 20L1.35602 15.032C0.464974 13.5049 -0.00308163 11.768 1.52687e-05 10C1.52687e-05 4.477 4.47702 0 10 0ZM6.59202 5.3L6.39201 5.308C6.26271 5.31691 6.13636 5.35087 6.02002 5.408C5.91159 5.46951 5.81258 5.5463 5.72602 5.636C5.60602 5.749 5.53802 5.847 5.46502 5.942C5.09514 6.4229 4.89599 7.01331 4.89902 7.62C4.90102 8.11 5.02902 8.587 5.22902 9.033C5.63802 9.935 6.31102 10.89 7.19902 11.775C7.41302 11.988 7.62302 12.202 7.84902 12.401C8.95245 13.3724 10.2673 14.073 11.689 14.447L12.257 14.534C12.442 14.544 12.627 14.53 12.813 14.521C13.1042 14.5056 13.3885 14.4268 13.646 14.29C13.7769 14.2223 13.9047 14.1489 14.029 14.07C14.029 14.07 14.0714 14.0413 14.154 13.98C14.289 13.88 14.372 13.809 14.484 13.692C14.568 13.6053 14.638 13.5047 14.694 13.39C14.772 13.227 14.85 12.916 14.882 12.657C14.906 12.459 14.899 12.351 14.896 12.284C14.892 12.177 14.803 12.066 14.706 12.019L14.124 11.758C14.124 11.758 13.254 11.379 12.722 11.137C12.6663 11.1128 12.6067 11.0989 12.546 11.096C12.4776 11.0888 12.4084 11.0965 12.3432 11.1184C12.278 11.1403 12.2182 11.176 12.168 11.223C12.163 11.221 12.096 11.278 11.373 12.154C11.3315 12.2098 11.2744 12.2519 11.2088 12.2751C11.1433 12.2982 11.0723 12.3013 11.005 12.284C10.9398 12.2666 10.876 12.2446 10.814 12.218C10.69 12.166 10.647 12.146 10.562 12.11C9.98789 11.8599 9.45646 11.5215 8.98702 11.107C8.86102 10.997 8.74402 10.877 8.62402 10.761C8.23063 10.3842 7.88777 9.95799 7.60401 9.493L7.54501 9.398C7.50328 9.3338 7.46905 9.26501 7.44302 9.193C7.40502 9.046 7.50402 8.928 7.50402 8.928C7.50402 8.928 7.74702 8.662 7.86002 8.518C7.97002 8.378 8.06301 8.242 8.12302 8.145C8.24102 7.955 8.27802 7.76 8.21602 7.609C7.93602 6.925 7.64668 6.24467 7.34802 5.568C7.28902 5.434 7.11402 5.338 6.95502 5.319C6.90102 5.31233 6.84701 5.307 6.79302 5.303C6.65874 5.2953 6.52411 5.29664 6.39002 5.307L6.59202 5.3Z"
                fill="#F1E8DF"/>
            </svg>
            <!-- Contact Name -->
            <span class="text-[#F1E8DF] text-base font-bold font-['Proxima_Nova'] leading-tight">{{ contact.name }}</span>
            <!-- Phone Number -->
            <span class="text-[#F1E8DF] text-base font-normal font-['Proxima_Nova'] leading-tight">{{
                contact.phoneNumber
              }}</span>
          </a>
        </div>
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
  },

  // Contact us buttons array (optional)
  contactUs: {
    type: Array,
    default: () => [],
    validator: (value) => {
      return value.every(contact =>
        contact &&
        typeof contact === 'object' &&
        typeof contact.name === 'string' &&
        typeof contact.phoneNumber === 'string'
      )
    }
  }
})
</script>