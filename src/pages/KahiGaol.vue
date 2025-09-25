<template>
  <PageHeader
    :image-url="kahiImage1"
    :logo-image-url="kahiImage2"
    :content="kahiContent"
    logo-max-width="max-w-[140px] lg:max-w-[269px]"
    content-max-width="lg:max-w-[410px]"
  />
</template>
<script setup>
import PageHeader from '@/components/PageHeader.vue'
import kahiImage1 from '@/images/kahi-1.png'
import kahiImage2 from '@/images/kahi-2.png'

const kahiContent = `
  Inspired by travels through Tokyo and Hokkaido, Kohi Gaol draws from Japan’s unique coffee culture. While tea is a longstanding tradition, it is coffee that has become the preferred choice of Japan’s modern elite when socializing with friends and colleagues.
  <br />
  <br />
  From this inspiration, Kohi Gaol was created—not just as a coffee brand, but as a lifestyle experience that combines creativity, comfort, and community.
`
</script>