<template>
  <section
    class="c-titleimage py-8 lg:py-[100px]"
    :style="{ backgroundColor: backgroundColor }"
  >
    <div class="container mx-auto px-4">
      <div class="text-center">
        <h2
          v-if="title"
          class="text-[#6C5545] mb-8"
        >
          {{ title }}
        </h2>

        <div
          v-if="image"
          :class="imageMaxWidth"
          class="flex justify-center"
        >
          <img
            :src="image"
            :alt="title || 'Section image'"
            class="object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Define component props
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  imageMaxWidth: {
    type: String,
    default: ''
  },
  backgroundColor: {
    type: String,
    default: '#ffffff'
  }
})
</script>

<style scoped>
.c-titleimage {
  min-height: auto;
}

.c-titleimage img {
  transition: opacity 0.3s ease;
}

.c-titleimage img:hover {
  opacity: 0.9;
}
</style>