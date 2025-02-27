<script setup>
/**
 * reactivity out this component
 */
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

defineEmits(['update:modelValue'])

/**
 * script base
 */
import { onMounted, defineEmits } from 'vue'
import { initFlowbite } from 'flowbite'
const { players, MAX_PLAYERS } = usePlayers()
const { $html2canvas } = useNuxtApp();

onMounted(() => {
    initFlowbite()

    balanceTeams(players.value);;
})

const runtimeConfig = useRuntimeConfig()
const baseURL = runtimeConfig.public.baseURL;

// Estados reactivos para los equipos
const groupA = ref([])
const groupB = ref([])
const sumA = ref(0)
const sumB = ref(0)

/**
 * fn 
 */
const balanceTeams = (players) => {
    console.log('balanceTeams players: ', players)

  // Ordenar jugadores de mayor a menor MMR
  players.sort((a, b) => b.mmr - a.mmr)

  // Reiniciar valores
  groupA.value = []
  groupB.value = []
  sumA.value = 0
  sumB.value = 0

  // Asignar jugadores a los grupos balanceando MMR
  for (const player of players) {
    if (sumA.value < sumB.value) {
      groupA.value.push(player)
      sumA.value += player.mmr
    } else {
      groupB.value.push(player)
      sumB.value += player.mmr
    }
  }

  console.log("Grupo A:", groupA.value, "Total MMR:", sumA.value)
  console.log("Grupo B:", groupB.value, "Total MMR:", sumB.value)
  console.log("Diferencia:", Math.abs(sumA.value - sumB.value))
}

/**
 * make a capture imagen from div element
 * usign HTML2CANVAS plugin
 */
const capture = async () => {
  const div = document.getElementById("capture");
  if (!div) return;

  const canvas = await $html2canvas(div);
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = "captura.png";
  link.click();
};
</script>

<template>
    <div v-if="modelValue" 
       class="fixed inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50"
        @click="$emit('update:modelValue', false)">
        <div class="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl" 
        @click.stop>


            <div class="w-[800px] p-4" >

                <!-- Contenido del Modal -->
                <div class="bg-[#0F172A] text-[#9B9FA0] dark:text-white font-bold flex justify-between text-sm p-8" id="capture">
                    <!-- Team 1: A -->
                    <div class="p-2 w-[45%]">
                        <h3 class="text-lg">Team Radiant</h3>

                        <ul class="space-y-2 border-4 border-dashed border-[#A4ADBC] rounded-lg p-2 mt-2 mb-1">
                            <li v-for="(player, index) in groupA" :key="index" class="border border-[#495164] p-1 rounded-md flex items-center justify-between">
                                <img :src="`${baseURL}/images/medals/${player.idMedalla}.webp`" class="w-8 h-8">
                                <span>{{player.nickname}} - {{player.mmr}}</span>
                            </li>
                        </ul>

                        <div class="mt-0">
                            <p class="flex items-center justify-between text-right py-1">Total <span class="bg-[#1E293B] py-1 px-2 w-32">{{ sumA }}</span></p>
                        </div>

                        <!-- Diferencia de MMR -->
                        <div v-if="sumA > sumB" class="mt-0">
                            <p class="flex items-center justify-between text-right py-1">Difference 
                                <span class="bg-[#1E293B] py-1 px-2 w-32">+{{ Math.abs(sumA - sumB) }} MMR</span>
                            </p>
                        </div>
                    </div>

                    <!-- Team 2: B-->
                    <div class="p-2 w-[45%]">
                        <h3 class="text-lg">Team Dire</h3>
                        <ul class="space-y-2 border-4 border-dashed border-[#A4ADBC] rounded-lg p-2 mt-2 mb-1">
                            <li v-for="(player, index) in groupB" :key="index" class="border border-[#495164] p-1 rounded-md flex items-center justify-between">
                                <img :src="`${baseURL}/images/medals/${player.idMedalla}.webp`" class="w-8 h-8">
                                <span>{{player.nickname}} - {{player.mmr}}</span>
                            </li>
                        </ul>
                        <div class="mt-0">
                            <p class="flex items-center justify-between text-right py-2">Total <span class="bg-[#1E293B] py-1 px-2 w-32">{{ sumB }}</span></p>
                        </div>

                        <!-- Diferencia de MMR -->
                        <div v-if="sumB > sumA" class="mt-0">
                            <p class="flex items-center justify-between text-right py-1">Difference 
                                <span class="bg-[#1E293B] py-1 px-2 w-32">+{{ Math.abs(sumB - sumA) }} MMR</span>
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Contenedor de botones centrado con espacio entre ellos -->
                <div class="mt-4 flex items-center justify-center space-x-4">
                    <button
                        @click="capture"
                        type="button" 
                        id="saveImage"
                        class="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 
                            text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-300 ">
                        📷 Guardar Imagen
                    </button>

                    <button @click="$emit('update:modelValue', false)"
                        type="button" 
                        class="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg 
                            dark:bg-gray-800 dark:text-white 
                            shadow-md transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-700">
                        ❌ Cerrar
                    </button>
                    <!-- <span class="">xxx{{ players.length }}/{{ MAX_PLAYERS }}zzz {{players}}</span> -->
                </div>

                

            </div>
        </div>
    </div>
</template>
