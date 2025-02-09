<script>
import Modal from '@/components/shared/ModalMedalTable.vue';

    export default {
        components: {
            Modal
        },
        emits: ['changeCurrentComponent'],
        data() {
            return {
            }
        }
    }
</script>

<template>
    <div class="flex justify-center items-center">
        <div class="text-center p-6 bg-gray-100 rounded-lg shadow-lg max-w-md w-full">

            <h1 class="text-3xl font-semibold mb-6">Clasificación de Equipos Dota 2</h1>
            <!-- <div class="bg-gray-200 p-4 rounded-md mb-6">
                <p class="text-lg">Aquí se muestran los equipos mejor clasificados de Dota 2.</p>
            </div> -->
            <button class="w-full bg-gray-300 rounded-md text-md py-3 px-6"
                @click="$emit('changeCurrentComponent', 'Step2')">
                Iniciar
            </button>
        </div>
    </div>

    <!-- Modal toggle -->
    <button data-modal-target="myModal" data-modal-toggle="myModal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
        Config
    </button>

    <Modal @close="closeModal" />
</template>