<script setup lang="ts">
import { onMounted, ref } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      <div class="text-[#052F56] md:pt-28 w-full md:px-24 px-2" data-aos="fade-in">
        <h1 class="text-4xl font-bold mb-4" data-aos="fade-right">Gilam yuvish xizmati</h1>
        <p class="text-lg mb-6 text-[#0A3D62] z-0 md:w-[450px]" data-aos="fade-left">
          Professional gilam yuvish xizmati. Yumshoq mebellarni tozalash, adyol yuvish bo‘yicha
          professional xizmatlarni taklif etamiz.
        </p>
        <div class="flex space-x-4" data-aos="fade-in">
          <a href="tel:+998 97 090 60 60" class="bg-[#EC8305] hover:bg-yellow-500 text-[#0A3D62] font-semibold py-3 px-6 rounded-lg shadow-lg">
            Qo'ng'iroq qilish
          </a>
          <button class="border-2 border-[#F7941D] text-[#0A3D62] font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-500 transition">
            Xizmatlar
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
