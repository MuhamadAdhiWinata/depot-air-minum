// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'CV Tirta Agung - Depot Air Minum Isi Ulang Jogja',
      meta: [
        { name: 'description', content: 'Depot Air Minum Isi Ulang Berkualitas di Jogja. Higienis, teruji lab, dan harga terjangkau.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
