<script setup>
import { usePlayers } from '@/composables/usePlayers'
import { useMedals } from '@/composables/useMedals'
const { players, CUSTOM_MODE, deletePlayer, addPlayer } = usePlayers()
const { idImageAllMedals } = useMedals()

const runtimeConfig = useRuntimeConfig()
const baseURL = runtimeConfig.public.baseURL;

console.log('runtimeConfig.public.baseURL', baseURL)

const showMedals = ref(false)
const newPlayer = ref({
  nickname: '',
  mmr: '',
  custom: CUSTOM_MODE.AUTO
})

const validateForm = () => {

    console.log('newPlayer.value', newPlayer.value);
    if (newPlayer.value.nickname && Number.isInteger(newPlayer.value.mmr)) {
      addPlayer({ 
        nickname: newPlayer.value.nickname,
        mmr: parseInt(newPlayer.value.mmr),
        idMedalla: newPlayer.value.idMedalla,
        custom: newPlayer.value.custom
      });

      // clear form
      newPlayer.value.nickname = ''
      newPlayer.value.mmr = ''
      newPlayer.value.idMedalla = ''
      newPlayer.value.custom = CUSTOM_MODE.AUTO
    }
};

watch(showMedals, (newVal) => {
  // manualSelection.value = newVal
  if (!newVal === true) {
    newPlayer.value.custom = CUSTOM_MODE.AUTO; // resetea data por defecto para mantener CONSISTENCIA
  }
})
</script>
<template>
  <div class="py-8">
    <div class="max-w-3xl mx-auto">
      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-2xl font-bold text-red-500">Gestión de Jugadores</h1>
        <NuxtLink 
          to="/" 
          class="px-4 py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition">
          Volver al Inicio
        </NuxtLink>
      </div>

      <!-- Add Player Form -->
      <div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h2 class="text-xl font-semibold mb-4">Agregar Nuevo Jugador</h2>
        <form class="space-y-4" @submit.prevent="validateForm">
          <input type="hidden" v-model="newPlayer.custom">
          <div>
            <label class="block text-sm font-medium mb-2">Apodo de Dota 2</label>
            <input 
              v-model="newPlayer.nickname"
              type="text"
              class="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-900 dark:text-white"
              placeholder="Ingresa el apodo">
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-2">MMR</label>
            <input 
              v-model="newPlayer.mmr"
              type="number"
              class="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-900 dark:text-white"
              placeholder="Ingresa el MMR">
          </div>

          <div>
            <!-- <label class="block text-sm font-medium mb-2">Seleccionar Medalla</label> -->

            <!-- Label con icono de flecha que gira al hacer clic -->
            <label 
              class="block text-sm font-medium mb-2 cursor-pointer flex items-center justify-between"
              @click="showMedals = !showMedals"
            >
              <!-- Seleccionar Medalla -->
              <span>
                {{ showMedals ? '* Seleccionar Medalla (Manual)' : '* Asignación automática por MMR' }}
              </span>
              <svg 
                class="w-5 h-5 transition-transform duration-300"
                :class="{'rotate-180': showMedals}" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </label>

            <!-- <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2"> -->
            <div v-if="showMedals" class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 transition-all duration-300">
              <div 
                v-for="medal in idImageAllMedals" 
                :key="medal.id" 
                @click="newPlayer.idMedalla = medal.id; newPlayer.custom = 1"
                class="border rounded-lg p-2 cursor-pointer hover:border-red-500"
                :class="{'border-red-500': newPlayer.idMedalla === medal.id}"
              >
                <!-- <NuxtImg :src="`/images/medals/${medal.id}.jpg`" :alt="medal.name" class="w-12 h-12 mx-auto"/> -->
                <img :src="`${baseURL}/images/custom-medals/${medal.id}.webp`" :alt="medal.name" class="w-25 h-25 mx-auto">

                <p class="text-center text-sm mt-2">{{ medal.name }}&nbsp;</p>
              </div>
            </div>
          </div>

<!-- {{newPlayer}} -->

          <button 
            type="submit"
            class="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition">
            Agregar Jugador
          </button>
        </form>
      </div>

      <!-- Players List -->
      <div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
        <h2 class="text-xl font-semibold mb-4">Lista de Jugadores</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full">
            <thead>
              <tr class="text-left text-sm text-gray-500 dark:text-gray-400">
                <th class="pb-3 px-3">#</th>
                <th class="pb-3 px-3">Apodo</th>
                <th class="pb-3 px-3">MMR</th>
                <th class="pb-3 px-3">Medalla</th>
                <th class="pb-3 px-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(player, index) in players /*[...players].reverse()*/" 
                  :key="index"
                  class="border-t border-gray-200 dark:border-gray-700">
                <td class="py-2 px-3 text-sm">{{ index + 1/*players.length - index*/ }}</td>
                <td class="py-2 px-3">
                  <span class="font-medium">{{ player.nickname }}</span>
                </td>
                <td class="py-2 px-3">{{ player.mmr }}</td>
                <td class="py-2 px-3">
                  <div class="flex items-center space-x-2">
                    <!-- <NuxtImg :src="`/images/medals/${player.idMedalla}.jpg`" :alt="player.medalla" class="w-8 h-8"/> -->
                    <img :src="`${baseURL}/images/medals/${player.idMedalla}.webp`" :alt="player.medalla" class="w-8 h-8">
                    <span class="text-sm">{{ player.medalla }}</span>
                  </div>
                </td>
                <td class="py-2 px-3">
                  <button 
                    @click="deletePlayer(index)"
                    class="p-1.5 text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/50 rounded">
                    Eliminar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>