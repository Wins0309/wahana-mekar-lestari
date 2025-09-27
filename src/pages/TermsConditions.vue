<template>
  <section class="bg-[#e8e0d6] py-16 lg:py-[175px]">
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Table of Contents Sidebar -->
        <div class="lg:w-1/4">
          <div class="p-6 sticky top-8">
            <h4 class="mb-6 text-[#6C5545] font-bold text-lg">Table of content</h4>
            <nav class="space-y-1">
              <a
                v-for="item in tableOfContents"
                :key="item.id"
                @click="scrollToSection(item.id)"
                class="block text-sm py-2 cursor-pointer transition-all duration-200 hover:text-[#4D3A31] border-l-2 pl-3"
                :class="{
                  'ml-4': item.isSubItem,
                  'font-bold text-[#4D3A31] border-l-[#4D3A31] bg-[#F1E8DF]/30': activeSection === item.id,
                  'text-[#6C5545] border-l-transparent': activeSection !== item.id
                }"
              >
                {{ item.title }}
              </a>
            </nav>
          </div>
        </div>

        <!-- Main Content -->
        <div class="lg:w-3/4">
          <div class="p-6 space-y-12">

            <!-- Terms & Conditions Section -->
            <div id="terms-condition" class="scroll-mt-40">
              <h2 class="mb-6 text-[#6C5545] text-3xl font-bold">Terms & condition</h2>

              <p class="text-[#6C5545] mb-6">Welcome to PT. Wahana Mekar Lestari</p>

              <p class="text-[#6C5545] mb-6">
                By accessing and using this website www.wmil.co.id, you automatically agree to all applicable
                Terms & Conditions. Please take a moment to read them carefully.
              </p>

              <div class="space-y-6">
                <div id="use-of-services" class="scroll-mt-32">
                  <ol class="list-decimal list-inside text-[#6C5545]">
                    <li class="mb-4">
                      <strong>Use of Services</strong>
                      <p class="text-[#6C5545] mt-2 ml-6">
                        You agree to use this website only for lawful purposes and in compliance with all applicable laws
                        and regulations. You are prohibited from:
                      </p>
                      <ul class="list-disc list-inside ml-10 mt-2 text-[#6C5545] space-y-1">
                        <li>Using the site for illegal activities or to harm others.</li>
                        <li>Accessing or attempting to access our systems without authorization.</li>
                        <li>Using the site to disseminate content that infringes on the intellectual property rights of others.</li>
                      </ul>
                    </li>

                    <li class="mb-4" id="intellectual-property">
                      <strong class="scroll-mt-32">Intellectual Property Rights</strong>
                      <ul class="list-disc list-inside ml-6 mt-2 text-[#6C5545] space-y-1">
                        <li>All content on this website, including but not limited to text, graphics, logos, icons, images,
                          audio clips, digital downloads, data compilations, and software, is the property of PT Wahana
                          Mekar Lestari and is protected by intellectual property laws.</li>
                        <li>You are not permitted to reproduce, duplicate, copy, sell, resell, visit, or create any portion of
                          the website or its content for commercial purposes without our express written consent.</li>
                      </ul>
                    </li>

                    <li class="mb-4" id="privacy-personal-data">
                      <strong class="scroll-mt-8">Privacy and Personal Data</strong>
                      <p class="text-[#6C5545] mt-2 ml-6">
                        We respect your privacy. The personal information collected through this website will be used in
                        accordance with our Privacy Policy. For more information, please read our link to Privacy Policy.
                      </p>
                    </li>

                    <li class="mb-4" id="limitation-liability">
                      <strong class="scroll-mt-8">Limitation of Liability</strong>
                      <p class="text-[#6C5545] mt-2 ml-6">
                        We are not responsible for any loss or damage arising from the use or inability to use this website,
                        including but not limited to direct, indirect, incidental, or consequential damages.
                      </p>
                    </li>

                    <li class="mb-4" id="changes-terms">
                      <strong class="scroll-mt-8">Changes to Terms & Conditions</strong>
                      <p class="text-[#6C5545] mt-2 ml-6">
                        We reserve the right to modify these Terms & Conditions at any time without prior notice. Changes
                        will be effective immediately upon being published on this website. Your continued use of the
                        website after such changes are published will be considered as acceptance of those changes.
                      </p>
                    </li>

                    <li class="mb-4" id="contact-terms">
                      <strong class="scroll-mt-8">Contact</strong>
                      <p class="text-[#6C5545] mt-2 ml-6">
                        If you have any questions or comments regarding these Terms & Conditions, please contact us via:
                      </p>
                      <ul class="list-disc list-inside ml-10 mt-2 text-[#6C5545] space-y-1">
                        <li>Email: wahanamekarlestari@gmail.com</li>
                        <li>Phone: +62 21 123 4567</li>
                        <li>Address: Gedung Wirausaha, Jl. Haji R. Rasuna Said Kavling C5, RT.3/RW.1, Karet Kuningan,
                          Setia Budi, Jakarta 12920</li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <!-- Privacy & Policy Section -->
            <div id="privacy-policy" class="scroll-mt-32">
              <h2 class="mb-6 text-[#6C5545] text-3xl font-bold">Privacy & policy</h2>

              <p class="text-[#6C5545] mb-6">
                PT Wahana Mekar Lestari owns and controls the data for the website www.wmil.co.id. This
                Privacy Policy will explain how we process collected information and why certain personal data
                may be requested from you. We encourage you to read this entire document very carefully and
                review this Privacy Policy before continuing to use the website.
              </p>

              <div class="space-y-6">
                <div id="information-collect" class="scroll-mt-32">
                  <ol class="list-decimal list-inside text-[#6C5545]">
                    <li class="mb-4">
                      <strong>Information We Collect</strong>
                      <p class="text-[#6C5545] mt-2 ml-6">
                        Each time you access www.wmil.co.id, we collect your information, which includes:
                      </p>
                      <ul class="list-disc list-inside ml-10 mt-2 text-[#6C5545] space-y-1">
                        <li>Information We Directly Provide</li>
                        <li>Personal information such as your name, phone number, and address.</li>
                        <li>Communication information if you contact us via email, phone, and social media.</li>
                        <li>Information We Collect Automatically Collects such as your device information, unique information
                          traffic data, time zone, location, cookies, and the resources you access.</li>
                      </ul>
                    </li>

                    <li class="mb-4" id="how-we-use">
                      <strong class="scroll-mt-8">How We Use Your Information</strong>
                      <p class="text-[#6C5545] mt-2 ml-6">
                        PT Wahana Mekar Lestari is processing customer data and products used to run the website.
                        We use your information to:
                      </p>
                      <ul class="list-disc list-inside ml-10 mt-2 text-[#6C5545] space-y-1">
                        <li>Prevent fraud and abuse of information when using the website</li>
                        <li>Track the effectiveness of our products through the feedback you provide.</li>
                        <li>Send you emails or newsletters if you've agreed to them, including special offers for our
                          products.</li>
                        <li>Enhance your user experience in utilizing the services and resources available on our Site.</li>
                      </ul>
                    </li>

                    <li class="mb-4" id="third-party-links">
                      <strong class="scroll-mt-8">Links to Third Party Websites</strong>
                      <p class="text-[#6C5545] mt-2 ml-6">
                        The website may contain links to third-party websites that are owned and operated by us. We are not
                        responsible for the privacy practices or content of these third-party websites. We strongly
                        encourage you to review the privacy policies of every website you visit.
                      </p>
                    </li>

                    <li class="mb-4" id="privacy-rights">
                      <strong class="scroll-mt-8">Your Privacy Rights</strong>
                      <p class="text-[#6C5545] mt-2 ml-6">You have the right to:</p>
                      <ul class="list-disc list-inside ml-10 mt-2 text-[#6C5545] space-y-1">
                        <li>Access your personal information.</li>
                        <li>Request inaccurate personal information</li>
                        <li>Request deletion of your personal information</li>
                        <li>Restrict or object to the processing of your personal information</li>
                        <li>Request withdrawal of consent at any time if processing is based on consent.</li>
                        <li>Request a copy of your personal information in a usable format.</li>
                      </ul>
                      <p class="text-[#6C5545] mt-2 ml-6">
                        To exercise these rights, please contact us using the contact information below.
                      </p>
                    </li>

                    <li class="mb-4" id="data-security">
                      <strong class="scroll-mt-8">Data and Information Security</strong>
                      <p class="text-[#6C5545] mt-2 ml-6">
                        We implement reasonable technical security measures to protect your personal information from
                        unauthorized access, use, or disclosure. While we strive to protect your personal information, no
                        security system is perfect or impenetrable.
                      </p>
                    </li>

                    <li class="mb-4" id="changes-privacy">
                      <strong class="scroll-mt-8">Changes to This Privacy Policy</strong>
                      <p class="text-[#6C5545] mt-2 ml-6">
                        We may update this Privacy Policy from time to time. We'll let you know about any changes by
                        posting the new Privacy Policy on this page and updating the "Effective Date" at the top. We
                        encourage you to review this Privacy Policy periodically.
                      </p>
                    </li>

                    <li class="mb-4" id="contact-privacy">
                      <strong class="scroll-mt-8">Contact</strong>
                      <p class="text-[#6C5545] mt-2 ml-6">
                        If you have any questions and would like to learn more about this Privacy Policy, please contact
                        us via email: wahanamekarlestari@gmail.com
                      </p>
                      <p class="text-[#6C5545] mt-2 ml-6">
                        Thank you for your attention and for visiting our site.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Fixed header height (adjust this to match your actual header height)
