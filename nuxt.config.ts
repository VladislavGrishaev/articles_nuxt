// @ts-ignore
export default defineNuxtConfig({
  css: [
    '@/assets/styles/main.scss',
  ],

  imports: {
    autoImport: true
  },

  modules: [
    '@pinia/nuxt'
  ],

  pinia: {
    storesDirs: ['./store/**'],
  },

  ssr: false,
  devtools: { enabled: false },
  compatibilityDate: '2025-04-16'
})