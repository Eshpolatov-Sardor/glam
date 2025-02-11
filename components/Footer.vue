<script setup lang="ts">
import { onMounted } from 'vue';
import AOS from 'aos';

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
});
</script>

<template>
  <div class="bgrow flex justify-center py-12 px-6">
    <div class="w-full md:w-[1280px] md:mx-auto grid grid-cols-1 md:grid-cols-2">
      <div class="text-gray-800 mb-6 md:mb-0" data-aos="fade-right">
        <h2 class="text-7xl font-light mb-4 text-[#1F5673]" data-aos="fade-down">Yana bir qadam!</h2>
        <p class="text-3xl mb-6 text-gray-700" data-aos="fade-up">
          Mutaxassislarimiz siz bilan bog'lanishadi!
        </p>
        <p class="text-lg font-semibold text-gray-600" data-aos="zoom-in">Telefon:</p>
        <a href="tel:+998 99 941 30 30" class="text-2xl font-bold mt-2 text-[#1F5673]" data-aos="zoom-in">+998 (99) 941 30 30</a>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="w-full flex justify-center mb-6" data-aos="fade-left">
          <svg height="10" width="100%" class="text-gray-600">
            <path
              d="M0 5 Q20 0, 40 5 T80 5 T120 5 T160 5 T200 5 T240 5 T280 5 T320 5 T360 5 T400 5 T440 5 T480 5 T520 5 T560 5"
              stroke="gray"
              fill="transparent"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div data-aos="fade-up">
          <label class="text-gray-700 text-lg block mb-1">Ismingiz</label>
          <input
            type="text"
            placeholder="Ismingiz"
            class="w-full bg-transparent border-b-2 border-gray-600 text-gray-800 py-2 focus:outline-none focus:border-gray-400 placeholder-gray-400"
          />

          <label class="text-gray-700 text-lg block mt-6 mb-1">Telefon</label>
          <div class="flex items-center border-b-2 border-gray-600 py-2">
            <span class="text-gray-700 text-lg">🇺🇿</span>
            <span class="text-gray-700 ml-2">+998</span>
            <input
              type="tel"
              placeholder="99-999-9999"
              class="ml-3 w-full bg-transparent text-gray-800 focus:outline-none placeholder-gray-400"
            />
          </div>

          <button
            class="w-full bg-[#1F5673] text-white font-semibold py-3 mt-6 rounded-full shadow-md hover:bg-[#163e54] transition"
          >
            YUBORISH
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
