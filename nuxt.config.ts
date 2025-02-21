import process from 'node:process'

export default defineNuxtConfig({
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: "description", content: "Home Clean Uz – professional uy va mebel yuvish xizmati. Uy, gilam, mebel va avtomobil salonlarini tozalash bo‘yicha sifatli xizmatlar!" },
        { name: "keywords", content: "uy tozalash, gilam yuvish, mebel yuvish, tozalash xizmati, professional tozalash, Home Clean Uz" },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: "Home Clean Uz - Professional Uy va Mebel Yuvish Xizmati" },
        { property: "og:description", content: "Professional gilam, mebel va uy tozalash xizmatlari. Sifatli va ekologik toza yuvish xizmatlari!" },
        { property: "og:type", content: "website" },
        { name: "twitter:title", content: "Home Clean Uz - Professional Uy va Mebel Yuvish Xizmati" },
        { name: "twitter:description", content: "Uy, gilam va mebel tozalash xizmatlari. Tajribali mutaxassislar va ekologik xavfsiz yuvish vositalari!" },
      ],
    },
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },

  modules: [
    '@nuxt/devtools',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    // i18n support by nuxt module
    // comment if you don't want to use i18n.
    '@nuxtjs/i18n',
    '@nuxt/image',
  ],

  colorMode: {
    classSuffix: '',
  },

  // i18n support
  // comment if you don't want to use i18n.
  i18n: {
    vueI18n: './i18n.config.ts',
  },

  imports: {
    dirs: [
      // Scan top-level store modules
      'stores',
    ],
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  typescript: {
    tsConfig: {
      include: ['./types/**/*.d.ts'],
    },
    shim: false,
  },

  devtools: {
    enabled: true,
  },

  runtimeConfig: {
    public: {
      WHAT_ENV: process.env.WHAT_ENV || 'env_dev',
    },
  },

  compatibilityDate: '2024-09-08',
})
