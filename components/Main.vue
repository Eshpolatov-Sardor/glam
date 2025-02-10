<script setup lang="ts">
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init({
    duration: 3000, // Animatsiya davomiyligi uzaytirildi
    once: true, // Faqat bir marta animatsiya qilinsin
  });
});
</script>

<template>
  <div class="md:container mx-auto py-16 px-6 text-center mt-10" data-aos="fade-up">
    <!-- Doira shaklidagi rasm -->
    <div class="flex justify-center" data-aos="zoom-in">
      <div class="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
        <NuxtImg src="../public/image copy 3.png" alt="Nano Wash" class="w-full h-full object-cover" />
      </div>
    </div>

    <!-- Matn qismi -->
    <h2 class="text-3xl font-bold text-gray-800 mt-6" data-aos="fade-up">Biz haqimizda</h2>
    <p class="text-lg text-gray-500 mt-2" data-aos="fade-right">Toshkentda yuqori sifatli gilam tozalash</p>

    <p class="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed" data-aos="fade-left">
      Bizning <b>Nano Wash</b> kompaniyamiz sifatli gilam yuvish, yumshoq mebellar va bruschatka tozalash xizmatlarini 
      taklif etadi. Biz har doim o‘z vaqtida ishni bajaramiz, texnologiyaga rioya qilamiz va xavfsiz yuvish vositalaridan 
      foydalanamiz.
    </p>

    <p class="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed" data-aos="fade-right">
      Biz gilam, divan, kreslo va yumshoq qoplamali stullarni tozalash xizmatini professional tarzda amalga oshiramiz. 
      Toshkentda gilamlarni tozalash texnik mutaxassislarimiz nazorati ostida xavfsiz va samarali tarzda amalga oshiriladi.
    </p>

    <p class="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed" data-aos="fade-left">
      Faqat professional kimyoviy vositalardan foydalanamiz. Dog'lar va noxush hidlar bartaraf qilinadi.
    </p>
  </div>
</template>
