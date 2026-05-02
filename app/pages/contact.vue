<template>
  <div class="py-24">
    <div class="container mx-auto px-4">
      <div class="text-center mb-20">
        <h1 class="section-title">Hubungi Kami</h1>
        <p class="section-subtitle mx-auto">Klik pada area terdekat Anda untuk langsung terhubung dengan admin cabang.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div v-for="branch in branches" :key="branch.id" class="card hover:border-blue-300 transition-all">
          <div class="flex justify-between items-start mb-6">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span class="text-xs font-bold text-slate-400 uppercase tracking-widest">{{ branch.area }}</span>
          </div>
          <h3 class="text-xl font-bold mb-2">{{ branch.name }}</h3>
          <p class="text-slate-500 text-sm mb-6 h-12 overflow-hidden">{{ branch.address }}</p>
          
          <div class="space-y-3">
            <a :href="`https://wa.me/${branch.phone}`" target="_blank" class="flex items-center justify-center space-x-2 w-full py-3 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#20ba5a] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              <span>WhatsApp Admin</span>
            </a>
            <a href="#" class="flex items-center justify-center space-x-2 w-full py-3 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7l5-2.5 5.553 2.776a1 1 0 01.447.894v10.764a1 1 0 01-1.447.894L15 17l-6 3z" />
              </svg>
              <span>Google Maps</span>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-24 bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">Punya Pertanyaan Lain?</h2>
            <p class="text-slate-400 mb-8">Admin pusat kami siap membantu Anda memberikan informasi lebih detail mengenai kemitraan atau keluhan layanan.</p>
            <div class="flex items-center space-x-4 mb-4">
              <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span class="text-lg">halo@tirtaagung.com</span>
            </div>
          </div>
          <div class="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <h3 class="text-xl font-bold mb-6">Jam Operasional</h3>
            <div class="space-y-4">
              <div class="flex justify-between border-b border-white/10 pb-2">
                <span>Senin - Sabtu</span>
                <span class="font-bold">07:00 - 20:00</span>
              </div>
              <div class="flex justify-between border-b border-white/10 pb-2">
                <span>Minggu</span>
                <span class="font-bold">08:00 - 17:00</span>
              </div>
              <div class="flex justify-between pt-2">
                <span>Hari Libur Nasional</span>
                <span class="text-blue-400">Tutup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const branches = [
  { id: 1, name: 'Tirta Agung Mlati', area: 'Sleman', address: 'Jl. Magelang Km 7, Mlati, Sleman', phone: '6281234567890' },
  { id: 2, name: 'Tirta Agung Depok', area: 'Sleman', address: 'Jl. Gejayan No. 45, Depok, Sleman', phone: '6281234567891' },
  { id: 3, name: 'Tirta Agung Kasihan', area: 'Bantul', address: 'Jl. Bantul Km 5, Kasihan, Bantul', phone: '6281234567892' },
  { id: 4, name: 'Tirta Agung Umbulharjo', area: 'Jogja Kota', address: 'Jl. Kusumanegara No. 12, Umbulharjo', phone: '6281234567893' },
  { id: 5, name: 'Tirta Agung Jetis', area: 'Jogja Kota', address: 'Jl. AM Sangaji No. 8, Jetis, Yogyakarta', phone: '6281234567894' },
  { id: 6, name: 'Tirta Agung Gamping', area: 'Sleman', address: 'Jl. Wates Km 4, Gamping, Sleman', phone: '6281234567895' }
]

useHead({
  title: 'Hubungi Kami - Lokasi Cabang Tirta Agung',
  meta: [
    { name: 'description', content: 'Cari lokasi cabang Tirta Agung terdekat di Sleman, Bantul, dan Kota Jogja. Pesan via WhatsApp sekarang.' }
  ]
})
</script>
