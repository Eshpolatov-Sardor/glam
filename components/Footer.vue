<script setup lang="ts">
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
});
</script>

<template>
  <div class="bg-teal-500 flex justify-center py-12 px-6">
    <div class="container grid grid-cols-1 md:grid-cols-2">
      <div class="text-white mb-6 md:mb-0" data-aos="fade-right">
        <h2 class="text-7xl font-light mb-4" data-aos="fade-down">Yana bir qadam!</h2>
        <p class="text-3xl mb-6" data-aos="fade-up">
          Mutaxassislarimiz siz bilan bog'lanishadi!
        </p>
        <p class="text-lg font-semibold" data-aos="zoom-in">Telefon:</p>
        <p class="text-2xl font-bold mt-2" data-aos="zoom-in">+998 (99) 941 30 30</p>
      </div>

      <div class="bg-transparent">
        <div class="w-full flex justify-center mb-6" data-aos="fade-left">
          <svg height="10" width="100%" class="text-white">
            <path
              d="M0 5 Q20 0, 40 5 T80 5 T120 5 T160 5 T200 5 T240 5 T280 5 T320 5 T360 5 T400 5 T440 5 T480 5 T520 5 T560 5"
              stroke="white"
              fill="transparent"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div data-aos="fade-up">
          <label class="text-white text-lg block mb-1">Ismingiz</label>
          <input
            type="text"
            placeholder="Ismingiz"
            class="w-full bg-transparent border-b-2 border-white text-white py-2 focus:outline-none focus:border-gray-300 placeholder-gray-300"
          />

          <label class="text-white text-lg block mt-6 mb-1">Telefon</label>
          <div class="flex items-center border-b-2 border-white py-2">
            <span class="text-white text-lg">🇺🇿</span>
            <span class="text-white ml-2">+998</span>
            <input
              type="tel"
              placeholder="99-999-9999"
              class="ml-3 w-full bg-transparent text-white focus:outline-none placeholder-gray-300"
            />
          </div>

          <button
            class="w-full bg-white text-teal-600 font-semibold py-3 mt-6 rounded-full shadow-md hover:bg-gray-200 transition"
            data-aos="zoom-in"
          >
            YUBORISH
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
