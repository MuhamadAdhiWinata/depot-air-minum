<template>
  <div class="py-24">
    <div class="container mx-auto px-4">
      <div v-if="areaData" class="max-w-4xl mx-auto">
        <nav class="flex mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
          <ol class="flex items-center space-x-2">
            <li><NuxtLink to="/" class="hover:text-blue-600">Home</NuxtLink></li>
            <li><span>/</span></li>
            <li><span class="text-slate-900 font-medium">Area Layanan</span></li>
            <li><span>/</span></li>
            <li class="capitalize">{{ areaData.name }}</li>
          </ol>
        </nav>

        <h1 class="text-4xl md:text-6xl font-bold text-slate-900 mb-8">
          Depot Air Minum Isi Ulang Terdekat di <span class="text-gradient capitalize">{{ areaData.name }}</span>
        </h1>

        <div class="prose prose-lg text-slate-600 max-w-none">
          <p class="text-xl mb-10 leading-relaxed">
            Warga <strong>{{ areaData.name }}</strong> kini tidak perlu bingung mencari air minum isi ulang yang berkualitas. CV Tirta Agung hadir di beberapa titik strategis di wilayah {{ areaData.name }} untuk melayani kebutuhan air minum harian Anda.
          </p>

          <img src="/hero.png" :alt="`Layanan Air Minum ${areaData.name}`" class="w-full h-[400px] object-cover rounded-3xl mb-12 shadow-xl opacity-80" />

          <h2 class="text-3xl font-bold text-slate-900 mt-16 mb-6">Kenapa Warga {{ areaData.name }} Memilih Kami?</h2>
          <p>
            Kami memahami bahwa mobilitas warga di {{ areaData.name }} sangat tinggi. Oleh karena itu, kami menyediakan layanan antar jemput galon yang responsif. Hanya dengan kirim pesan via WhatsApp, tim kurir kami akan segera menuju lokasi Anda.
          </p>

          <div class="bg-blue-50 p-8 rounded-3xl border border-blue-100 my-12">
            <h3 class="text-blue-900 font-bold text-xl mb-4">Cakupan Wilayah di {{ areaData.name }}:</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div v-for="sub in areaData.subAreas" :key="sub" class="flex items-center space-x-2">
                <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                <span>{{ sub }}</span>
              </div>
            </div>
          </div>

          <h2 class="text-3xl font-bold text-slate-900 mt-16 mb-6">Cabang Kami di {{ areaData.name }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
            <div v-for="branch in areaBranches" :key="branch.id" class="card">
              <h4 class="font-bold text-lg mb-2">{{ branch.name }}</h4>
              <p class="text-sm text-slate-500 mb-4">{{ branch.address }}</p>
              <a :href="`https://wa.me/${branch.phone}`" target="_blank" class="text-blue-600 font-bold text-sm flex items-center space-x-1 hover:underline">
                <span>Pesan Sekarang</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-center py-20">
        <h2 class="text-2xl font-bold text-slate-400">Area Tidak Ditemukan</h2>
        <NuxtLink to="/" class="text-blue-600 mt-4 inline-block">Kembali ke Home</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug

const areas = {
  'sleman': {
    name: 'Sleman',
    subAreas: ['Mlati', 'Depok', 'Gamping', 'Ngaglik', 'Sleman Kota', 'Kalasan'],
    keywords: 'isi ulang galon sleman, depot air minum sleman'
  },
  'bantul': {
    name: 'Bantul',
    subAreas: ['Kasihan', 'Sewon', 'Banguntapan', 'Bantul Kota', 'Piyungan'],
    keywords: 'isi ulang galon bantul, depot air minum bantul'
  },
  'kota-jogja': {
    name: 'Kota Yogyakarta',
    subAreas: ['Umbulharjo', 'Jetis', 'Kotagede', 'Danurejan', 'MANTRIJERON'],
    keywords: 'isi ulang galon jogja, depot air minum jogja kota'
  }
}

const areaData = computed(() => areas[slug] || null)

const branches = [
  { id: 1, name: 'Tirta Agung Mlati', area: 'sleman', address: 'Jl. Magelang Km 7, Mlati, Sleman', phone: '6281234567890' },
  { id: 2, name: 'Tirta Agung Depok', area: 'sleman', address: 'Jl. Gejayan No. 45, Depok, Sleman', phone: '6281234567891' },
  { id: 3, name: 'Tirta Agung Kasihan', area: 'bantul', address: 'Jl. Bantul Km 5, Kasihan, Bantul', phone: '6281234567892' },
  { id: 4, name: 'Tirta Agung Umbulharjo', area: 'kota-jogja', address: 'Jl. Kusumanegara No. 12, Umbulharjo', phone: '6281234567893' },
  { id: 5, name: 'Tirta Agung Jetis', area: 'kota-jogja', address: 'Jl. AM Sangaji No. 8, Jetis, Yogyakarta', phone: '6281234567894' },
  { id: 6, name: 'Tirta Agung Gamping', area: 'sleman', address: 'Jl. Wates Km 4, Gamping, Sleman', phone: '6281234567895' }
]

const areaBranches = computed(() => {
  if (!areaData.value) return []
  return branches.filter(b => b.area === slug)
})

const schemaMarkup = computed(() => {
  if (!areaData.value) return null
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `CV Tirta Agung - ${areaData.value.name}`,
    "description": `Depot air minum isi ulang terbaik di wilayah ${areaData.value.name}, Yogyakarta.`,
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "DIY",
      "addressLocality": areaData.value.name,
      "addressCountry": "ID"
    },
    "telephone": "+6281234567890",
    "priceRange": "Rp5.000 - Rp7.000"
  }
})

useHead({
  title: areaData.value ? `Depot Air Minum Isi Ulang Terdekat di ${areaData.value.name} - Tirta Agung` : 'Area Layanan',
  meta: [
    { name: 'description', content: areaData.value ? `Cari depot air minum isi ulang higienis di ${areaData.value.name}. Layanan antar jemput galon cepat dan terpercaya.` : '' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(schemaMarkup.value)
    }
  ]
})
</script>
