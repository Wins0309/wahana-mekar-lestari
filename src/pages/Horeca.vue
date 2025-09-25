<template>
  <PageHeader
    :image-url="horecaImage1"
    :logo-image-url="horecaImage2"
    :content="kahiContent"
    logo-max-width="max-w-[140px] lg:max-w-[250px]"
    after-logo-text="Hotel, Restaurant & Cafe"
    content-max-width="lg:max-w-[410px]"
  />
</template>
<script setup>
import PageHeader from '@/components/PageHeader.vue'
import horecaImage1 from '@/images/horeca-1.png'
import horecaImage2 from '@/images/horeca-2.png'

const kahiContent = `
 As the <strong>sole distributor of “Biscuit Crumbs” by PT Serena Indopangan Industri</strong>, we are dedicated to delivering <strong>high-quality Food & Beverage products</strong> that meet the evolving needs of our partners. Our commitment is built on trust, innovation, and excellence—ensuring every collaboration creates lasting value.
 <br />
 <br />
 <strong>Our Promise</strong> - We focus on more than just supply—we provide solutions. By prioritizing customer satisfaction and strong partnerships, we help our clients stay ahead in an industry that thrives on creativity and innovation.
`
</script>