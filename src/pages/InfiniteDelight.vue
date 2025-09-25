<template>
  <PageHeader
    :image-url="delightImage1"
    :logo-image-url="delightImage2"
    :content="delightContent"
    logo-max-width="max-w-[135px] lg:max-w-[272px]"
    content-max-width="lg:max-w-[455px]"
  />
</template>
<script setup>
import PageHeader from '@/components/PageHeader.vue'
import delightImage1 from '@/images/delight-1.png'
import delightImage2 from '@/images/delight-2.png'

const delightContent = `
  Founded in 2009, <strong>Infinite Delight</strong> was born from a heartfelt gesture—the founder's wish to create a truly
  special and elegant souvenir for his brother's wedding. The overwhelmingly positive response inspired the
  beginning of a premium cookie brand that blends artistry, flavor, and thoughtful presentation.
`
</script>