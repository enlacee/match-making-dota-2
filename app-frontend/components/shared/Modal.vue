<script setup>
import { onMounted, defineEmits } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite()
})

const emit = defineEmits(['close'])
</script>

<template>
    <div id="myModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-md max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Header -->
                <div class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Mi Modal
                    </h3>
                    <button @click="emit('close')" data-modal-hide="myModal" type="button" class="text-gray-400 hover:bg-gray-200 rounded-lg text-sm p-1.5">
                        ✖
                    </button>
                </div>
                <!-- Body -->
                <div class="p-5">
                    <p class="text-sm text-gray-500 dark:text-gray-300">
                        Este es un ejemplo de modal con Flowbite.
                    </p>
                </div>
                <!-- Footer -->
                <div class="flex justify-end p-4 border-t dark:border-gray-600">
                    <button @click="emit('close')" data-modal-hide="myModal" type="button" class="px-4 py-2 bg-blue-600 text-white rounded-md">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
