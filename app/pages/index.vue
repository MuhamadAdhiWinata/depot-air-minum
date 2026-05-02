<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center pt-20">
      <div class="absolute inset-0 z-0 overflow-hidden">
        <img src="/hero.png" alt="Depot Air Minum Tirta Agung" class="w-full h-full object-cover opacity-90" />
        <div class="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl">
          <span class="inline-block py-1 px-3 rounded-full bg-blue-100/80 backdrop-blur-sm text-blue-700 text-sm font-bold mb-6 tracking-wider uppercase border border-blue-200">
            Terpercaya Sejak 2015
          </span>
          <h1 class="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-8 drop-shadow-sm">
            Depot Air Minum Isi Ulang <span class="text-gradient">Berkualitas</span> di Jogja
          </h1>
          <p class="text-xl text-slate-700 mb-10 leading-relaxed max-w-2xl font-medium drop-shadow-sm">
            Nikmati air minum yang higienis, segar, dan teruji laboratorium. Kami melayani antar jemput galon untuk wilayah Sleman, Bantul, dan Kota Yogyakarta.
          </p>
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <NuxtLink to="/contact" class="btn-primary flex items-center justify-center space-x-2">
              <span>Pesan Sekarang</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
            <NuxtLink to="/services" class="btn-secondary flex items-center justify-center bg-white/50 backdrop-blur-sm">
              Lihat Layanan Kami
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-24 bg-slate-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="section-title">Kenapa Memilih Tirta Agung?</h2>
          <p class="section-subtitle mx-auto">Kami mengutamakan kualitas dan kesehatan keluarga Anda dengan proses filtrasi modern.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card group">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Higienis & Steril</h3>
            <p class="text-slate-600">Proses pembersihan galon menggunakan metode UV Sterilization dan pembersihan ozon yang efektif membunuh bakteri.</p>
          </div>

          <div class="card group">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86 .517l-.642.321a2 2 0 01-1.584 0l-.642-.321a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547l-1.167 1.167a2 2 0 00.586 3.414l7.141 1.428a2 2 0 001.164 0l7.141-1.428a2 2 0 00.586-3.414l-1.167-1.167z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.414a5 5 0 001.414 1.414m2.828-9.9a9 9 0 000 12.728" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Teruji Laboratorium</h3>
            <p class="text-slate-600">Air kami rutin diuji di laboratorium kesehatan untuk memastikan kadar pH dan kejernihan sesuai standar WHO.</p>
          </div>

          <div class="card group">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Layanan Cepat</h3>
            <p class="text-slate-600">Tim pengantaran kami siap meluncur ke lokasi Anda dengan respon cepat untuk wilayah Yogyakarta dan sekitarnya.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Branch Map Preview -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="lg:w-1/2">
            <h2 class="section-title">Hadir Lebih Dekat Dengan Anda</h2>
            <p class="text-lg text-slate-600 mb-8">
              Tirta Agung memiliki 6 cabang yang tersebar strategis di Sleman, Bantul, dan Kota Jogja untuk memastikan layanan pengantaran yang lebih cepat dan efisien.
            </p>
            <div class="space-y-4 mb-10">
              <div class="flex items-center space-x-3 text-slate-700">
                <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Sleman (Mlati, Depok, Gamping)</span>
              </div>
              <div class="flex items-center space-x-3 text-slate-700">
                <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Bantul (Kasihan, Sewon)</span>
              </div>
              <div class="flex items-center space-x-3 text-slate-700">
                <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Kota Yogyakarta (Umbulharjo, Jetis)</span>
              </div>
            </div>
            <NuxtLink to="/contact" class="btn-primary inline-block">Cek Lokasi Cabang</NuxtLink>
          </div>
          <div class="lg:w-1/2 w-full h-[400px] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl relative">
            <!-- Map Placeholder -->
            <div class="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
              <div class="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7l5-2.5 5.553 2.776a1 1 0 01.447.894v10.764a1 1 0 01-1.447.894L15 17l-6 3z" />
                </svg>
                Peta Lokasi Cabang (Google Maps API)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-blue-600 relative overflow-hidden">
      <div class="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-blue-500 rounded-full opacity-50 blur-3xl"></div>
      <div class="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-cyan-400 rounded-full opacity-30 blur-3xl"></div>
      
      <div class="container mx-auto px-4 relative z-10 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-8">Siap Hidup Sehat Mulai Hari Ini?</h2>
        <p class="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Pesan sekarang dan rasakan kesegaran air Tirta Agung. Pengantaran gratis untuk minimal 3 galon!
        </p>
        <NuxtLink to="/contact" class="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl">
          Hubungi WhatsApp Kami
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Depot Air Minum Isi Ulang Jogja - CV Tirta Agung',
  meta: [
    { name: 'description', content: 'Depot air minum isi ulang terbaik di Jogja. Higienis, teruji lab, dan melayani antar jemput wilayah Sleman, Bantul, dan Kota.' }
  ]
})
</script>
