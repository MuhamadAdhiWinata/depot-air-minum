<template>
  <div class="min-h-screen flex flex-col">
    <TheNavbar />
    
    <main class="flex-grow pt-20">
      <NuxtPage />
    </main>

    <TheFooter />
    <WhatsAppFloating />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
