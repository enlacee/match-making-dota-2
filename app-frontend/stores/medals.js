import { defineStore } from 'pinia';

// Object.freeze(INITIAL_MEDALS) => Hace que INITIAL_MEDALS sea inmutable (no se puede modificar en tiempo de ejecución).
const INITIAL_MEDALS = Object.freeze([
    { id: 1, name: 'Heraldo 1', mmr: 0 },     // Ejemplo1: Heraldo1 es si MMR es mayor a Zero
    { id: 2, name: 'Heraldo 2', mmr: 154 },   // Ejemplo2: Heraldo2 es si MMR es mayor a 154
    { id: 3, name: 'Heraldo 3', mmr: 308 },
    { id: 4, name: 'Heraldo 4', mmr: 462 },
    { id: 5, name: 'Heraldo 5', mmr: 616 },

    { id: 6, name: 'Guardián 1', mmr: 770 },
    { id: 7, name: 'Guardián 2', mmr: 924 },
    { id: 8, name: 'Guardián 3', mmr: 1078 },
    { id: 9, name: 'Guardián 4', mmr: 1232 },
    { id: 10, name: 'Guardián 5', mmr: 1386 },

    { id: 11, name: 'Cruzado 1', mmr: 1540 },
    { id: 12, name: 'Cruzado 2', mmr: 1694 },
    { id: 13, name: 'Cruzado 3', mmr: 1848 },
    { id: 14, name: 'Cruzado 4', mmr: 2002 },
    { id: 15, name: 'Cruzado 5', mmr: 2156 },

    { id: 16, name: 'Arconte 1', mmr: 2310 },
    { id: 17, name: 'Arconte 2', mmr: 2464 },
    { id: 18, name: 'Arconte 3', mmr: 2618 },
    { id: 19, name: 'Arconte 4', mmr: 2772 },
    { id: 20, name: 'Arconte 5', mmr: 2926 },

    { id: 21, name: 'Leyenda 1', mmr: 3080 },
    { id: 22, name: 'Leyenda 2', mmr: 3234 },
    { id: 23, name: 'Leyenda 3', mmr: 3388 },
    { id: 24, name: 'Leyenda 4', mmr: 3542 },
    { id: 25, name: 'Leyenda 5', mmr: 3696 },

    { id: 26, name: 'Ancéstral 1', mmr: 3850 },
    { id: 27, name: 'Ancéstral 2', mmr: 4004 },
    { id: 28, name: 'Ancéstral 3', mmr: 4158 },
    { id: 29, name: 'Ancéstral 4', mmr: 4312 },
    { id: 30, name: 'Ancéstral 5', mmr: 4466 },

    { id: 31, name: 'Divino', mmr: 4620 },
    { id: 32, name: 'Divino', mmr: 4820 },
    { id: 33, name: 'Divino', mmr: 5020 },
    { id: 34, name: 'Divino', mmr: 5220 },
    { id: 35, name: 'Divino', mmr: 5420 },
    { id: 36, name: 'Immortal', mmr: 5620 }
]);

export const useMedalsStore = defineStore("medals", {
    state: ()=> ({
        // medals: JSON.parse(localStorage.getItem("medals")) || [],
        medals: JSON.parse(localStorage.getItem("medals")) || JSON.parse(JSON.stringify(INITIAL_MEDALS)),
    }),

    actions: {
        loadMedals() {
            this.medals = JSON.parse(localStorage.getItem("medals")) || JSON.parse(JSON.stringify(INITIAL_MEDALS));
        },
        saveMedals() {
            localStorage.setItem("medals", JSON.stringify(this.medals));
        },
        resetMedals() {
            localStorage.removeItem('medals');
            this.medals = [];

            this.medals = JSON.parse(JSON.stringify(INITIAL_MEDALS));
            // this.saveMedals(); // Guardar en localStorage
        },
        updateMedalMMR(index, newMMR) {
            // this.medals[index].mmr = parseInt(newMMR);
            // this.medals = [...this.medals]; // Forzar la reactividad
            // this.saveMedals();
            this.$patch(state => {
                state.medals[index].mmr = parseInt(newMMR);
            });
            this.saveMedals();
        }
    },
});