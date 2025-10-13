<template>
  <PageHeader
    :image-url="AboutImage"
    :content="aboutContent"
    content-heading="About Us"
    content-color="text-white"
    logo-max-width="max-w-[135px] lg:max-w-[272px]"
    content-max-width="lg:max-w-[455px]"
    :background-image="aboutBg"
  />
  <VisionMission />
  <TitleImage title="Our Locations" :image="location" image-max-width="lg:max-w-[1200px]"/>
</template>
<script setup>
import AboutImage from '@/images/about.png'
import PageHeader from '@/components/PageHeader.vue'
import aboutBg from '@/images/about-bg.png'
import TitleImage from '@/components/TitleImage.vue'
import location from '@/images/location.png'
import VisionMission from '@/components/VisionMission.vue'

const aboutContent = `
Founded in 2009, PT Wahana Mekar Lestari (WML) is a diversified holdings company dedicated to excellence in the food and beverage industry. Our portfolio encompasses premium cookies, modern cafés, cookie crumbs, HoReCa supplies, food and beverage distribution, and catering services.
<br />
<br />
At WML, we are committed to delivering high-quality products, innovative solutions, and exceptional service. By focusing on customer satisfaction and fostering trust-based, long-term partnerships, we continue to build strong, collaborative relationships that drive mutual growth and success.
`
</script>