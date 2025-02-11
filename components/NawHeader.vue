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
  <div class="relative py-16 px-6 md:px-20 flex items-center">
    <!-- Orqa fon uchun naqsh -->
    <div class="absolute inset-0" data-aos="fade-in">
      <NuxtImg src="bgrow.png" alt="Pattern" class="w-full h-full object-cover" />
    </div>

    <div class="container mx-auto grid md:grid-cols-2 items-center relative z-10 py-32">
      <!-- Matn qismi -->
      <div class="text-white md:pt-28" data-aos="fade-in">
        <h1 class="text-4xl font-bold mb-4" data-aos="fade-right">Gilam yuvish xizmati</h1>
        <p class="text-lg mb-6" data-aos="fade-left">
          Professional gilam yuvish xizmati. Yumshoq mebellarni tozalash, shuningdek, pled va adyol yuvish bo‘yicha
          professional xizmatlarni taklif etamiz.
        </p>
        <div class="flex space-x-4" data-aos="fade-in">
          <a href="tel:+998 97 090 60 60" class="bg-[#EC8305] hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg">
            Qo'ng'iroq qilish
          </a>
          <button class="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-500 transition">
            Xizmatlar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
