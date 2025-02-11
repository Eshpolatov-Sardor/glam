<script setup lang="ts">
import { onMounted, ref } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 1500,
    once: true,
  });
});

const videos = ref([
  { src: "/video.mp4", isMuted: true },
  { src: "/vedio2.mp4", isMuted: true },
  { src: "/vedio3.mp4", isMuted: true },
]);

function toggleSound(index: number) {
  videos.value[index].isMuted = !videos.value[index].isMuted;
}
</script>

<template>
  <div class="w-full md:w-[1280px] md:px-0 px-4 mx-auto text-center mt-10">
    <h2 class="text-4xl font-bold text-gray-800 mb-10" data-aos="fade-down">
      Biz haqimizda
    </h2>

    <div class="grid md:grid-cols-3 gap-6">
      <div
        v-for="(video, index) in videos"
        :key="index"
        class="bgrow pb-6 rounded-2xl shadow-lg border"
        data-aos="fade-up"
        :data-aos-delay="index * 200"
      >
        <div class="flex justify-center relative">
          <div
            class="w-full h-64 rounded-xl overflow-hidden border-2 border-gray-300 shadow-md relative"
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
        <h3 class="text-2xl font-semibold text-gray-800 mt-4">
          {{
            index === 0
              ? "Gilam tozalash"
              : index === 1
              ? "Sifatli xizmat"
              : "Professional yondashuv"
          }}
        </h3>
        <p class="text-gray-900 mt-2">
          {{
            index === 0
              ? "Biz sifatli gilam yuvish, yumshoq mebellar va bruschatka tozalash xizmatlarini taklif etamiz."
              : index === 1
              ? "Biz har doim o‘z vaqtida ishni bajaramiz, texnologiyaga rioya qilamiz va xavfsiz yuvish vositalaridan foydalanamiz."
              : "Toshkentda gilamlarni tozalash texnik mutaxassislarimiz nazorati ostida xavfsiz va samarali tarzda amalga oshiriladi."
          }}
        </p>
      </div>
    </div>
  </div>
</template>