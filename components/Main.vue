<script setup lang="ts">
import { onMounted, ref } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init({
    duration: 1500,
    once: true,
  });
});

const videos = ref([
  { src: "/vedio.mp4", isMuted: true },
  { src: "/vedio2.mp4", isMuted: true },
  { src: "/vedio3.mp4", isMuted: true },
]);

function toggleSound(index: number) {
  videos.value[index].isMuted = !videos.value[index].isMuted;
}
</script>

<template>
  <div class="w-full md:w-[1280px] md:px-0 px-4 mx-auto text-center mt-10">
    <h2 class="text-4xl font-bold text-gray-800 mb-10" data-aos="fade-up">
      {{ $t('haqimizda') }}
    </h2>

    <div class="grid md:grid-cols-3 gap-6 ">
      <div
        v-for="(video, index) in videos"
        :key="index"
        class="bgrow pb-6 rounded-2xl shadow-lg border border-[#F7941D]"
        data-aos="fade-up"
        :data-aos-delay="index * 200"
      >
        <div class="flex justify-center relative">
          <div
            class="w-full h-64 rounded-xl overflow-hidden border-2 shadow-md relative"
          >
            <video
              class="w-full h-full object-cover cursor-pointer"
              autoplay
              loop
              :muted="video.isMuted"
            >
              <source :src="video.src" type="video/mp4" />
              Brauzeringiz videoni qo‘llab-quvvatlamaydi.
            </video>
            <button
              class="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full"
              @click="toggleSound(index)"
            >
              <div v-if="video.isMuted" class="w-6 h-6">🔕</div>
              <div v-else class="w-6 h-6">🔊</div>
            </button>
          </div>
        </div>
        <h3 class="text-2xl font-semibold text-[#052F56] mt-4">
          {{
            index === 0
              ? $t('tozalash')
              : index === 1
              ? $t('Sifatli')
              : $t('yondashuv')
          }}
        </h3>
        <p class="text-[#0A3D62] mt-2">
          {{
            index === 0
              ? $t('yuvish')
              : index === 1
              ? $t('doim')
              : $t('toshkent')
          }}
        </p>
      </div>
    </div>
  </div>
</template>