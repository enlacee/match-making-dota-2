
<script setup>
import { usePlayers } from '@/composables/usePlayers'

const { addPlayer } = usePlayers()
const nick = ref('');
const mmr = ref('');
const errors = ref({ nick: false, mmr: false });

const validateForm = () => {
    errors.value.nick = !nick.value;
    errors.value.mmr = !Number.isInteger(mmr.value) //!mmr.value;
// console.log('errors.value.nick', errors.value.nick)
// console.log('errors.value.mmr', errors.value.mmr)
    // if (!errors.value.nick && errors.value.mmr !== undefined && errors.value.mmr !== null) {
        if (!errors.value.nick && !errors.value.mmr) {
        // if (!errors.value.nick && Number.isInteger(errors.value.mmr)) {


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
    <div class="">
        <form class="bg-white p-3 rounded-lg shadow-md w-full flex flex-col md:flex-row gap-1" @submit.prevent="validateForm">
            <input type="text"
                autofocus
                v-model="nick" :class="{'border-red-500': errors.nick}"
                placeholder="Nick" class="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <input type="number"
                min="0"
                v-model="mmr" :class="{'border-red-500': errors.mmr}"
                placeholder="MMR" class="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <button type="submit" class="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Agregar Jugador</button>
        </form>
    </div>
</template>