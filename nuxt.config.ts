import process from 'node:process'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'House Clean Uz - Uy va Mebel Tozalash Xizmati Toshkent',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { hid: 'description', name: 'description', content: 'House Clean Uz – professional uy va mebel yuvish xizmati. Toshkentda gilam yuvish, mebel tozalash, uy va avtomobil salonlarini yuvish bo‘yicha sifatli xizmatlar!' },
        { name: 'keywords', content: 'uy tozalash, gilam yuvish Toshkent, mebel yuvish, tozalash xizmati, professional tozalash, uy yuvish, House Clean Uz' },
        { name: 'robots', content: 'index, follow' },
        // Open Graph (Facebook, LinkedIn va boshqalar uchun)
        { property: 'og:title', content: 'House Clean Uz - Uy va Mebel Yuvish Xizmati Toshkent' },
        { property: 'og:description', content: 'Toshkentdagi eng yaxshi uy, gilam, mebel va avtomobil salonlarini yuvish xizmati. Sifatli, ekologik xavfsiz va professional tozalash!' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://houseclean.uz' },
        { property: 'og:image', content: 'https://houseclean.uz/images/preview.jpg' },
        // Twitter Cards
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'House Clean Uz - Uy va Mebel Tozalash Xizmati Toshkent' },
        { name: 'twitter:description', content: 'Toshkentda uy, gilam va mebel yuvish xizmati. Tajribali mutaxassislar va ekologik xavfsiz yuvish vositalari!' },
        { name: 'twitter:image', content: 'https://houseclean.uz/images/preview.jpg' },
      ],
      link: [
        { rel: 'canonical', href: 'https://houseclean.uz' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': 'House Clean Uz',
            'url': 'https://houseclean.uz',
            'image': 'https://houseclean.uz/images/preview.jpg',
            'description': 'Toshkentdagi eng yaxshi uy va mebel tozalash xizmati. Professional gilam, mebel va avtomobil salonlarini yuvish xizmatlari.',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': 'Amir Temur ko‘chasi, Toshkent',
              'addressLocality': 'Toshkent',
              'addressCountry': 'UZ',
            },
            'contactPoint': {
              '@type': 'ContactPoint',
              'telephone': '+998 90 123 45 67',
              'contactType': 'customer service',
            },
            'openingHours': 'Mo-Su 08:00-20:00',
            'priceRange': '$$',
          }),
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'Uy va Mebel Yuvish Xizmati',
            'provider': {
              '@type': 'LocalBusiness',
              'name': 'House Clean Uz',
            },
            'areaServed': {
              '@type': 'City',
              'name': 'Toshkent',
            },
            'serviceType': 'Professional Cleaning',
            'availableChannel': {
              '@type': 'ServiceChannel',
              'serviceUrl': 'https://houseclean.uz',
              'availableLanguage': ['Uzbek', 'Russian'],
            },
          }),
        },
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
