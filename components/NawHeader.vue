<script setup lang="ts">
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init({
    duration: 3000, // Animatsiya davomiyligi
    once: true, // Faqat bir marta animatsiya qilinsin
  });
});
</script>

<template>
  <div class="relative py-16 px-6 md:px-20 flex items-center overflow-hidden full-width">
    <!-- Orqa fon uchun naqsh -->
    <div class="absolute inset-0 flex w-full h-full overflow-hidden" data-aos="fade-in">
      <NuxtImg src="bgrow.png" alt="Pattern" class="w-full h-full object-fit" />
    </div>

    <div class="grid md:grid-cols-2 items-center relative z-10 py-32 w-full">
      <!-- Matn qismi -->
      <div class="text-[#052F56] md:pt-28 w-full md:px-24" data-aos="fade-in">
        <h1 class="text-4xl font-bold mb-4" data-aos="fade-right">Gilam yuvish xizmati</h1>
        <p class="text-lg mb-6 text-[#0A3D62] z-0" data-aos="fade-left">
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

.relative {
  width: 100%;
}

.absolute {
  width: 100%;
}
</style>
