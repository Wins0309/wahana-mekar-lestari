<template>
  <PageHeader
    :image-url="distributorImage1"
    :logo-image-url="distributorImage2"
    :content="kahiContent"
    logo-max-width="max-w-[140px] lg:max-w-[269px]"
    after-logo-text="Distribution Excellence You Can Rely On"
    content-max-width="lg:max-w-[410px]"
  />
  <CopyImage
    :image-url="horecaCopy1"
    heading="Collaboration for Innovation"
    content-max-width="lg:max-w-[437px]"
    contentColor="#6C5545"
    image-alignment="left"
    background-color="#F1E8DF"
    :contact-us="[
    { name: 'Admin', phoneNumber: '081292986823' },
    { name: 'Branch Manager', phoneNumber: '081213588129' },
    { name: 'Office', phoneNumber: '02180455208' }
  ]"
   content=""/>
</template>
<script setup>
import PageHeader from '@/components/PageHeader.vue'
import distributorImage1 from '@/images/distributor-1.png'
import distributorImage2 from '@/images/distributor-2.png'
import horecaCopy1 from '@/images/horeca-copy-1.png'
import CopyImage from '@/components/CopyImage.vue'

const kahiContent = `
  At PT Wahana Mekar Lestari, we are committed to delivering <strong>high-quality products with efficiency, reliability, and care</strong>. Our distribution unit has proudly served over <strong>1,000 customers</strong> across key regions in <strong>West Java, Central Java, and Yogyakarta</strong>, ensuring every delivery reaches our partners on time and in perfect condition.
  <br />
  <br />
  <strong>Our Strengths</strong> - Backed by a well-structured logistics network and a dedicated operations team, we guarantee seamless distribution while maintaining the integrity of every product we handle.
`
</script>