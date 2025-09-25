<template>
  <PageHeader
    :image-url="distributorImage1"
    :logo-image-url="distributorImage2"
    :content="kahiContent"
    logo-max-width="max-w-[140px] lg:max-w-[269px]"
    after-logo-text="Distribution Excellence You Can Rely On"
    content-max-width="lg:max-w-[410px]"
  />
</template>
<script setup>
import PageHeader from '@/components/PageHeader.vue'
import distributorImage1 from '@/images/distributor-1.png'
import distributorImage2 from '@/images/distributor-2.png'

const kahiContent = `
  At PT Wahana Mekar Lestari, we are committed to delivering <strong>high-quality products with efficiency, reliability, and care</strong>. Our distribution unit has proudly served over <strong>1,000 customers</strong> across key regions in <strong>West Java, Central Java, and Yogyakarta</strong>, ensuring every delivery reaches our partners on time and in perfect condition.
  <br />
  <br />
  <strong>Our Strengths</strong> - Backed by a well-structured logistics network and a dedicated operations team, we guarantee seamless distribution while maintaining the integrity of every product we handle.
`
</script>