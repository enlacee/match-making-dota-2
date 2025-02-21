import { ref, onMounted, watch } from 'vue'

// const medals = ref([]);

export const useMedals = () => {

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
    idImageAllMedals,
    resetMedals
  }
}
