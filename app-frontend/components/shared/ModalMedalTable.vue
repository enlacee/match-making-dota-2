<script setup>
import { ref } from 'vue'
import { useMedals } from '~/composables/useMedals'
import { onMounted, defineEmits } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite()
})

const emit = defineEmits(['close'])

// LOGICA
const { medals, resetMedals } = useMedals()
const focusedRow = ref(null)

const saveRow = () => {
  focusedRow.value = null
}
</script>

<template>
    <div id="myModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-md max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Header -->
                <div class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Medallas
                    </h3>
                    <button @click="emit('close')" data-modal-hide="myModal" type="button" class="text-gray-400 hover:bg-gray-200 rounded-lg text-sm p-1.5">
                        ✖
                    </button>
                </div>
                <!-- Body -->
                <div class="p-5">
                  <table class="w-full border border-gray-200 text-sm">
                    <thead>
                      <tr class="bg-gray-800 text-white">
                        <th class="px-2">Nombre</th>
                        <th class="px-2">Condición MMR</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(medal, index) in medals" :key="index" class="border-b text-center">
                        <td class="px-2">{{ medal.name }}</td>
                        <td class="px-2">
                          <code class="text-xs">MMR >= </code> 
                          <input 
                            type="number" 
                            v-model="medal.mmr" 
                            class="w-20 p-1 border rounded text-center"
                            @focus="focusedRow = index"
                            @blur="setTimeout(() => focusedRow = null, 200)" 
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>


              <!-- Botón Resetear Valores -->
              <div class="text-center p-4">
                <button 
                  @click="resetMedals"
                  class="px-4 py-2 bg-red-600 text-white rounded text-sm"
                >
                  Resetear Valores por Defecto
                </button>
              </div>

                <!-- Footer -->
                <!-- <div class="flex justify-end p-4 border-t dark:border-gray-600">
                    <button @click="emit('close')" data-modal-hide="myModal" type="button" class="px-4 py-2 bg-blue-600 text-white rounded-md">
                        Cerrar
                    </button>
                </div> -->
            </div>
        </div>
    </div>
</template>
