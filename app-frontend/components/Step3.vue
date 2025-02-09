<template>

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
                    <!-- <button class="text-red-500 hover:underline" @click="deleteUser(user)">🗑️</button> -->
                    <button @click="deleteUser(user)">
                      <svg class="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                    </button>
                    <!-- <button class="text-blue-500 hover:underline mr-2" @click="editUser(user)">✏️</button> -->
                  </td>
            </tr>
          </tbody>
      </table>
  </div>

</template>

<script setup>
import { ref } from "vue";

const users = ref([
  { id: 1, nick: "JuanPerez", mmr: "1000", medalla: "1" },
  { id: 2, nick: "MariaLopez", mmr: "1010", medalla: "2" },
  { id: 3, nick: "RiaMeda", mmr: "3020", medalla: "3" },
]);

const editUser = (user) => {
  console.log("Editar usuario:", user);
};

const deleteUser = (user) => {
  users.value = users.value.filter((u) => u.id !== user.id);
};
</script>
