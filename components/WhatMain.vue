<template>
  <div class="bg-teal-500 flex justify-center py-10">
    <div class="bg-white p-8 rounded-lg shadow-lg">
      <h2 class="text-center text-2xl font-bold text-gray-900 mb-6">
        Nega aynan biz?
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div>
          <h3 class="text-lg font-semibold text-gray-800">01. Sifat</h3>
          <hr class="border-gray-300 my-2" />
          <p class="text-gray-600 text-sm">
            Yuqori samarali import qilingan shampunlar
          </p>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-800">02. Bepul!*</h3>
          <hr class="border-gray-300 my-2" />
          <p class="text-gray-600 text-sm">
            * Gilamlarni bepul olib ketamiz va yetkazib beramiz!
          </p>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-800">03. Narx</h3>
          <hr class="border-gray-300 my-2" />
          <p class="text-gray-600 text-sm">Halol va shaffof narxlar</p>
        </div>
      </div>

      <div class="mt-8 flex flex-col md:flex-row items-center">
        <div class="text-left mb-4 md:mb-0 md:w-1/2">
          <h3 class="text-xl font-bold text-gray-900">
            Maqsadimiz - <br />
            Xonadoningiz tozaligi!
          </h3>
        </div>
        <div class="md:w-1/2">
          <NuxtImg
            src="https://picsum.photos/400/200?random=6"
            alt="Gilam yuvish"
            class="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  </div>
</template>
