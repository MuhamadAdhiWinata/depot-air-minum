<template>
  <footer class="bg-slate-900 text-slate-300 pt-20 pb-10">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div class="space-y-6">
          <div class="flex items-center space-x-2 text-white">
            <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">TA</span>
            </div>
            <span class="text-xl font-bold tracking-tight">TIRTA AGUNG</span>
          </div>
          <p class="text-slate-400">
            Penyedia layanan air minum isi ulang berkualitas tinggi di Yogyakarta. Higienis, segar, dan terpercaya sejak 2015.
          </p>
          <div class="flex space-x-4">
            <!-- Social Icons Placeholder -->
            <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6">Navigasi</h4>
          <ul class="space-y-4">
            <li><NuxtLink to="/" class="hover:text-blue-500 transition-colors">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-blue-500 transition-colors">Tentang Kami</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-blue-500 transition-colors">Layanan</NuxtLink></li>
            <li><NuxtLink to="/pricing" class="hover:text-blue-500 transition-colors">Harga</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6">Area Layanan</h4>
          <ul class="space-y-4">
            <li><NuxtLink to="/area/sleman" class="hover:text-blue-500 transition-colors">Sleman</NuxtLink></li>
            <li><NuxtLink to="/area/bantul" class="hover:text-blue-500 transition-colors">Bantul</NuxtLink></li>
            <li><NuxtLink to="/area/kota-jogja" class="hover:text-blue-500 transition-colors">Kota Yogyakarta</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6">Kontak</h4>
          <ul class="space-y-4 text-slate-400">
            <li class="flex items-start space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Jl. Magelang Km 5, Sleman, DIY</span>
            </li>
            <li class="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+62 812-3456-7890</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2026 CV Tirta Agung. All rights reserved.</p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="#" class="hover:text-white">Privacy Policy</a>
          <a href="#" class="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>