const HEADER_HEIGHT = 80 // Change this to your header height in pixels

// Active section tracking
const activeSection = ref('terms-condition')

// Table of contents data
const tableOfContents = ref([
  { id: 'terms-condition', title: 'Terms & condition', isSubItem: false },
  { id: 'use-of-services', title: 'Use of Services', isSubItem: true },
  { id: 'intellectual-property', title: 'Intellectual Property Right', isSubItem: true },
  { id: 'privacy-personal-data', title: 'Privacy and Personal Data', isSubItem: true },
  { id: 'limitation-liability', title: 'Limitation of Liability', isSubItem: true },
  { id: 'changes-terms', title: 'Changes to Terms & Conditions', isSubItem: true },
  { id: 'contact-terms', title: 'Contact', isSubItem: true },
  { id: 'privacy-policy', title: 'Privacy & policy', isSubItem: false },
  { id: 'information-collect', title: 'Information We Collect', isSubItem: true },
  { id: 'how-we-use', title: 'How We Use Your Information', isSubItem: true },
  { id: 'third-party-links', title: 'Links to Third-Party Websites', isSubItem: true },
  { id: 'privacy-rights', title: 'Your Privacy Rights', isSubItem: true },
  { id: 'data-security', title: 'Data and Information Security', isSubItem: true },
  { id: 'changes-privacy', title: 'Changes to This Privacy Policy', isSubItem: true },
  { id: 'contact-privacy', title: 'Contact', isSubItem: true }
])

// Intersection Observer to track visible sections
let observer = null

// Smooth scroll to section with header offset
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    activeSection.value = sectionId

    // Calculate position accounting for fixed header
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - HEADER_HEIGHT - 20 // Extra 20px padding

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// Setup intersection observer with header offset
const setupIntersectionObserver = () => {
  const headerOffset = HEADER_HEIGHT + 40 // Extra padding for better UX

  const options = {
    root: null,
    rootMargin: `-${headerOffset}px 0px -70% 0px`, // Account for fixed header
    threshold: 0.1
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, options)

  // Observe all sections
  tableOfContents.value.forEach((item) => {
    const element = document.getElementById(item.id)
    if (element) {
      observer.observe(element)
    }
  })
}

// Cleanup function
const cleanup = () => {
  if (observer) {
    observer.disconnect()
  }
}

onMounted(() => {
  // Small delay to ensure DOM is fully rendered
  setTimeout(() => {
    setupIntersectionObserver()
  }, 100)
})

onUnmounted(() => {
  cleanup()
})
</script>