import{C as n}from"./BTRKTx8I.js";const i=[{id:1,name:"Heraldo 1",mmr:0},{id:2,name:"Heraldo 2",mmr:154},{id:3,name:"Heraldo 3",mmr:308},{id:4,name:"Heraldo 4",mmr:462},{id:5,name:"Heraldo 5",mmr:616},{id:6,name:"Guardián 1",mmr:770},{id:7,name:"Guardián 2",mmr:924},{id:8,name:"Guardián 3",mmr:1078},{id:9,name:"Guardián 4",mmr:1232},{id:10,name:"Guardián 5",mmr:1386},{id:11,name:"Cruzado 1",mmr:1540},{id:12,name:"Cruzado 2",mmr:1694},{id:13,name:"Cruzado 3",mmr:1848},{id:14,name:"Cruzado 4",mmr:2002},{id:15,name:"Cruzado 5",mmr:2156},{id:16,name:"Arconte 1",mmr:2310},{id:17,name:"Arconte 2",mmr:2464},{id:18,name:"Arconte 3",mmr:2618},{id:19,name:"Arconte 4",mmr:2772},{id:20,name:"Arconte 5",mmr:2926},{id:21,name:"Leyenda 1",mmr:3080},{id:22,name:"Leyenda 2",mmr:3234},{id:23,name:"Leyenda 3",mmr:3388},{id:24,name:"Leyenda 4",mmr:3542},{id:25,name:"Leyenda 5",mmr:3696},{id:26,name:"Ancéstral 1",mmr:3850},{id:27,name:"Ancéstral 2",mmr:4004},{id:28,name:"Ancéstral 3",mmr:4158},{id:29,name:"Ancéstral 4",mmr:4312},{id:30,name:"Ancéstral 5",mmr:4466},{id:31,name:"Divino",mmr:4620},{id:32,name:"Divino",mmr:4820},{id:33,name:"Divino",mmr:5020},{id:34,name:"Divino",mmr:5220},{id:35,name:"Divino",mmr:5420},{id:36,name:"Immortal",mmr:5620}],l=n("medals",{state:()=>({medals:JSON.parse(localStorage.getItem("medals"))||i}),actions:{loadMedals(){this.medals=JSON.parse(localStorage.getItem("medals"))||[]},saveMedals(){localStorage.setItem("medals",JSON.stringify(this.medals))},resetMedals(){localStorage.removeItem("medals"),console.log("RESET se guardó en localStorage",JSON.parse(localStorage.getItem("medals")))}}}),s=()=>{const m=l(),e=(d,r)=>{m.medals[d].mmr=r,m.saveMedals()},a=[{id:37,name:"Immortal 25,000"},{id:38,name:"Immortal 5000"},{id:39,name:"Immortal 100"},{id:40,name:"Immortal 10"},{id:41,name:"Immortal 1"}];return{medals:m.medals,loadMedals:m.loadMedals,resetMedals:m.resetMedals,updateMedalMMR:e,idImageAllMedals:a}};export{s as u};
