import { ref, onMounted, watch } from 'vue'
import { useMedals } from '@/composables/useMedals'

const { medals } = useMedals(); 

const players = ref([]); 

export const usePlayers = () => {
  let defaultPlayers = ref([
    { id: 1, nickname: "JuanPerez", mmr: 0 },
    { id: 3, nickname: "RiaMeda", mmr: 721 },
    { id: 3, nickname: "jojo12", mmr: 840 },
    { id: 3, nickname: "asd8", mmr: 1560 },
    { id: 3, nickname: "gg2", mmr: 1680 },
    { id: 3, nickname: "as211", mmr: 2520 },
    { id: 3, nickname: "rojos34", mmr: 3360 },
    { id: 9, nickname: "dialz", mmr: 4200 },
    { id: 10, nickname: "pepedias", mmr: 5040 },
    { id: 10, nickname: "pepedias", mmr: 5761 },
  ]);

  // const players = ref([])

  // Cargar jugadores desde LocalStorage al iniciar
  onMounted(() => {
    const storedPlayers = localStorage.getItem('players');
    players.value = storedPlayers ? JSON.parse(storedPlayers) : [...defaultPlayers.value];

    // Asignar medallas a los jugadores
    if (medals.value.length > 0) { // Verifica que las medallas estén cargadas
      players.value.forEach(player => {
        let objMedal = getMedalByMMR(parseInt(player.mmr));
        player.medalla = objMedal.name;
        player.idMedalla = objMedal.id;
      });
      console.log("== se encontraron medallas");
    } else {
      console.log("== no se encontraron medallas");
    }
  });

  // Guardar automáticamente en LocalStorage cuando cambian los jugadores
  // watch(players, () => {
  //   localStorage.setItem('players', JSON.stringify(players.value))
  //   console.log("guardo en localstorage!")
  // }, { deep: true })

  // Agregar un nuevo jugador
  const addPlayer = (player) => {
    let objMedal = getMedalByMMR(parseInt(player.mmr));

    player.id = Date.now() // Asignar un ID único
    player.medalla = objMedal.name;
    player.idMedalla = objMedal.id;
    
    players.value.push(player)
  }

  const deletePlayer = (index) => {
    players.value.splice(index, 1);
  };

  /**
   * 
   * @param {Number} mmr 
   * @returns string
   */
  const getMedalByMMR = (mmr) => {
    const medallas = medals.value;

    // Recorremos desde el último hasta el primero (más rápido)
    for (let i = medallas.length - 1; i >= 0; i--) {
      if (mmr >= medallas[i].mmr) {
        // return medallas[i].name;
        return { id: medallas[i].id, name: medallas[i].name };
      }
    }
    // return "Sin rango"; // Por si el mmr es negativo o inválido
    return { id: 99, name: "Sin rango" };
  };

  return {
    players,
    addPlayer,
    deletePlayer
  }
}
