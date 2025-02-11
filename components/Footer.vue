<script setup lang="ts">
import { ref, onMounted } from "vue";
import AOS from "aos";
import 'aos/dist/aos.css';

const fullName = ref("");
const phoneNumber = ref("");
const isSending = ref(false);

const bot = {
  TOKEN: "7940415705:AAE6krvFlfqEvhhctGeJa0v-0Y2Z7ziufTg",
  chatID: "1933069895",
};


async function sendMessage() {
  if (!fullName.value || !phoneNumber.value) {
    alert("Barcha ma'lumotlar to'ldirilishi shart!");
    return;
  }

  isSending.value = true;

  const message = `📝 Yangi xabar:\n👤 Ism: ${fullName.value}\n📞 Telefon: +998${phoneNumber.value}`;

  const url = `https://api.telegram.org/bot${bot.TOKEN}/sendMessage`;

  try {
    console.log("Yuborilayotgan ma'lumotlar:", { chat_id: bot.chatID, text: message });

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: bot.chatID,
        text: message,
        parse_mode: "HTML",
      }),
    });

    const data = await response.json();
    console.log("Telegram javobi:", data);

    if (!data.ok) {
      throw new Error(`Telegram xatosi: ${data.description}`);
    }

    alert("Xabar yuborildi!");
    fullName.value = "";
    phoneNumber.value = "";
  } catch (error) {
    console.error("Xatolik:", error);
    alert("Xatolik yuz berdi, qaytadan urinib ko‘ring.");
  } finally {
    isSending.value = false;
  }
}

onMounted(() => {
  AOS.init({ duration: 1000, once: true });
});
</script>

<template>
  <div class="bgrow flex justify-center py-12 px-6">
    <div
      class="w-full md:w-[1280px] md:mx-auto grid grid-cols-1 md:grid-cols-2"
    >
      <div class="text-gray-800 mb-6 md:mb-0" data-aos="fade-up">
        <h2
          class="text-7xl font-light mb-4 text-[#1F5673]"
          data-aos="fade-up"
        >
          {{ $t("Yana") }}
        </h2>
        <p class="text-3xl mb-6 text-gray-700" data-aos="fade-up">
          {{ $t("Mutaxassislarimiz") }}
        </p>
        <p class="text-lg font-semibold text-gray-600" data-aos="fade-up">
          {{ $t("Telefon") }}
        </p>
        <a
          href="tel:+998 99 941 30 30"
          class="text-2xl font-bold mt-2 text-[#1F5673]"
          data-aos="fade-up"
        >
          +998 (99) 941 30 30
        </a>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="w-full flex justify-center mb-6" data-aos="fade-up">
          <svg height="10" width="100%" class="text-gray-600">
            <path
              d="M0 5 Q20 0, 40 5 T80 5 T120 5 T160 5 T200 5 T240 5 T280 5 T320 5 T360 5 T400 5 T440 5 T480 5 T520 5 T560 5"
              stroke="gray"
              fill="transparent"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div data-aos="fade-up">
          <label class="text-gray-700 text-lg block mb-1">{{
            $t("Ismingiz")
          }}</label>
          <input
            v-model="fullName"
            type="text"
            :placeholder="$t('Ismingiz')"
            class="w-full bg-transparent border-b-2 border-gray-600 text-gray-800 py-2 focus:outline-none focus:border-gray-400 placeholder-gray-400"
          />

          <label class="text-gray-700 text-lg block mt-6 mb-1">{{
            $t("Telefon")
          }}</label>
          <div class="flex items-center border-b-2 border-gray-600 py-2">
            <span class="text-gray-700 text-lg">🇺🇿</span>
            <span class="text-gray-700 ml-2">+998</span>
            <input
              v-model="phoneNumber"
              type="tel"
              placeholder="99-999-9999"
              class="ml-3 w-full bg-transparent text-gray-800 focus:outline-none placeholder-gray-400"
            />
          </div>

          <button
            @click="sendMessage"
            :disabled="isSending"
            class="w-full bg-[#1F5673] text-white font-semibold py-3 mt-6 rounded-full shadow-md hover:bg-[#163e54] transition"
          >
            {{ isSending ? "Yuborilmoqda..." : $t("YUBORISH") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
