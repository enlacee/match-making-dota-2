import { ref, onMounted, watch } from 'vue'
import { useMedals } from '@/composables/useMedals'

const { medals } = useMedals(); 

const players = ref([]); 

export const usePlayers = () => {
  const CUSTOM_MODE = {
    AUTO: 0,
    MANUAL: 1
  };
  let defaultPlayers = ref([
    { id: 1, custom: CUSTOM_MODE.AUTO, nickname: "JuanPerez", mmr: 0 },
    { id: 2, custom: CUSTOM_MODE.AUTO, nickname: "RiaMeda", mmr: 721 },
    { id: 3, custom: CUSTOM_MODE.AUTO, nickname: "jojo12", mmr: 840 },
    { id: 4, custom: CUSTOM_MODE.AUTO, nickname: "asd8", mmr: 1560 },
    { id: 5, custom: CUSTOM_MODE.AUTO, nickname: "gg2", mmr: 1680 },
    { id: 6, custom: CUSTOM_MODE.AUTO, nickname: "as211", mmr: 2520 },
    { id: 7, custom: CUSTOM_MODE.AUTO, nickname: "rojos34", mmr: 3360 },
    { id: 8, custom: CUSTOM_MODE.AUTO, nickname: "dialz", mmr: 4200 },
    { id: 9, custom: CUSTOM_MODE.AUTO, nickname: "pepedias", mmr: 5040 },
    { id: 10, custom: CUSTOM_MODE.AUTO, nickname: "pepedias", mmr: 5761 },
  ]);

  // const players = ref([])

  // Cargar jugadores desde LocalStorage al iniciar
  onMounted(() => {
    
    const storedPlayers = localStorage.getItem('players');
    players.value = storedPlayers ? JSON.parse(storedPlayers) : [...defaultPlayers.value];

    // Asignar medallas a los jugadores
    if (medals.value.length > 0) { // Verifica que las medallas estén cargadas
      players.value.forEach(player => {

        if (player.custom === CUSTOM_MODE.AUTO) {
          let objMedal = getMedalByMMR(parseInt(player.mmr));
          player.idMedalla = objMedal.id;
          player.medalla = objMedal.name;
        }


      });
      console.log("== se encontraron medallas");
    } else {
      console.log("== no se encontraron medallas");
    }
    
  });

  // Guardar automáticamente en LocalStorage cuando cambian los jugadores
  watch(players, () => {
    localStorage.setItem('players', JSON.stringify(players.value))
    console.log("guardo en localstorage!")
  }, { deep: true })

  // Agregar un nuevo jugador
  const addPlayer = (player) => {

    player.id = Date.now() // Asignar un ID único

    if (player.custom === CUSTOM_MODE.AUTO) {
      let objMedal = getMedalByMMR(parseInt(player.mmr));
      player.medalla = objMedal.name;
      player.idMedalla = objMedal.id;
    } else if (player.custom === CUSTOM_MODE.MANUAL) {

    }
    
    console.log('player to add to players', player);
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
    CUSTOM_MODE,
    addPlayer,
    deletePlayer
  }
}
