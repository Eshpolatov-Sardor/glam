<script setup lang="ts">
import { onMounted, ref } from 'vue';
import AOS from 'aos';

onMounted(() => {
  AOS.init({
    duration: 3000, // Animatsiya davomiyligi
    once: true, // Faqat bir marta animatsiya qilinsin
  });
});

// Rasm URL
const bgImage = ref("url('bgrow.png')"); // Rasm manzilini to'g'ri yozing
</script>

<template>
  <div class="py-8 px-6 md:px-20 flex items-center">
    <!-- FON RASMI QO'SHILDI -->
    <div 
      class="z-10 py-32 w-full bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: bgImage }"
    >
      <div class="text-[#EC8305] md:pt-28 w-full md:px-24 px-2" data-aos="fade-up">
        <h1 class="text-4xl font-bold mb-4" data-aos="fade-up">{{ $t('Gilam') }}</h1>
        <p class="text-lg mb-6 text-black z-0 md:w-[450px]" data-aos="fade-up">
          {{ $t('Professional') }}
        </p>
        <div class="flex space-x-4" data-aos="fade-up">
          <a href="tel:+998 97 090 60 60" class="bg-[#EC8305] hover:bg-yellow-500 text-[#0A3D62] font-semibold py-3 px-6 rounded-lg shadow-lg">
            {{ $t('qilish') }}
          </a>
          <button class="border-2 border-[#F7941D] text-[#0A3D62] font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-500 transition">
            {{ $t('xizmatlar') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  overflow-x: hidden;
}

.full-width {
  width: 100%;
}
</style>
