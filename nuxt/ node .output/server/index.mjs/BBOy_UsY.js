import{r as d,f as n}from"./FFJlHf5F.js";const t=()=>{const m=[{id:0,name:"?"},{id:1,name:"Heraldo"},{id:2,name:"Guardián"},{id:3,name:"Cruzado"},{id:4,name:"Arconte"},{id:5,name:"Leyenda"},{id:6,name:"Ancéstral"},{id:7,name:"Divino"},{id:8,name:"Immortal"},{id:9,name:" "},{id:10,name:" "},{id:11,name:" "},{id:12,name:" "},{id:13,name:" "}],a=[{id:1,name:"Heraldo",mmr:0},{id:2,name:"Guardián",mmr:840},{id:3,name:"Cruzado",mmr:1680},{id:4,name:"Arconte",mmr:2520},{id:5,name:"Leyenda",mmr:3360},{id:6,name:"Ancéstral",mmr:4200},{id:7,name:"Divino",mmr:5040},{id:8,name:"Immortal",mmr:5761}],e=d(a);return n(e,()=>{localStorage.setItem("medals",JSON.stringify(e.value))},{deep:!0}),{medals:e,idImageAllMedals:m,resetMedals:()=>{e.value=[...a],localStorage.setItem("medals",JSON.stringify(e.value))}}};export{t as u};
