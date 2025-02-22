<script setup>

/**
 * Script for open modal
 */
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

defineEmits(['update:modelValue'])

/**
 * start fn
 */
import { ref, watch } from 'vue'
import { useMedals } from '~/composables/useMedals'

const { medals, resetMedals, loadMedals, updateMedalMMR } = useMedals()

// Observa cambios en el mmr de cada medalla y guarda solo si cambió
watch(
  () => medals.map(medal => ({ ...medal })), // 🔥 Clona para detectar cambios (BUG SINO SE HACE ESTO NO FUNCIONA DETECTAR EL CAMBIO)
  (newMedals, oldMedals) => {
    console.log("newMedals,", newMedals , "oldMedals ", oldMedals);

    newMedals.forEach((medal, index) => {
      if (!oldMedals || medal.mmr !== oldMedals[index]?.mmr) {
        console.log(`Actualizando MMR de ${medal.name}: ${oldMedals?.[index]?.mmr} → ${medal.mmr}`);
        updateMedalMMR(index, medal.mmr);
      } else {
        console.log(`No se actualiza ${medal.name}, sigue en ${medal.mmr}`);
      }
    });
  },
  { deep: true }
);

const resetValues = () => {
  if (confirm("¿Estás seguro de resetear los valores?")) {
    resetMedals(); // Llama la función que resetea en el store
    loadMedals(); // reload data from localstorage and set the (this.medals)

    // console.log('medals', medals)
    // console.log('useMedals().medals', useMedals().medals);
    Object.assign(medals, useMedals().medals); // 🔥 Forzar reactividad

    location.reload(); // 🔄 Recarga la página para reflejar los cambios
  }
};

</script>

<template>
  <div v-if="modelValue" 
       class="fixed inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50"
       @click="$emit('update:modelValue', false)">
    <div class="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full mx-4" 
         @click.stop>
      <div class="p-6 max-h-[80vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Configuración
          </h3>
          <button 
            @click="$emit('update:modelValue', false)"
            class="text-gray-400 hover:text-gray-500 focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div class="space-y-4">
          <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
            <h4 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Medallas
            </h4>
            <!-- Aquí puedes agregar más opciones de configuración -->
            <p class="text-gray-500 dark:text-gray-400 text-small">
              Configuración del sistema de matchmaking medallas por <b>MMR</b>
            </p>

            <table class="w-full border border-gray-200 text-sm">
              <thead>
                <tr class="bg-gray-800 text-white">
                  <th class="px-2">#</th>
                  <th class="px-2">Nombre</th>
                  <th class="px-2">Condición MMR</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(medal, index) in medals" :key="index" class="border-b text-center">
                  <td class="px-2">{{ medal.id }}</td>
                  <td class="px-2">{{ medal.name }}</td>
                  <td class="px-2">
                    <code class="text-xs">MMR >= </code> 
                    <input 
                      type="number" 
                      v-model="medal.mmr" 
                      class="w-20 p-1 border rounded text-center bg-white dark:bg-gray-700"
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="text-center p-4">
                <button 
                  @click="resetValues"
                  class="px-4 py-2 bg-red-600 text-white rounded text-sm"
                >
                  Resetear Valores por Defecto
                </button>
              </div>



          </div>
        </div>

        <!-- <div class="mt-6 flex justify-end">
          <button
            @click="$emit('update:modelValue', false)"
            class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Cerrar
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>