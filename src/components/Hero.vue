<template>
  <section class="c-hero">
    <div class="grid grid-cols-1 lg:grid-cols-4 h-[100vh] lg:max-h-[100vh] overflow-hidden relative">
      <!-- Grid Item 1 -->
      <a href="/infinite-delight" class="w-full h-full overflow-hidden group cursor-pointer relative">
        <!--    Background Image    -->
        <img
          src="@/images/infinite-delight.png"
          alt="Infinite Delight"
          class="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <!--    Background Fade Mobile    -->
        <div class="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[#6C5545]/0 to-[#6C5545]/70 lg:hidden"></div>
        <!--    Background Fade    -->
        <div class="absolute top-0 left-0 right-0 bottom-0">
          <img class="w-full h-full object-cover" src="@/images/hero-fade.png" alt="Hero Fade "/>
        </div>
        <!--    Logo and Learn More    -->
        <div class="absolute bottom-[50%] translate-y-[50%] lg:translate-y-0 lg:bottom-[100px] left-0 right-0 flex flex-col items-center gap-4 lg:gap-8 z-[2] lg:px-[87px]">
          <img class="max-w-[100px] lg:max-w-[187px]" src="@/images/logo-1.png" alt="Logo 1" />
          <div class="hover:underline text-[#F1E8DF]">Learn More</div>
        </div>
      </a>

      <!-- Grid Item 2 -->
      <a href="/kahi-gaol" class="w-full h-full overflow-hidden group cursor-pointer relative">
        <!--    Background Image    -->
        <img
          src="@/images/kahi-gaol.png"
          alt="Kohi Gaol"
          class="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <!--    Background Fade Mobile    -->
        <div class="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[#6C5545]/0 to-[#6C5545]/70 lg:hidden"></div>
        <!--    Background Fade    -->
        <div class="absolute top-0 left-0 right-0 bottom-0">
          <img class="w-full h-full object-cover" src="@/images/hero-fade.png" alt="Hero Fade "/>
        </div>
        <!--    Logo and Learn More    -->
        <div class="absolute bottom-[50%] translate-y-[50%] lg:translate-y-0 lg:bottom-[100px] left-0 right-0 flex flex-col items-center gap-4 lg:gap-8 z-[2] lg:px-[87px]">
          <img class="max-w-[70px] lg:max-w-[127px]" src="@/images/logo-2.png" alt="Logo 2" />
          <div class="hover:underline text-[#F1E8DF]">Learn More</div>
        </div>
      </a>

      <!-- Grid Item 3 -->
      <a href="/horeca" class="w-full h-full overflow-hidden group cursor-pointer relative">
        <!--    Background Image    -->
        <img
          src="@/images/horeca.png"
          alt="Horeca"
          class="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <!--    Background Fade Mobile    -->
        <div class="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[#6C5545]/0 to-[#6C5545]/70 lg:hidden"></div>
        <!--    Background Fade    -->
        <div class="absolute top-0 left-0 right-0 bottom-0">
          <img class="w-full h-full object-cover" src="@/images/hero-fade.png" alt="Hero Fade "/>
        </div>
        <!--    Logo and Learn More    -->
        <div class="absolute bottom-[50%] translate-y-[50%] lg:translate-y-0 lg:bottom-[100px] left-0 right-0 flex flex-col items-center gap-4 lg:gap-8 z-[2] lg:px-[87px]">
          <img class="max-w-[100px] lg:max-w-[172px]" src="@/images/logo-3.png" alt="Logo 3" />
          <div class="hover:underline text-[#F1E8DF]">Learn More</div>
        </div>
      </a>

      <!-- Grid Item 4 -->
      <a href="/distributor" class="w-full h-full overflow-hidden group cursor-pointer relative">
        <!--    Background Image    -->
        <img
          src="@/images/distributor.png"
          alt="Distributor"
          class="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <!--    Background Fade Mobile    -->
        <div class="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[#6C5545]/0 to-[#6C5545]/70 lg:hidden"></div>
        <!--    Background Fade    -->
        <div class="absolute top-0 left-0 right-0 bottom-0">
          <img class="w-full h-full object-cover" src="@/images/hero-fade.png" alt="Hero Fade "/>
        </div>
        <!--    Logo and Learn More    -->
        <div class="absolute bottom-[50%] translate-y-[50%] lg:translate-y-0 lg:bottom-[100px] left-0 right-0 flex flex-col items-center gap-4 lg:gap-8 z-[2] lg:px-[87px]">
          <img class="max-w-[140px] lg:max-w-[277px]" src="@/images/logo-4.png" alt="Logo 4" />
          <div class="hover:underline text-[#F1E8DF]">Learn More</div>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
</script>