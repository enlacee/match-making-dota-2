<script setup>
  import ConfigModal from '~/components/shared/ConfigModal.vue';

  const showConfigModal = ref(false)
</script>
<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full">
      <div class="text-center">
        <img src="~/assets/images/dota2_logo_horiz.png" 
             alt="Logo de Dota 2" 
             class="mx-auto h-16 mb-6">
        <h1 class="text-3xl font-bold text-red-500 mb-8">Matchmaking Tool</h1>
        
        <div class="space-y-4">
          <NuxtLink 
            to="/players" 
            class="block w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-200 ease-in-out transform hover:scale-105">
            Gestionar Jugadores
          </NuxtLink>
          
          <button 
            @click="showConfigModal = true"
            class="w-full py-3 px-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg transition duration-200 ease-in-out transform hover:scale-105">
            Configuración
          </button>
        </div>

        <p class="mt-8 text-sm text-gray-500 dark:text-gray-400">
          Versión 1.0.1
        </p>
      </div>
    </div>

    <!-- Modal -->
    <ConfigModal v-model="showConfigModal" />
  </div>
</template>
<!--

<script setup lang="ts">
    import TheApplication from '~/components/TheApplication.vue';
</script>

<template>
  <div class="h-screen min-h-screen overflow-y-auto">
    <TheApplication></TheApplication>
  </div>
</template>

-->