<script setup lang="ts">
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init({
    duration: 2000,
    once: true,
  });
});
</script>

<template>
  <div class="bg-[#00B8B8] py-10 flex justify-center">
    <div class="bg-white p-10 rounded-lg w-10/12 text-center shadow-lg" data-aos="fade-up">
      <h2 class="text-3xl font-light" data-aos="fade-down">Ish</h2>
      <h2 class="text-4xl font-bold text-[#1F5673]" data-aos="fade-down">Jarayoni</h2>

      <div class="flex justify-center flex-wrap my-6 gap-4">
        <img
          class="rounded-lg w-1/3"
          src="https://picsum.photos/400/200?random=6"
          alt="Gilam yuvish"
          data-aos="zoom-in"
        />
        <img
          class="rounded-lg w-1/3"
          src="https://picsum.photos/400/200?random=7"
          alt="Yumshoq mebel tozalash"
          data-aos="zoom-in"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div data-aos="fade-right">
          <h3 class="text-xl font-bold">G‘ilam olib ketamiz</h3>
          <p class="text-gray-600 mt-2">
            So‘rov qoldiring. Belgilangan vaqtda kur'er kelib, gilamingizni oladi.
          </p>
        </div>
        <div data-aos="fade-up">
          <h3 class="text-xl font-bold">Tozalaymiz</h3>
          <p class="text-gray-600 mt-2">
            Biz xavfsiz yuvish vositalaridan foydalanamiz va xizmatlarimiz sifatiga katta e’tibor beramiz.
          </p>
        </div>
        <div data-aos="fade-left">
          <h3 class="text-xl font-bold">Yetkazib beramiz</h3>
          <p class="text-gray-600 mt-2">
            Kur’er gilamni yetkazib beradi, siz esa qabul qilib, to‘lovni amalga oshirasiz.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
