import { ref, onMounted, watch } from 'vue'
import { useMedalsStore } from '@/stores/medals';

export const useMedals = () => {
  const store = useMedalsStore();
  const updateMedalMMR = (index, newMMR) => {
    store.medals[index].mmr = newMMR;
    store.saveMedals(); // Guarda los cambios en localStorage
  };
  const idImageAllMedals = [
    { id: 37, name: "Immortal 25,000"},
    { id: 38, name: "Immortal 5000"},
    { id: 39, name: "Immortal 100"},
    { id: 40, name: "Immortal 10"},
    { id: 41, name: "Immortal 1"},
  ];

  return {
    medals: store.medals,
    loadMedals: store.loadMedals,
    resetMedals: store.resetMedals,
    updateMedalMMR,
    idImageAllMedals,
  }
}
