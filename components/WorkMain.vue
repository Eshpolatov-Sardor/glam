<script setup lang="ts">
</script>

<template>
  <div class="bg-[#00B8B8] py-10 flex justify-center">
    <div class="bg-white p-10 rounded-lg w-10/12 text-center shadow-lg">
      <h2 class="text-3xl font-light">Ish</h2>
      <h2 class="text-4xl font-bold text-[#1F5673]">Jarayoni</h2>

      <div class="flex justify-center flex-wrap my-6 gap-4">
        <NuxtImg
          class="rounded-lg w-1/3"
          src="https://picsum.photos/400/200?random=6"
          alt="Gilam yuvish"
        />
        <NuxtImg
          class="rounded-lg w-1/3"
          src="https://picsum.photos/400/200?random=6"
          alt="Yumshoq mebel tozalash"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div>
          <h3 class="text-xl font-bold">G‘ilam olib ketamiz</h3>
          <p class="text-gray-600 mt-2">
            So‘rov qoldiring. Belgilangan vaqtda kur'er kelib, gilamingizni
            oladi.
          </p>
        </div>
        <div>
          <h3 class="text-xl font-bold">Tozalaymiz</h3>
          <p class="text-gray-600 mt-2">
            Biz xavfsiz yuvish vositalaridan foydalanamiz va xizmatlarimiz
            sifatiga katta e’tibor beramiz.
          </p>
        </div>
        <div>
          <h3 class="text-xl font-bold">Yetkazib beramiz</h3>
          <p class="text-gray-600 mt-2">
            Kur’er gilamni yetkazib beradi, siz esa qabul qilib, to‘lovni amalga
            oshirasiz.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>