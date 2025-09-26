<template>
  <section class="c-banner bg-[#DCD5C5] py-[64px] lg:py-[137px]">
    <div class="container mx-auto">
      <div v-if="heading"
           :class="headingClass"
           class="text-center mx-auto justify-start text-[#6C5545] text-3xl font-bold font-['Proxima_Nova'] leading-9 tracking-tight [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.05)]">
        {{ heading }}
      </div>
      <div v-if="content"
           class="lg:max-w-96 mt-4 lg:mt-6 mx-auto text-center justify-start text-[#6C5545] text-base font-normal font-['Proxima_Nova'] leading-tight">
        {{ content }}
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  heading: {
    type: String,
    default: '“Cherish the moment, share the cookies”'
  },
  headingClass: {
    type: String,
    default: null
  },
  content: {
    type: String,
    default: 'we also offer custom cookie selections and personalized gift boxes—crafted together with you to create the perfect gift that meets your expectations and leaves a lasting impression.'
  }
})
</script>