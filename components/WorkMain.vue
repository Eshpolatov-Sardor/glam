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
      <h2 class="text-3xl font-light" data-aos="fade-up">{{$t('Ish')}}</h2>
      <h2 class="text-4xl font-bold text-[#1F5673]" data-aos="fade-up">{{$t('Jarayoni')}}</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 my-6 gap-4">
        <div class="bgrow shadow-lg rounded-lg pb-4 border border-[#F7941D]" data-aos="fade-up">
          <NuxtImg class="rounded-lg h-80 w-full" src="bepul.png" alt="Gilam olib ketamiz" />
          <h3 class="text-xl font-bold mt-4 text-[#052F56]">{{$t('ketamiz')}}</h3>
          <p class="text-[#0A3D62] mt-2 px-2">
            {{$t('qoldiring')}}
          </p>
        </div>
        <div class="bgrow shadow-lg rounded-lg pb-4  border border-[#F7941D]" data-aos="fade-up">
          <NuxtImg class="rounded-lg h-80 w-full" src="ish.png" alt="Tozalaymiz" />
          <h3 class="text-xl font-bold mt-4 text-[#052F56]">{{$t('Tozalaymiz')}}</h3>
          <p class="text-[#0A3D62] mt-2 px-2">
            {{$t('xavfsiz')}}
          </p>
        </div>
        <div class="bgrow shadow-lg rounded-lg pb-4 border border-[#F7941D]" data-aos="fade-up">
          <NuxtImg class="rounded-lg h-80 w-full" src="yuvish.png" alt="Yetkazib beramiz" />
          <h3 class="text-xl font-bold mt-4 text-[#052F56]">{{$t('Yetkazib')}}</h3>
          <p class="text-[#0A3D62] mt-2 px-2">
            {{$t('gilamni')}}
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
