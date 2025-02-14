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
              <tr v-for="(player, index) in players" 
                  :key="index"
                  class="border-t border-gray-200 dark:border-gray-700">
                <td class="py-2 px-3 text-sm">{{ index + 1 }}</td>
                <td class="py-2 px-3">
                  <span class="font-medium">{{ player.nickname }}</span>
                </td>
                <td class="py-2 px-3">{{ player.mmr }}</td>
                <td class="py-2 px-3">
                  <div class="flex items-center space-x-2">
                    <NuxtImg :src="`/images/medals/${player.idMedalla}.jpg`" :alt="player.medalla" class="w-8 h-8"/>
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
  
<script setup>
import { usePlayers } from '@/composables/usePlayers'
const { players, deletePlayer, addPlayer } = usePlayers()

// const players = ref([])
const newPlayer = ref({
  nickname: '',
  mmr: ''
})

const nick = ref('');
const mmr = ref('');
const errors = ref({ nick: false, mmr: false });

const validateForm = () => {
    // errors.value.nick = !nick.value;
    // errors.value.mmr = !Number.isInteger(mmr.value);
/*
    if (!errors.value.nick && !errors.value.mmr) {
        addPlayer({ nick: nick.value, mmr: mmr.value });

        // Limpiar campos después de agregar
        nick.value = '';
        mmr.value = '';

        // document.getElementById('closeButton').click()
        console.log('Jugador agregado');
    }
    console.log('validateForm errors', errors);

*/

    if (newPlayer.value.nickname && Number.isInteger(newPlayer.value.mmr)) {
      const mmr = parseInt(newPlayer.value.mmr)
      addPlayer({ nickname: newPlayer.value.nickname, mmr: mmr });

      // clear form
      newPlayer.value.nickname = ''
      newPlayer.value.mmr = ''
    }
};
</script>