<template>
  <CopyImage content="On June 1st, 2025, Kohi Gaol hosted a highly anticipated Cosplay Competition that showcased the creativity and talent of cosplayers from various backgrounds. The event was a huge success, with participants enthusiastically taking part in the competition."
             content-max-width="lg:max-w-[420px]"
             content-color="#F1E8DF"
             eyebrow="June 1st 2025"
             heading="Cosplay Competition Held at Kohi Gaol on June 1st, 2025"
             :image-url="CoffeePack1"
             image-alignment="left"
             background-color="#6C5545"
  />
  <CopyImage :content="coffeeContent"
             content-max-width="lg:max-w-[450px]"
             :image-url="CoffeePack2"
             image-alignment="right"
  />
</template>
<script setup>
import CopyImage from '@/components/CopyImage.vue'
import CoffeePack1 from '@/images/coffee-pack-1.png'
import CoffeePack2 from '@/images/coffee-pack-2.png'

const coffeeContent = `
    <h4 class="mb-2">Smooth Execution</h4>
    <p class="!text-[14px] mb-6 lg:mb-8">
        The competition was held smoothly, with participants displaying their impressive costumes and performances on stage. The event was well-organized, with a clear schedule and efficient management, ensuring that everything ran according to plan.
    </p>

    <h4 class="mb-2">Enthusiastic Participants</h4>
    <p class="!text-[14px] mb-6 lg:mb-8">
        The participants were highly enthusiastic about the competition, showcasing their passion for cosplay through their intricate costumes and engaging performances. The audience was also supportive, cheering on their favorite participants and adding to the lively atmosphere.
    </p>

    <h4 class="mb-2">A Showcase of Creativity</h4>
    <p class="!text-[14px] mb-6 lg:mb-8">
        The competition was a showcase of creativity and talent, with participants bringing their favorite characters to life through their costumes and performances. The event was a great opportunity for cosplayers to share their passion with others and connect with like-minded individuals.
    </p>

    <h4 class="mb-2">A Successful Event</h4>
    <p class="!text-[14px] mb-6 lg:mb-8">
        Overall, the Cosplay Competition at Kohi Gaol was a successful event that brought together cosplayers and fans alike. The event was well-received by participants and audience members, and it is expected to become an annual fixture in the cosplay calendar.
    </p>

    <a href="/news-and-events" class="flex items-center gap-4 hover:underline">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
        <path d="M7 7L1 13L7 19" stroke="#6C5545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M25 1C25 4.1826 23.7357 7.23484 21.4853 9.48528C19.2348 11.7357 16.1826 13 13 13H1" stroke="#6C5545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="text-[#6C5545]">Back to news & events</span>
    </a>
`
</script>