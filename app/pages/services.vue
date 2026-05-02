<template>
  <div class="py-24">
    <div class="container mx-auto px-4">
      <div class="text-center mb-20">
        <h1 class="section-title">Layanan & Teknologi Kami</h1>
        <p class="section-subtitle mx-auto">Kami menggunakan teknologi filtrasi tercanggih untuk memastikan kualitas air minum terbaik.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <div>
          <div class="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-4 tracking-wider uppercase">
            Teknologi Utama
          </div>
          <h2 class="text-3xl font-bold mb-6">Reverse Osmosis (RO)</h2>
          <p class="text-slate-600 mb-8 leading-relaxed">
            Teknologi RO kami mampu menyaring partikel hingga ukuran 0.0001 mikron, menghilangkan kontaminan berbahaya, logam berat, dan bakteri, sehingga menghasilkan air yang murni dan aman dikonsumsi langsung.
          </p>
          <ul class="space-y-4">
            <li class="flex items-center space-x-3">
              <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>Filtrasi Sedimen & Karbon Aktif</span>
            </li>
            <li class="flex items-center space-x-3">
              <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>Membran Semi-Permeable Impor</span>
            </li>
            <li class="flex items-center space-x-3">
              <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>Penghilang Bau & Rasa Klorin</span>
            </li>
          </ul>
        </div>
        <div class="bg-blue-600 rounded-3xl h-[400px] flex items-center justify-center text-white text-xl font-bold shadow-2xl">
          <!-- Placeholder for RO Machine Image -->
          <div class="text-center p-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 mx-auto mb-6 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86 .517l-.642.321a2 2 0 01-1.584 0l-.642-.321a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547l-1.167 1.167a2 2 0 00.586 3.414l7.141 1.428a2 2 0 001.164 0l7.141-1.428a2 2 0 00.586-3.414l-1.167-1.167z" />
            </svg>
            Visualisasi Mesin RO
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="card bg-slate-900 text-white border-none">
          <h3 class="text-xl font-bold mb-4">UV Sterilization</h3>
          <p class="text-slate-400">Tahap akhir untuk memastikan air bebas kuman dan bakteri sebelum masuk ke dalam galon.</p>
        </div>
        <div class="card bg-blue-50 border-blue-100">
          <h3 class="text-xl font-bold mb-4">Antar Jemput</h3>
          <p class="text-slate-600">Layanan pengantaran gratis ke rumah, kantor, atau kost untuk wilayah area layanan kami.</p>
        </div>
        <div class="card">
          <h3 class="text-xl font-bold mb-4">Pencucian Galon</h3>
          <p class="text-slate-600">Setiap galon dibersihkan luar dan dalam menggunakan ozon food-grade yang aman.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Layanan & Teknologi - CV Tirta Agung',
  meta: [
    { name: 'description', content: 'Teknologi filtrasi RO dan UV yang kami gunakan untuk menjamin kualitas air minum terbaik di Jogja.' }
  ]
})
</script>
