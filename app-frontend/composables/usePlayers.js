import { ref, onMounted, watch } from 'vue'
import { useMedalsStore } from '@/stores/medals';
import { storeToRefs } from 'pinia';

const runtimeConfig = useRuntimeConfig()
const baseURL = runtimeConfig.public.baseURL;
const players = ref([]); 

/**
 * start
 * @returns 
 */
export const usePlayers = () => {
  const store = useMedalsStore();
  const { medals } = storeToRefs(store); // Ahora medals es reactivo

  const CUSTOM_MODE = {
    AUTO: 0,
    MANUAL: 1
  };
  const MAX_PLAYERS = 10;
  const isMaxPlayersReached = computed(() => players.value.length >= MAX_PLAYERS);
  // const isMaxPlayersReached = computed(() => players.value.length >= MAX_PLAYERS);

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
    
    if (process.client) {
      const storedPlayers = localStorage.getItem('players');
      players.value = storedPlayers ? JSON.parse(storedPlayers) : [...defaultPlayers.value];
    }
    console.log('onMounted: medals in usePLAYER  medals.value', medals.value, medals.length)
    console.log('onMounted: medals.length: ', medals.value.length)
  
    if (medals.value.length > 0) {
      assignMedalsToPlayers();
      console.log("paso assignMedalsToPlayers() ")
    } else {
      console.log("no paso assignMedalsToPlayers() ")
      
    }
  });

  // Guardar automáticamente en LocalStorage cuando cambian los jugadores
  let saveTimeout;
  watch(players, () => {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
      localStorage.setItem('players', JSON.stringify(players.value));
      console.log("Datos guardados en localStorage.");
    }, 500); // Espera 500ms antes de guardar
  }, { deep: true });

  const assignMedalsToPlayers = () => {
    players.value.forEach(player => {
      if (player.custom === CUSTOM_MODE.AUTO) {
        let objMedal = getMedalByMMR(parseInt(player.mmr));
        player.idMedalla = objMedal.id;
        player.medalla = objMedal.name;
      }
    });
    console.log("== Medallas asignadas correctamente.");
  };

  /**
   * Add Player
   * 
   * @param {*} player 
   */
  const addPlayer = async (player) => {
    player.id = Date.now();
  
    /**
     * Clasificar si es medalla automatica o personalizada
     */
    if (player.custom === CUSTOM_MODE.AUTO) {
      let objMedal = getMedalByMMR(parseInt(player.mmr));
      player.medalla = objMedal.name;
      player.idMedalla = objMedal.id;
    } else if (player.custom === CUSTOM_MODE.MANUAL) {
      player.medalla = ''; // 'Medalla name';
      // player.medallaImg = generarMedallaConTexto(player); // img hexadecimal
      player.medallaImg = await generarMedallaConTexto(player); // Genera imagen Base64
    }
  
    players.value = [...players.value, player]; // Crear una nueva referencia
  };

  /**
   * Delete player
   * 
   * @param {*} index 
   */
  const deletePlayer = (index) => {
    if (confirm("¿Estás seguro de eliminar este jugador?")) {
      players.value.splice(index, 1);
    }
  };

  /**
   * 
   * @param {Number} mmr 
   * @returns string
   */
  const getMedalByMMR = (mmr) => {
    const medallas = medals.value; // ref PINIA DATA

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

  /**
   * 
   * @param {*} player 
   * @returns String img
   */
  const generarMedallaConTexto = async (player) => {
    return new Promise((resolve) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
  
      img.crossOrigin = "anonymous"; // Para evitar problemas de CORS
      img.src = `${baseURL}/images/medals/${player.idMedalla}.webp`;
  
      img.onload = () => {
        // Ajustar tamaño del canvas según la imagen
        canvas.width = img.width;
        canvas.height = img.height;
  
        // Dibujar la imagen de la medalla
        ctx.drawImage(img, 0, 0);
  
        // Configurar el texto
        // Configurar la fuente y posición del texto
        const fontSize = 24;
        ctx.font = `bold ${fontSize}px sans-serif`;
        // ctx.font = "bold 24px sans-serif";
        // ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
  
        // Posicionar el texto en el centro
        const x = canvas.width / 2;
        // const y = canvas.height - 10; // Un poco arriba del borde inferior
        // const y = canvas.height - 40; // Un poco arriba del borde inferior
        const y = canvas.height - fontSize - 20; // Un poco arriba del borde inferior

  

        // ⚡ Sombra suave alrededor del número
        ctx.shadowColor = "rgba(0, 0, 0, 0.8)"; // Negro con opacidad
        ctx.shadowBlur = 6;  // Difuminado de la sombra
        ctx.shadowOffsetX = 2; // Desplazamiento horizontal
        ctx.shadowOffsetY = 2; // Desplazamiento vertical

        // Relleno del texto (color crema)
        ctx.fillStyle = "#e8dac0";
        ctx.fillText(player.medallaTxt, x, y);
  
        // Convertir a base64 y resolver la promesa
        console.log('canvas.toDataURL("image/png")', canvas.toDataURL("image/png"));
        resolve(canvas.toDataURL("image/png"));
      };
    });
  };
  

  return {
    players,
    CUSTOM_MODE,
    isMaxPlayersReached,
    MAX_PLAYERS,
    addPlayer,
    deletePlayer
  }
}
