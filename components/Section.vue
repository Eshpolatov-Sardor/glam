<script setup lang="ts">
import { ref, onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init({
    duration: 1500,
    once: true,
  });
});

</script>

<template>
  <div class="w-full md:w-[1280px] mx-auto py-10 px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        class="relative group rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
        data-aos="flip-left"
      >
        <!-- Xizmat rasmi -->
        <NuxtImg
          src="glam.png"
          alt="service.title"
          class="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
        />

        <!-- Overlay matni -->
        <div
          class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4"
          data-aos="fade-up"
        >
          <h3 class="text-xl font-bold">{{ $t('Gilamyuvish') }}</h3>
          <button
            class="mt-4 px-4 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition"
            data-aos="zoom-in"
          >{{ $t('BATAFSIL') }}
          </button>
        </div>
      </div>
      <div
        class="relative group rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
        data-aos="flip-left"
      >
        <!-- Xizmat rasmi -->
        <NuxtImg
          src="yumshoq.png"
          alt="service.title"
          class="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
        />

        <!-- Overlay matni -->
        <div
          class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4"
          data-aos="fade-up"
        >
          <h3 class="text-xl font-bold">{{ $t('mebellarnitozalash') }}</h3>
          <button
            class="mt-4 px-4 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition"
            data-aos="zoom-in"
          >{{ $t('BATAFSIL') }}
          </button>
        </div>
      </div>
      <div
        class="relative group rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
        data-aos="flip-left"
      >
        <!-- Xizmat rasmi -->
        <NuxtImg
          src="bruschatka.png"
          alt="service.title"
          class="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
        />

        <!-- Overlay matni -->
        <div
          class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4"
          data-aos="fade-up"
        >
          <h3 class="text-xl font-bold">{{ $t('Bruschatkatozalash') }}</h3>
          <button
            class="mt-4 px-4 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition"
            data-aos="zoom-in"
          >{{ $t('BATAFSIL') }}
          </button>
        </div>
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