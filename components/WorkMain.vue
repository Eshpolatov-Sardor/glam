<script setup lang="ts">
import { onMounted } from 'vue';
import AOS from 'aos';

onMounted(() => {
  AOS.init({
    duration: 2000,
    once: true,
  });
});
</script>

<template>
  <div class="w-full md:w-[1280px] md:px-0 px-4 mx-auto ">
    <div class="rounded-lg text-center" data-aos="fade-up">
      <h2 class="text-3xl font-light" data-aos="fade-down">Ish</h2>
      <h2 class="text-4xl font-bold text-[#1F5673]" data-aos="fade-down">Jarayoni</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 my-6 gap-4">
        <div class="bgrow shadow-lg rounded-lg pb-4 border border-[#F7941D]" data-aos="zoom-in">
          <NuxtImg class="rounded-lg h-80 w-full" src="bepul.png" alt="Gilam olib ketamiz" />
          <h3 class="text-xl font-bold mt-4 text-[#052F56]">Gilam olib ketamiz</h3>
          <p class="text-[#0A3D62] mt-2 px-2">
            So‘rov qoldiring. Belgilangan vaqtda kur'er kelib, gilamingizni oladi.
          </p>
        </div>
        <div class="bgrow shadow-lg rounded-lg pb-4  border border-[#F7941D]" data-aos="zoom-in">
          <NuxtImg class="rounded-lg h-80 w-full" src="ish.png" alt="Tozalaymiz" />
          <h3 class="text-xl font-bold mt-4 text-[#052F56]">Tozalaymiz</h3>
          <p class="text-[#0A3D62] mt-2 px-2">
            Biz xavfsiz yuvish vositalaridan foydalanamiz va xizmatlarimiz sifatiga katta e’tibor beramiz.
          </p>
        </div>
        <div class="bgrow shadow-lg rounded-lg pb-4 border border-[#F7941D]" data-aos="zoom-in">
          <NuxtImg class="rounded-lg h-80 w-full" src="yuvish.png" alt="Yetkazib beramiz" />
          <h3 class="text-xl font-bold mt-4 text-[#052F56]">Yetkazib beramiz</h3>
          <p class="text-[#0A3D62] mt-2 px-2">
            Kur’er gilamni yetkazib beradi, siz esa qabul qilib, to‘lovni amalga oshirasiz.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
