/*
import { ref, onMounted, watch } from 'vue'
import { useMedalsStore } from '@/stores/medals';
import { storeToRefs } from 'pinia';

export const useMedals = () => {
  // const store = useMedalsStore();
  // const { medals } = storeToRefs(store); // Ahora medals es reactivo

  const store = useMedalsStore();
  const medals = computed(() => store.medals); // 🔥 Reactividad asegurada

  // const updateMedalMMR = (index, newMMR) => {
  //   store.medals[index].mmr = newMMR;
  //   store.saveMedals(); // Guarda los cambios en localStorage
  // };

  const idImageAllMedals = [
    { id: 37, name: "Immortal 25,000"},
    { id: 38, name: "Immortal 5000"},
    { id: 39, name: "Immortal 100"},
    { id: 40, name: "Immortal 10"},
    { id: 41, name: "Immortal 1"},
  ];

  return {
    medals, // Ahora es reactivo
    loadMedals: store.loadMedals,
    resetMedals: store.resetMedals,
    updateMedalMMR: store.updateMedalMMR, // Incluyendo la función del store
    idImageAllMedals,
  }
}
*/

import { storeToRefs } from "pinia";
import { useMedalsStore } from "@/stores/medals";

export function useMedals() {
    const store = useMedalsStore();
    const idImageAllMedals = [
      { id: 37, name: "Immortal 25,000"},
      { id: 38, name: "Immortal 5000"},
      { id: 39, name: "Immortal 100"},
      { id: 40, name: "Immortal 10"},
      { id: 41, name: "Immortal 1"},
    ];
    return {
        ...storeToRefs(store), // 🔥 Extrae `medals` de forma reactiva
        ...store, // 🔥 Mantiene acceso a funciones del store
        idImageAllMedals
    };
}