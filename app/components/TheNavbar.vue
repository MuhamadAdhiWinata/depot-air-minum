<template>
  <nav class="fixed top-0 left-0 right-0 z-50 glass-effect">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <NuxtLink to="/" class="flex items-center space-x-2">
        <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <span class="text-white font-bold text-xl">TA</span>
        </div>
        <span class="text-xl font-bold tracking-tight text-slate-900">TIRTA AGUNG</span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <div class="hidden md:flex space-x-8 items-center font-medium">
        <NuxtLink to="/" class="hover:text-blue-600 transition-colors">Home</NuxtLink>
        <NuxtLink to="/about" class="hover:text-blue-600 transition-colors">Tentang</NuxtLink>
        <NuxtLink to="/services" class="hover:text-blue-600 transition-colors">Layanan</NuxtLink>
        <NuxtLink to="/pricing" class="hover:text-blue-600 transition-colors">Harga</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-blue-600 transition-colors">Kontak</NuxtLink>
        <NuxtLink to="/contact" class="btn-primary py-2 px-5 text-sm">Pesan Sekarang</NuxtLink>
      </div>

      <!-- Mobile Toggle -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 text-slate-600">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-white border-t border-slate-100 p-4 space-y-4 shadow-xl">
        <NuxtLink to="/" class="block font-medium py-2 hover:text-blue-600" @click="isMenuOpen = false">Home</NuxtLink>
        <NuxtLink to="/about" class="block font-medium py-2 hover:text-blue-600" @click="isMenuOpen = false">Tentang Kami</NuxtLink>
        <NuxtLink to="/services" class="block font-medium py-2 hover:text-blue-600" @click="isMenuOpen = false">Layanan</NuxtLink>
        <NuxtLink to="/pricing" class="block font-medium py-2 hover:text-blue-600" @click="isMenuOpen = false">Harga</NuxtLink>
        <NuxtLink to="/contact" class="block font-medium py-2 hover:text-blue-600" @click="isMenuOpen = false">Kontak</NuxtLink>
        <NuxtLink to="/contact" class="btn-primary block text-center" @click="isMenuOpen = false">Pesan Sekarang</NuxtLink>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
const isMenuOpen = ref(false)
</script>
