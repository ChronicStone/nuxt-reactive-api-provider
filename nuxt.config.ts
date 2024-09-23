// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: { typedPages: true },
  pages: true,
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
