<script setup lang="ts">
import { ref, onMounted } from "vue";
import AOS from "aos";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

onMounted(() => {
  AOS.init({
    duration: 1500,
    once: true,
  });
});

const services = ref([
  {
    id: 1,
    title: t("Gilamyuvish"),
    image: "/glam.png",
    button: t("BATAFSIL"),
    text: t("tozalaymiz"),
  },
  {
    id: 2,
    title: t("mebellarnitozalash"),
    image: "/yumshoq.png",
    button: t("BATAFSIL"),
    text: t("Mebellarni"),
  },
  {
    id: 3,
    title: t("Bruschatkatozalash"),
    image: "/bruschatka.png",
    button: t("BATAFSIL"),
    text: t("tashqi"),
  },
]);

const isModalOpen = ref(false);
const selectedService = ref<{
  title: string;
  image: string;
  text: string;
} | null>(null);

function openModal(service: any) {
  selectedService.value = service;
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
  selectedService.value = null;
}
</script>

<template>
  <div class="w-full md:w-[1280px] mx-auto py-10 px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="service in services"
        :key="service.id"
        class="relative group rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
        data-aos="flip-left"
        @click="openModal(service)"
      >
        <!-- Xizmat rasmi -->
        <NuxtImg
          :src="service.image"
          :alt="service.title"
          class="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
        />

        <!-- Overlay matni -->
        <div
          class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4"
          data-aos="fade-up"
        >
          <h3 class="text-xl font-bold">{{ service.title }}</h3>
          <button
            class="mt-4 px-4 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition"
            data-aos="zoom-in"
          >
            {{ service.button }}
          </button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full">
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
html,
body {
  overflow-x: hidden;
}

button:focus {
  outline: none;
}
</style>