<template>
  <div class="py-24">
    <div class="container mx-auto px-4">
      <div v-if="post" class="max-w-3xl mx-auto">
        <NuxtLink to="/blog" class="text-blue-600 font-bold flex items-center space-x-2 mb-12 hover:-translate-x-1 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          <span>Kembali ke Blog</span>
        </NuxtLink>

        <div class="flex items-center space-x-3 text-sm font-bold text-blue-600 uppercase mb-6">
          <span>{{ post.category }}</span>
          <span>•</span>
          <span class="text-slate-400">{{ post.date }}</span>
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-10 leading-tight">{{ post.title }}</h1>
        
        <div class="prose prose-lg text-slate-600 max-w-none">
          <p class="text-xl italic border-l-4 border-blue-600 pl-6 my-10">
            {{ post.excerpt }}
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-6">Proses Filtrasi yang Benar</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <!-- Internal Link Engine Placeholder -->
          <div class="my-16 p-8 bg-blue-600 rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="max-w-md">
              <h3 class="text-xl font-bold mb-2">Ingin Air Minum Berkualitas?</h3>
              <p class="text-blue-100 text-sm opacity-80">Pesan air isi ulang Tirta Agung sekarang untuk kesehatan keluarga Anda.</p>
            </div>
            <NuxtLink to="/pricing" class="bg-white text-blue-600 px-8 py-3 rounded-full font-bold whitespace-nowrap hover:bg-blue-50 transition-colors">
              Cek Harga 2026
            </NuxtLink>
          </div>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
      <div v-else class="text-center py-20">
        <h2 class="text-2xl font-bold text-slate-400">Artikel Tidak Ditemukan</h2>
        <NuxtLink to="/blog" class="text-blue-600 mt-4 inline-block">Kembali ke Blog</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug

const posts = {
  'alasan-air-ro-sehat': {
    title: '5 Alasan Kenapa Air RO Lebih Sehat untuk Ginjal',
    category: 'Kesehatan',
    date: '15 Maret 2026',
    excerpt: 'Air Reverse Osmosis (RO) memiliki kadar TDS yang rendah. Cari tahu bagaimana ini membantu meringankan kerja ginjal Anda.'
  },
  'ciri-galon-higienis': {
    title: 'Cara Membedakan Galon Higienis dan Tidak di Depot',
    category: 'Tips',
    date: '10 Maret 2026',
    excerpt: 'Jangan asal pilih! Kenali ciri-ciri depot air minum yang benar-benar menjaga kebersihan galon dan mesin filtrasinya.'
  },
  'hidrasi-musim-kemarau': {
    title: 'Pentingnya Hidrasi Selama Musim Kemarau di Jogja',
    category: 'Lifestyle',
    date: '02 Maret 2026',
    excerpt: 'Suhu Jogja yang meningkat saat kemarau membutuhkan asupan air yang lebih banyak. Berikut tips menjaga hidrasi agar tetap bugar.'
  }
}

const post = computed(() => posts[slug] || null)

useHead({
  title: post.value ? `${post.value.title} - CV Tirta Agung` : 'Blog',
  meta: [
    { name: 'description', content: post.value ? post.value.excerpt : '' }
  ]
})
</script>
