// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],
  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://depot-air.adhinath.my.id',
    name: 'CV Tirta Agung - Depot Air Minum Isi Ulang Jogja',
  },
  sitemap: {
    hostname: 'https://depot-air.adhinath.my.id',
    gzip: true,
  },
  app: {
    head: {
      title: 'CV Tirta Agung - Depot Air Minum Isi Ulang Jogja',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Depot Air Minum Isi Ulang Berkualitas di Jogja. Higienis, teruji lab, dan harga terjangkau.' },
        { name: 'keywords', content: 'depot air minum jogja, isi ulang galon sleman, air minum isi ulang bantul, cv tirta agung' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://depot-air.adhinath.my.id/' },
        { property: 'og:title', content: 'CV Tirta Agung - Depot Air Minum Isi Ulang Jogja' },
        { property: 'og:description', content: 'Depot Air Minum Isi Ulang Berkualitas di Jogja. Higienis dan Teruji Lab.' },
        { property: 'og:image', content: 'https://depot-air.adhinath.my.id/hero.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
