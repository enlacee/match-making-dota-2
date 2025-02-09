
<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import { usePlayers } from '@/composables/usePlayers'

const { players, addPlayer } = usePlayers()

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();

})

const nick = ref('');
const mmr = ref('');
const errors = ref({ nick: false, mmr: false });

const validateForm = () => {
    errors.value.nick = !nick.value;
    errors.value.mmr = !mmr.value;

    if (!errors.value.nick && !errors.value.mmr) {
        // Enviar el nuevo jugador al componente padre
        // emit('addPlayer', { nick: nick.value, mmr: mmr.value });
        // addNewPlayer({ nick: nick.value, mmr: mmr.value })
        addPlayer({ nick: nick.value, mmr: mmr.value });

        // Limpiar campos después de agregar
        nick.value = '';
        mmr.value = '';

        // document.getElementById('closeButton').click()
        console.log('Jugador agregado');
    }
};

</script>

<template>
    <div>
        <!-- Hidden the Button to open modal -->
        <div class="flex justify-center p-4 hidden">
            <button id="button" data-modal-toggle="modal" data-modal-target="modal" 
            type="button" class="bg-gray-300 transition-all rounded-lg text-md px-5 py-2.5">Open Modal</button>
        </div>

        <div id="modal"
            tabindex="-1"
            aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                            Agregar jugador
                        </h3>
                        <button id="closeButton" data-modal-hide="modal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-md p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-5 space-y-5">
                        <form class="mx-auto" @submit.prevent="validateForm">
                            <div class="relative z-0 w-full mb-5 group">
                                <input
                                    autofocus
                                    v-model="nick" :class="{'border-red-500': errors.nick}"
                                    type="nick"
                                    name="floating_nick"
                                    id="floating_nick"
                                    class="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                                <label for="floating_nick" class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nick</label>
                            </div>
                            <div class="grid md:grid-cols-2 md:gap-6">
                                <div class="relative z-0 w-full mb-5 group">
                                    <input type="number"
                                        v-model="mmr" :class="{'border-red-500': errors.mmr}"
                                        name="floating_mmr" 
                                        id="floating_mmr" 
                                        class="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                        placeholder="" />
                                    <label for="floating_mmr" class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">MMR</label>
                                </div>
                            </div>
                            <div class="flex items-center justify-center p-5 space-x-2 ">

                                <button type="submit" class="w-full bg-gray-300 rounded-md text-md py-3 px-0">Agregar</button>
                                <!-- <button type="button" class="bg-white rounded-md text-md py-3 px-6 text-gray-500 border border-gray-200 text-md  px-5 py-2.5">Cancelar</button> -->
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>