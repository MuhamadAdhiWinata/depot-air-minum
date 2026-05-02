<template>
  <div class="py-24">
    <div class="container mx-auto px-4">
      <div class="text-center mb-20">
        <h1 class="section-title">Edukasi Kesehatan Air</h1>
        <p class="section-subtitle mx-auto">Tips dan informasi seputar pentingnya konsumsi air bersih untuk kesehatan keluarga.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="post in posts" :key="post.slug" class="card group cursor-pointer hover:scale-[1.02] transition-all">
          <div class="h-48 bg-slate-100 rounded-xl mb-6 overflow-hidden">
            <div class="w-full h-full bg-blue-100 flex items-center justify-center text-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div class="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase mb-3">
            <span>{{ post.category }}</span>
            <span>•</span>
            <span class="text-slate-400">{{ post.date }}</span>
          </div>
          <h3 class="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors leading-tight">{{ post.title }}</h3>
          <p class="text-slate-500 text-sm mb-6 line-clamp-3">{{ post.excerpt }}</p>
          <NuxtLink :to="`/blog/${post.slug}`" class="text-slate-900 font-bold text-sm flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
            <span>Baca Selengkapnya</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    title: '5 Alasan Kenapa Air RO Lebih Sehat untuk Ginjal',
    slug: 'alasan-air-ro-sehat',
    category: 'Kesehatan',
    date: '15 Maret 2026',
    excerpt: 'Air Reverse Osmosis (RO) memiliki kadar TDS yang rendah. Cari tahu bagaimana ini membantu meringankan kerja ginjal Anda...'
  },
  {
    title: 'Cara Membedakan Galon Higienis dan Tidak di Depot',
    slug: 'ciri-galon-higienis',
    category: 'Tips',
    date: '10 Maret 2026',
    excerpt: 'Jangan asal pilih! Kenali ciri-ciri depot air minum yang benar-benar menjaga kebersihan galon dan mesin filtrasinya...'
  },
  {
    title: 'Pentingnya Hidrasi Selama Musim Kemarau di Jogja',
    slug: 'hidrasi-musim-kemarau',
    category: 'Lifestyle',
    date: '02 Maret 2026',
    excerpt: 'Suhu Jogja yang meningkat saat kemarau membutuhkan asupan air yang lebih banyak. Berikut tips menjaga hidrasi agar tetap bugar...'
  }
]

useHead({
  title: 'Blog Edukasi Air Minum - CV Tirta Agung',
  meta: [
    { name: 'description', content: 'Kumpulan artikel seputar kesehatan air minum, tips memilih air isi ulang, dan info kesehatan dari Tirta Agung.' }
  ]
})
</script>
