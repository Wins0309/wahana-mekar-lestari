<template>
  <section class="c-contactus">
    <div class="grid lg:grid-cols-2">
      <div class="content-wrapper relative flex flex-col items-end p-8 lg:py-[200px] lg:px-[80px]">
        <div
          class="absolute z-[1] top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-[#4D3A31]/81 to-[#4D3A31]/45"></div>
        <div class="text-[#F1E8DF] lg:max-w-[550px] z-[2]">
          <h3 class="mb-[10px] text-[#F1E8DF]">Head Office</h3>
          <p class="text-[#F1E8DF]">Gedung Wirausaha, Jl. Haji R. Rasuna Said Kavling C5, RT.3/
            RW.1, Karet Kuningan, Setiabudi, Jakarta 12920</p>

          <h3 class="mt-[50px] mb-[10px] text-[#F1E8DF]">Email</h3>
          <p class="text-[#F1E8DF]">wahanamekarlestari@gmail.com</p>

          <img class="mt-[50px]" src="@/images/contact-us.png" alt="Contact Us"/>
        </div>
      </div>

      <div class="contact-form bg-[#F1E8DF] p-8 lg:py-[200px] lg:px-[80px]">
        <div class="lg:max-w-[520px]">
          <h3 class="text-[#6C5545] mb-[50px]">Contact Us</h3>
          <form
            name="contact"
            method="POST"
            class="space-y-4"
            netlify
            netlify-honeypot="bot-field"
          >
            <!-- Hidden input for Netlify -->
            <input type="hidden" name="form-name" value="contact"/>

            <!-- Name and Email Grid -->
            <div class="grid grid-cols-2 gap-4">
              <!-- Name Field -->
              <div>
                <label for="name" class="sr-only block text-sm font-medium text-black mb-2">Name <span
                  class="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  class="w-full bg-white px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="Your full name"
                />
              </div>

              <!-- Email Field -->
              <div>
                <label for="email" class="sr-only block text-sm font-medium text-black mb-2">Email <span
                  class="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  class="w-full bg-white px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <!-- Message Field -->
            <div>
              <label for="message" class="sr-only block text-sm font-medium text-black mb-2">
                Message <span class="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                class="w-full bg-white px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical transition duration-200"
                placeholder="Comment or Message*"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="text-start">
              <button
                @click.prevent="handleSubmit()"
                class="cursor-pointer bg-[#6C5545] hover:bg-[#6C5545]/70 text-white font-medium py-3 px-8 rounded-[4px] transition duration-200 transform"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import axios from 'axios'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const form = ref({
  first_name: null,
  last_name: null,
  email: null,
  message: null,
})
const showError = ref(false)

const validateForm = () => {
  let valid = true
  const keys = Object.keys(form.value)
  keys.forEach((key) => {
    if (form.value[key] === null || form.value[key].trim().length === 0) {
      valid = false
    }
  })

  return valid
}

const encode = (data) => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}
const handleSubmit = async () => {
  showError.value = false
  if (!validateForm()) {
    showError.value = true
    console.log('in here')
    return
  }
  const axiosConfig = {
    header: { 'Content-Type': 'application/x-www-form-urlencoded' }
  }
  await axios.post(
    '/',
    encode({
      'form-name': 'contact-form',
      ...form.value
    }),
    axiosConfig
  ).then(() => {
    showError.value = false
    router.push('/thank-you')
  })
}
</script>