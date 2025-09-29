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
    content-max-width="lg:max-w-[407px]"
    image-alignment="right"
    background-color="#6C5545"
   content-color="#F1E8DF"/>
  <CopyImage
    :image-url="delightCopyImage2"
    heading="Our journey"
    :content="journeyContent"
    content-max-width="lg:max-w-[421px]"
    contentColor="#6C5545"
    image-alignment="left"
    background-color="#F1E8DF"
  />
  <CopyImage
    :image-url="delightCopyImage3"
    heading="Hampers and Personalized Gifts"
    :content="hampersContent"
    content-max-width="lg:max-w-[437px]"
    contentColor="#6C5545"
    image-alignment="right"
    background-color="#F1E8DF"
  />
  <Banner />
  <VisitUs />
</template>
<script setup>
import PageHeader from '@/components/PageHeader.vue'
import delightImage1 from '@/images/delight-1.png'
import delightImage2 from '@/images/delight-2.png'
import CopyImage from '@/components/CopyImage.vue'
import delightCopyImage1 from '@/images/delight-copy-1.png'
import delightCopyImage2 from '@/images/delight-copy-2.png'
import delightCopyImage3 from '@/images/delight-copy-3.png'
import Banner from '@/components/Banner.vue'
import VisitUs from '@/components/VisitUs.vue'

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

//Copy Image 2 props
const journeyContent = `
Since opening our first showroom in July 2011 at Gedung Wirausaha, Jakarta, Infinite Delight has grown through word of mouth and recognition in leading lifestyle publications such as Harper’s Bazaar (Wedding Ideas) and Good Housekeeping (Fresh Market Innovations).
<br />
<br />
Today, we proudly serve both individuals and corporations—providing elegant cookie gifts for weddings, engagements, anniversaries, birthdays, holidays, and professional occasions. Our clientele includes major banks, oil companies, and leading businesses, alongside countless families who trust us to sweeten their celebrations.
`

//Copy Image 3 props
const hampersContent = `
Beyond our signature collections, we offer custom cookie assortments and personalized gift boxes, carefully crafted in collaboration with each client.
<br />
<br />
Whether for a wedding favor, a festive hamper, or a corporate gift, Infinite Delight ensures every detail reflects your taste, your values, and your desire to leave a lasting impression.`
</script>