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

const services = [
  {
    id: 1,
    title: "Gilam yuvish",
    image: "https://picsum.photos/400/200?random=6",
    button: "BATAFSIL",
  },
  {
    id: 2,
    title: "Yumshoq mebellarni tozalash",
    image: "https://picsum.photos/400/200?random=7",
    button: "BATAFSIL",
  },
  {
    id: 3,
    title: "Bruschatka tozalash",
    image: "https://picsum.photos/400/200?random=8",
    button: "BATAFSIL",
  },
];
</script>

<template>
  <!-- Xizmatlar bo'limi -->
  <div class="md:container mx-auto py-10 px-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="service in services"
        :key="service.id"
        class="relative group rounded-lg overflow-hidden shadow-lg"
        data-aos="flip-left"
      >
        <!-- Background Image -->
        <NuxtImg
          :src="service.image"
          alt="service.title"
          class="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
        />

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4" data-aos="fade-up">
          <h3 class="text-xl font-bold">{{ service.title }}</h3>
          <button class="mt-4 px-4 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition" data-aos="zoom-in">
            {{ service.button }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>