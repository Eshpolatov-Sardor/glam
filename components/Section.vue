<script setup lang="ts">
import { ref, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 3000, // Animatsiya davomiyligi uzaytirildi
    once: true, // Faqat bir marta animatsiya qilinsin
  });
});

// Xizmatlar ro‘yxati
const services = [
  {
    id: 1,
    title: "Gilam yuvish",
    image: "glam.png",
    button: "BATAFSIL",
    text: "Biz gilamlarni maxsus vositalar yordamida chuqur tozalaymiz.",
  },
  {
    id: 2,
    title: "Yumshoq mebellarni tozalash",
    image: "yumshoq.png",
    button: "BATAFSIL",
    text: "Mebellarni ekologik toza usulda yuvamiz va quritamiz.",
  },
  {
    id: 3,
    title: "Bruschatka tozalash",
    image: "burischatka.png",
    button: "BATAFSIL",
    text: "Tashqi qoplamalarni maxsus yuvish uskunalari yordamida tozalaymiz.",
  },
];

// Modal holati va tanlangan xizmat
const isModalOpen = ref(false);
const selectedService = ref<{
  title: string;
  image: string;
  text: string;
} | null>(null);

// Modalni ochish
function openModal(service: any) {
  selectedService.value = service;
  isModalOpen.value = true;
}

// Modalni yopish
function closeModal() {
  isModalOpen.value = false;
  selectedService.value = null;
}
</script>

<template>
  <div class="">
    <!-- Xizmatlar bo'limi -->
    <div class="w-full md:w-[1280px] full-width md:px-0 px-4 mx-auto py-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="service in services"
          :key="service.id"
          class="relative group rounded-lg  shadow-lg"
          data-aos="flip-left"
        >
          <!-- Background Image -->
          <NuxtImg
            :src="service.image"
            :alt="service.title"
            class="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4"
            data-aos="fade-up"
          >
            <h3 class="text-xl font-bold">{{ service.title }}</h3>
            <button
              class="mt-4 px-4 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition"
              data-aos="zoom-in"
              @click="openModal(service)"
            >
              {{ service.button }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 w-80% bg-black bg-opacity-50 flex items-center justify-center z-50 "
    >
      <div class="bg-white p-6 rounded-lg shadow-lg relative">
        <button
          class="absolute top-2 right-2 text-gray-700 hover:text-black"
          @click="closeModal"
        >
          ✖
        </button>
        <NuxtImg
          :src="selectedService?.image"
          class="w-full rounded-lg mb-4"
          alt="Xizmat rasmi"
        />
        <h3 class="text-2xl font-bold text-gray-800 mb-2">
          {{ selectedService?.title }}
        </h3>
        <p class="text-gray-600">{{ selectedService?.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
html, body {
  overflow-x: hidden;
}

. {
  overflow: hidden;
}
</style>
