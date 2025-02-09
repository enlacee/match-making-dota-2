import { ref, onMounted, watch } from 'vue'

const medals = ref([]);

export const useMedals = () => {
  // Lista de medallas por defecto
  const defaultMedals = [
    { name: 'Heraldo', mmr: 0 },
    { name: 'Guardián', mmr: 840 },
    { name: 'Cruzado', mmr: 1680 },
    { name: 'Arconte', mmr: 2520 },
    { name: 'Leyenda', mmr: 3360 },
    { name: 'Ancéstral', mmr: 4200 },
    { name: 'Divino', mmr: 5040 },
    { name: 'Immortal', mmr: 5761 }
  ]

  // Estado reactivo para las medallas
  // const medals = ref([])

  // Cargar desde localStorage al iniciar
  onMounted(() => {
    const storedMedals = localStorage.getItem('medals')
    medals.value = storedMedals ? JSON.parse(storedMedals) : defaultMedals
  })

  // Guardar automáticamente cuando cambia
  watch(medals, () => {
    localStorage.setItem('medals', JSON.stringify(medals.value))
  }, { deep: true })

  // Función para resetear las medallas a los valores por defecto
  const resetMedals = () => {
    medals.value = [...defaultMedals] // Restaurar datos por defecto
    localStorage.setItem('medals', JSON.stringify(medals.value)) // Guardar en localStorage
  }

  return {
    medals,
    resetMedals
  }
}
