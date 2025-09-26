<template>
  <PageHeader
    :image-url="horecaImage1"
    :logo-image-url="horecaImage2"
    :content="horecaContent"
    logo-max-width="max-w-[140px] lg:max-w-[250px]"
    after-logo-text="Hotel, Restaurant & Cafe"
    content-max-width="lg:max-w-[410px]"
  />
  <TitleImage
    title="Trusted by"
    :image="horecaTrusted"
    image-max-width="lg:max-w-[1200px]"
    background-color="#f8f9fa"
  />
  <Banner heading='“To build strong, lasting partnerships and grow together with you.”'
          :heading-class="'lg:max-w-[550px]'" :content="null"/>
  <CopyImage
    :image-url="horecaCopy1"
    heading="Collaboration for Innovation"
    :content="horecaContent2"
    content-max-width="lg:max-w-[437px]"
    contentColor="#6C5545"
    image-alignment="left"
    background-color="#F1E8DF"
    :contact-us="[
    { name: 'Admin', phoneNumber: '081292986823' },
    { name: 'Branch Manager', phoneNumber: '081213588129' },
    { name: 'Office', phoneNumber: '02180455208' }
  ]"
  />
</template>
<script setup>
import PageHeader from '@/components/PageHeader.vue'
import horecaImage1 from '@/images/horeca-1.png'
import horecaImage2 from '@/images/horeca-2.png'
import horecaTrusted from '@/images/trusted.png'
import TitleImage from '@/components/TitleImage.vue'
import Banner from '@/components/Banner.vue'
import horecaCopy1 from '@/images/horeca-copy-1.png'
import CopyImage from '@/components/CopyImage.vue'

const horecaContent = `
 As the <strong>sole distributor of “Biscuit Crumbs” by PT Serena Indopangan Industri</strong>, we are dedicated to delivering <strong>high-quality Food & Beverage products</strong> that meet the evolving needs of our partners. Our commitment is built on trust, innovation, and excellence—ensuring every collaboration creates lasting value.
 <br />
 <br />
 <strong>Our Promise</strong> - We focus on more than just supply—we provide solutions. By prioritizing customer satisfaction and strong partnerships, we help our clients stay ahead in an industry that thrives on creativity and innovation.
`

//Copy Image 1 props
const horecaContent2 = `
The Food & Beverage industry is growing rapidly, demanding constant creativity in both food and beverage innovations. At HoReCa Solutions, we embrace collaboration as the key to unlocking new product possibilities that excite and delight culinary enthusiasts.
<br />
<br />
<strong>“Competition makes us faster, collaboration makes us better.”</strong>
<br />
<br />
Together, we can grow as trusted partners—bringing joy, satisfaction, and innovation to the Food & Beverage world through exceptional products, services, and solutions.
`
</script>