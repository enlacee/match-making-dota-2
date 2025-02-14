import { ref, onMounted, watch } from 'vue'

// const medals = ref([]);

export const useMedals = () => {

  const imageJpgMedals = [
    { id: 0},
    { id: 1},
    { id: 2},
    { id: 3},
    { id: 4},
    { id: 5},
    { id: 6},
    { id: 7},
    { id: 8},
    { id: 9},
    { id: 10},
    { id: 11},
    { id: 12},
    { id: 13}
  ];

  // Lista de medallas por defecto
  const defaultMedals = [
    { id: 1, name: 'Heraldo', mmr: 0 },
    { id: 2, name: 'Guardián', mmr: 840 },
    { id: 3, name: 'Cruzado', mmr: 1680 },
    { id: 4, name: 'Arconte', mmr: 2520 },
    { id: 5, name: 'Leyenda', mmr: 3360 },
    { id: 6, name: 'Ancéstral', mmr: 4200 },
    { id: 7, name: 'Divino', mmr: 5040 },
    { id: 8, name: 'Immortal', mmr: 5761 }
  ]

  // Estado reactivo para las medallas
  // const medals = ref([])

  // Cargar desde localStorage al iniciar
  // onMounted(() => {
  //   const storedMedals = localStorage.getItem('medals')
  //   medals.value = storedMedals ? JSON.parse(storedMedals) : defaultMedals
  // })

  // Estado reactivo para las medallas
  // const medals = ref(defaultMedals);
  const medals = ref(defaultMedals);

  // Guardar automáticamente cuando cambia
  watch(medals, () => {
    localStorage.setItem('medals', JSON.stringify(medals.value))
  }, { deep: true })

  // Función para resetear las medallas a los valores por defecto
  const resetMedals = () => {
    // if (confirm("¿Estás seguro de proceder?")) {
        // Acción después de la confirmación
        medals.value = [...defaultMedals] // Restaurar datos por defecto
        localStorage.setItem('medals', JSON.stringify(medals.value)) // Guardar en localStorage
    // }
  }

  return {
    medals,
    resetMedals
  }
}
