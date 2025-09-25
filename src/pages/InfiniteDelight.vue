<template>
  <PageHeader
    :image-url="delightImage1"
    :logo-image-url="delightImage2"
    :content="delightContent"
    logo-max-width="max-w-[135px] lg:max-w-[272px]"
    content-max-width="lg:max-w-[455px]"
  />
  <CopyImage
    :image-url="delightCopyImage1"
    heading="Crafted with Care, Wrapped in Elegance"
    :content="missionContent"
    image-alignment="right"
    background-color="#6C5545"
  />
</template>
<script setup>
import PageHeader from '@/components/PageHeader.vue'
import delightImage1 from '@/images/delight-1.png'
import delightImage2 from '@/images/delight-2.png'
import CopyImage from '@/components/CopyImage.vue'
import delightCopyImage1 from '@/images/delight-copy-1.png'

// Page Header props
const delightContent = `
  Founded in 2009, <strong>Infinite Delight</strong> was born from a heartfelt gesture—the founder's wish to create a truly
  special and elegant souvenir for his brother's wedding. The overwhelmingly positive response inspired the
  beginning of a premium cookie brand that blends artistry, flavor, and thoughtful presentation.
`

// Copy Image 1 props
const missionContent = `
Every cookie is made using only the finest ingredients, then individually wrapped to preserve freshness and presented in sophisticated gift boxes.
<br />
<br />
Drawing inspiration from both European and Japanese aesthetics, Infinite Delight is defined by its clean, refined, and timeless style—making it the perfect gift for life’s most memorable occasions.
`
</script>