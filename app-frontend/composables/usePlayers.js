import { ref, onMounted, watch } from 'vue'
import { useMedals } from '@/composables/useMedals'

const { medals } = useMedals(); 
const players = ref([]); 

export const usePlayers = () => {
  let defaultPlayers = ref([
    { id: 1, nick: "JuanPerez", mmr: 0, medalla: "1" },
    { id: 3, nick: "RiaMeda", mmr: 721, medalla: "3" },
    { id: 3, nick: "jojo12", mmr: 840, medalla: "3" },
    { id: 3, nick: "asd8", mmr: 1560, medalla: "3" },
    { id: 3, nick: "gg2", mmr: 1680, medalla: "3" },
    { id: 3, nick: "as211", mmr: 2520, medalla: "3" },
    { id: 3, nick: "rojos34", mmr: 3360, medalla: "3" },
    { id: 9, nick: "dialz", mmr: 4200, medalla: "9" },
    { id: 10, nick: "pepedias", mmr: 5040, medalla: "9" },
    { id: 10, nick: "pepedias", mmr: 5761, medalla: "9" },
  ]);


  // const players = ref([])

  // Cargar jugadores desde LocalStorage al iniciar
  onMounted(() => {
    const storedPlayers = localStorage.getItem('players');
    players.value = storedPlayers ? JSON.parse(storedPlayers) : [...defaultPlayers.value];

    // Asignar medallas a los jugadores
    players.value.forEach(player => {
        player.medalla = getMedalByMMR(player.mmr);
    });
    console.log("1111")
    getMedalByMMR(100)
    console.log("2222")
  })

  // Guardar automáticamente en LocalStorage cuando cambian los jugadores
  watch(players, () => {
    localStorage.setItem('players', JSON.stringify(players.value))
    console.log("guardo en localstorage!")
  }, { deep: true })

  // Agregar un nuevo jugador
  const addPlayer = (player) => {
    console.log('start: ', player);
    player.id = Date.now() // Asignar un ID único
    player.medalla = "" + getMedalByMMR(parseInt(player.mmr))
    players.value.push(player)
    console.log('end push: players', players.value);
    console.log("termino de agregar nuevo jugador a las lista")
  }

  // Editar un jugador
//   const editPlayer = (id, newPlayerData) => {
//     const index = players.value.findIndex(player => player.id === id)
//     if (index !== -1) {
//       players.value[index] = { ...players.value[index], ...newPlayerData }
//     }
//   }

    const deletePlayer = (index) => {
        players.value.splice(index, 1);
    };

  // Eliminar un jugador
//   const deletePlayer = (id) => {
//     players.value = players.value.filter(player => player.id !== id)
//   }

  // Resetear jugadores a los valores por defecto
//   const resetPlayers = () => {
//     players.value = [...defaultPlayers]
//     localStorage.setItem('players', JSON.stringify(players.value))
//   }

  /**
   * 
   * @param {Number} mmr 
   * @returns string
   */
  const getMedalByMMR = (mmr) => {
    const medallas = medals.value;
    console.log("getMedalByMMR");
    console.log("getMedalByMMR" + mmr);
    console.log(mmr);


    // Recorremos desde el último hasta el primero (más rápido)
    for (let i = medallas.length - 1; i >= 0; i--) {
      console.log("============");
      console.log(mmr,medallas[i].mmr);
      if (mmr >= medallas[i].mmr) {
        return medallas[i].name;
      }
    }
    return "Sin rango"; // Por si el mmr es negativo o inválido

    // if (mmr < 1000) return "Heraldo";
    // if (mmr < 2000) return "Guardián";
    // if (mmr < 3000) return "Cruzado";
    // if (mmr < 4000) return "Archon";
    // if (mmr < 5000) return "Leyenda";
    // if (mmr < 6000) return "Ancestro";
    // if (mmr < 7000) return "Divino";
    // return "Inmortal"; // Para 7000+
  };

  return {
    players,
    addPlayer,
    deletePlayer
  }
}
