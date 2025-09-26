<template>
  <PageHeader
    :image-url="kahiImage1"
    :logo-image-url="kahiImage2"
    :content="kahiContent"
    logo-max-width="max-w-[140px] lg:max-w-[269px]"
    content-max-width="lg:max-w-[410px]"
  />
  <CopyImage
    :image-url="kahiCopy1"
    heading="A place to connect"
    :content="connectContent"
    content-max-width="lg:max-w-[437px]"
    contentColor="#6C5545"
    image-alignment="right"
    background-color="#F1E8DF"
  />
  <Offerings />
  <Location />
</template>
<script setup>
import PageHeader from '@/components/PageHeader.vue'
import kahiImage1 from '@/images/kahi-1.png'
import kahiImage2 from '@/images/kahi-2.png'
import kahiCopy1 from '@/images/kahi-copy-1.png'
import CopyImage from '@/components/CopyImage.vue'
import Offerings from '@/components/Offerings.vue'
import Location from '@/components/Location.vue'

const kahiContent = `
  Inspired by travels through Tokyo and Hokkaido, Kohi Gaol draws from Japan’s unique coffee culture. While tea is a longstanding tradition, it is coffee that has become the preferred choice of Japan’s modern elite when socializing with friends and colleagues.
  <br />
  <br />
  From this inspiration, Kohi Gaol was created—not just as a coffee brand, but as a lifestyle experience that combines creativity, comfort, and community.
`

//Copy image 1 props
const connectContent = `
Kohi Gaol offers more than coffee—it’s a welcoming space to relax, unwind, and share meaningful conversations with friends. Every cup reflects our passion for blending quality beans with a modern, stylish atmosphere.`
</script>