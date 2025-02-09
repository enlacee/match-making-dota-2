<script setup>
import { ref, computed, onMounted } from 'vue';
import ModalAddPlayer from '@/components/shared/ModalAddPlayer.vue';
import InputAddPlayer from '@/components/shared/InputAddPlayer.vue';
import { usePlayers } from '@/composables/usePlayers'

const { players, deletePlayer } = usePlayers()
const btnGenerateDisabled = computed(() => players.value.length < 10);
const openModalPlayer = () => {
    document.querySelector('#button').click();
};
</script>

<template>
    <div class="">
<!-- 
        <div class="my-2">
            <h2 class="text-lg font-semibold mb-2">Lista de Jugadores</h2>
            <button
                @click="openModalPlayer()"
                class="w-full bg-gray-300 rounded-md text-md py-3 px-6">
                Agregar jugador
            </button>
            <ModalAddPlayer/>
        </div>
         -->

        <!-- input add player -->
         <InputAddPlayer></InputAddPlayer>

        <table class="w-full border text-sm">
        <thead class="bg-gray-200">
            <tr>
            <th class="p-2 border">#</th>
            <th class="p-2 border">Nick</th>
            <th class="p-2 border">MMR</th>
            <th class="p-2 border">Medalla</th>
            <th class="p-2 border">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(user, index) in players" :key="index" class="text-center">
            <td class="p-1 border">{{ index + 1 }}</td>
            <td class="p-1 border">{{ user.nick }}</td>
            <td class="p-1 border">{{ user.mmr }}</td>
            <td class="p-1 border">{{ user.medalla }}</td>
            <td class="p-1 border">
                <button @click="deletePlayer(index)" class="bg-red-500 text-white px-2 py-1 rounded">X</button>
            </td>
            </tr>
        </tbody>
        </table>
    
        <br/>
        <button id="myButton"
            :disabled="btnGenerateDisabled" 
            :class="{'cursor-not-allowed opacity-50': btnGenerateDisabled}"
            class="bg-gray-300 transition-all rounded-lg text-md px-5 py-2.5" 
            onclick="" 
            >
            Generar Equipos
        </button>

    <!--
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                        Nick
                        </th>
                        <th scope="col" class="px-6 py-3">
                        MMR
                        </th>
                        <th scope="col" class="px-6 py-3">
                        Medalla
                        </th>
                        <th scope="col" class="px-6 py-3">
                        Eliminar
                        </th>
                    </tr>
                </thead>
                <tbody>
                <tr v-for="user in users" :key="user.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ user.nick }}
                        </th>
                        <td class="px-6 py-4">
                        {{ user.mmr }}
                        </td>
                        <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ user.medalla }}
                            <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Jese image">
                        </th>
                        <td class="px-6 py-4">
                         <button class="text-red-500 hover:underline" @click="deleteUser(user)">🗑️</button>
                        <button @click="deleteUser(user)">
                            <svg class="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                        </button>
                         <button class="text-blue-500 hover:underline mr-2" @click="editUser(user)">✏️</button>
                        </td>
                </tr>
                </tbody>
            </table>
        </div>
    -->
    </div>
</template>