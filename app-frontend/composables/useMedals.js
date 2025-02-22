import { ref, onMounted, watch } from 'vue'
import { useMedalsStore } from '@/stores/medals';

export const useMedals = () => {
  const store = useMedalsStore();
  const updateMedalMMR = (index, newMMR) => {
    store.medals[index].mmr = newMMR;
    store.saveMedals(); // Guarda los cambios en localStorage
  };
  const idImageAllMedals = [
    { id: 1, name: "Heraldo"},
    { id: 2, name: "Guardián"},
    { id: 3, name: "Cruzado"},
    { id: 4, name: "Arconte"},
    { id: 5, name: "Leyenda"},
    { id: 6, name: "Ancéstral"},
    { id: 7, name: "Divino"},
    { id: 8, name: "Immortal"},
    { id: 9, name: "Immortal"},
    { id: 10, name: "Immortal"},
    { id: 11, name: "Immortal"},
    { id: 12, name: "Immortal"},
    { id: 13, name: "Immortal"}
  ];

  return {
    medals: store.medals,
    loadMedals: store.loadMedals,
    resetMedals: store.resetMedals,
    updateMedalMMR,
    idImageAllMedals,
  }
}
