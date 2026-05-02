<template>
  <div class="py-24">
    <div class="container mx-auto px-4">
      <div class="text-center mb-20">
        <h1 class="section-title">Daftar Harga Terbaru 2026</h1>
        <p class="section-subtitle mx-auto">Harga jujur dan ekonomis untuk kualitas air minum premium.</p>
      </div>

      <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="card relative overflow-hidden">
          <div class="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-bold rounded-bl-xl">POPULER</div>
          <h3 class="text-2xl font-bold mb-2">Isi Ulang (Ambil Sendiri)</h3>
          <p class="text-slate-500 mb-6">Datang langsung ke depot</p>
          <div class="flex items-baseline space-x-1 mb-8">
            <span class="text-slate-500 text-lg font-medium">Rp</span>
            <span class="text-5xl font-bold text-slate-900">5.000</span>
            <span class="text-slate-500">/ galon</span>
          </div>
          <ul class="space-y-4 mb-10 text-slate-600">
            <li class="flex items-center space-x-3 italic opacity-60">
              <svg class="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>Cuci Galon Gratis</span>
            </li>
            <li class="flex items-center space-x-3">
              <svg class="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>Langsung Jadi</span>
            </li>
          </ul>
          <NuxtLink to="/contact" class="btn-secondary w-full block text-center">Cek Lokasi</NuxtLink>
        </div>

        <div class="card border-blue-600 border-2 shadow-blue-100">
          <h3 class="text-2xl font-bold mb-2">Layanan Antar</h3>
          <p class="text-slate-500 mb-6">Gratis ongkir radius 3km</p>
          <div class="flex items-baseline space-x-1 mb-8">
            <span class="text-slate-500 text-lg font-medium">Rp</span>
            <span class="text-5xl font-bold text-blue-600">7.000</span>
            <span class="text-slate-500">/ galon</span>
          </div>
          <ul class="space-y-4 mb-10 text-slate-600">
            <li class="flex items-center space-x-3">
              <svg class="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>Antar Sampai Dapur</span>
            </li>
            <li class="flex items-center space-x-3">
              <svg class="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>Respon WA Cepat</span>
            </li>
            <li class="flex items-center space-x-3">
              <svg class="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>Minimal 2 Galon</span>
            </li>
          </ul>
          <NuxtLink to="/contact" class="btn-primary w-full block text-center">Pesan Sekarang</NuxtLink>
        </div>
      </div>

      <div class="mt-20 text-center bg-slate-50 p-10 rounded-3xl border border-slate-100 max-w-2xl mx-auto">
        <h4 class="font-bold text-lg mb-2">Butuh untuk Kantor atau Event?</h4>
        <p class="text-slate-600 mb-6">Kami melayani pemesanan skala besar dengan harga khusus yang lebih hemat.</p>
        <NuxtLink to="/contact" class="text-blue-600 font-bold hover:underline">Tanyakan Harga Grosir</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Daftar Harga Isi Ulang Galon 2026 - CV Tirta Agung',
  meta: [
    { name: 'description', content: 'Cek harga terbaru isi ulang air minum galon Tirta Agung Jogja. Harga terjangkau, layanan antar cepat.' }
  ]
})
</script>
