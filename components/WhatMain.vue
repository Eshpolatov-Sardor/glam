<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 2000, // Animatsiya tezligi optimal holatga keltirildi
    once: true, // Faqat bir marta animatsiya qilinsin
  });
});
</script>

<template>
  <!-- Nega aynan biz? bo'limi -->
  <div class="flex justify-center py-12 px-6" data-aos="fade-up">
    <div class="w-full md:w-[1280px] md:px-0 px-4 mx-auto ">
      <h2 class="text-center text-3xl font-extrabold text-gray-900 mb-8 uppercase tracking-wider">
        Nega aynan biz?
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div class="p-6 bgrow rounded-lg shadow-md transform transition duration-300 hover:scale-105 border border-[#F7941D]" data-aos="fade-right">
          <h3 class="text-xl font-semibold text-[#052F56]">01. Sifat</h3>
          <hr class="border border-[#F7941D] my-3" />
          <p class="text-[#0A3D62] text-base">
            Yuqori samarali import qilingan shampunlar
          </p>
        </div>
        <div class="p-6 bgrow rounded-lg shadow-md transform transition duration-300 hover:scale-105 border border-[#F7941D]" data-aos="fade-up">
          <h3 class="text-xl font-semibold text-[#052F56]">02. Bepul!*</h3>
          <hr class="border border-[#F7941D] my-3" />
          <p class="text-[#0A3D62] text-base">
            * Gilamlarni bepul olib ketamiz va yetkazib beramiz!
          </p>
        </div>
        <div class="p-6 bgrow rounded-lg shadow-md transform transition duration-300 hover:scale-105 border border-[#F7941D]" data-aos="fade-left">
          <h3 class="text-xl font-semibold text-[#052F56]">03. Narx</h3>
          <hr class="border border-[#F7941D] my-3" />
          <p class="text-[#0A3D62] text-base">Halol va shaffof narxlar</p>
        </div>
      </div>

      <div class="mt-12 flex flex-col md:flex-row items-center" data-aos="fade-up">
        <div class="text-left mb-6 md:mb-0 md:w-1/2">
          <h3 class="text-4xl font-extrabold text-[#052F56] leading-snug">
            Maqsadimiz - <br />
            Xonadoningiz tozaligi!
          </h3>
          <p class="mt-4 text-lg text-[#0A3D62]">
            Toza uy — sog‘lom hayot! Biz har doim sifatli xizmat ko‘rsatishga harakat qilamiz.
          </p>
          <button class="mt-6 px-6 py-3 bg-[#EC8305] text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
            Ko'proq ma'lumot
          </button>
        </div>
        <div class="md:w-1/2 overflow-hidden rounded-lg">
          <NuxtImg
            src="bepul.png"
            alt="Gilam yuvish"
            class="w-full rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  </div>
</template>
