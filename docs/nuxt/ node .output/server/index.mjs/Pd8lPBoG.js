import{_ as b}from"./iqJWAKoK.js";import{s as y,c as l,m as v,o as n,a as t,d as x,F as w,n as k,t as g,u as f,p as h,r as M,b as p,w as _,q as C}from"./egLkYbDa.js";import{u as V}from"./BJLwNibc.js";const $=""+new URL("dota2_logo_horiz.pzhMq2dG.png",import.meta.url).href,R={class:"p-6 max-h-[80vh] overflow-y-auto"},N={class:"flex justify-between items-center mb-4"},B={class:"space-y-4"},L={class:"border-t border-gray-200 dark:border-gray-700 pt-4"},j={class:"w-full border border-gray-200 text-sm"},q={class:"px-2"},z={class:"px-2"},D={class:"px-2"},T=["value","onInput"],E={__name:"ConfigModal",props:{modelValue:{type:Boolean,required:!0}},emits:["update:modelValue"],setup(u){const o=V(),{medals:d}=y(o),s=()=>{confirm("¿Estás seguro de resetear los valores?")&&o.resetMedals()},i=(r,e)=>o.updateMedalMMR(r,e);return console.log("reactivoooooo....",d.value),(r,e)=>u.modelValue?(n(),l("div",{key:0,class:"fixed inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50",onClick:e[2]||(e[2]=a=>r.$emit("update:modelValue",!1))},[t("div",{class:"relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full mx-4",onClick:e[1]||(e[1]=h(()=>{},["stop"]))},[t("div",R,[t("div",N,[e[4]||(e[4]=t("h3",{class:"text-xl font-semibold text-gray-900 dark:text-white"}," Configuración ",-1)),t("button",{onClick:e[0]||(e[0]=a=>r.$emit("update:modelValue",!1)),class:"text-gray-400 hover:text-gray-500 focus:outline-none"},e[3]||(e[3]=[t("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]))]),t("div",B,[t("div",L,[e[7]||(e[7]=t("h4",{class:"text-lg font-medium text-gray-900 dark:text-white mb-2"}," Medallas ",-1)),e[8]||(e[8]=t("p",{class:"text-gray-500 dark:text-gray-400 text-small"},[x(" Configuración del sistema de matchmaking medallas por "),t("b",null,"MMR")],-1)),t("table",j,[e[6]||(e[6]=t("thead",null,[t("tr",{class:"bg-gray-800 dark:bg-gray-500 text-white"},[t("th",{class:"px-2"},"#"),t("th",{class:"px-2"},"Nombre"),t("th",{class:"px-2"},"Condición MMR")])],-1)),t("tbody",null,[(n(!0),l(w,null,k(f(d),(a,m)=>(n(),l("tr",{key:m,class:"border-b text-center"},[t("td",q,g(a.id),1),t("td",z,g(a.name),1),t("td",D,[e[5]||(e[5]=t("code",{class:"text-xs"},"MMR >= ",-1)),t("input",{type:"number",value:a.mmr,onInput:c=>i(m,c.target.value),class:"w-20 p-1 border rounded text-center bg-white dark:bg-gray-700"},null,40,T)])]))),128))])]),t("div",{class:"text-center p-4"},[t("button",{onClick:s,class:"px-4 py-2 bg-red-600 text-white rounded text-sm"}," Resetear Valores por Defecto ")])])])])])])):v("",!0)}},F={class:"min-h-screen flex items-center justify-center"},G={class:"bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full"},I={class:"text-center"},S={class:"space-y-4"},H={__name:"index",setup(u){const o=M(!1);return(d,s)=>{const i=b;return n(),l("div",F,[t("div",G,[t("div",I,[s[3]||(s[3]=t("img",{src:$,alt:"Logo de Dota 2",class:"mx-auto h-16 mb-6"},null,-1)),s[4]||(s[4]=t("h1",{class:"text-3xl font-bold text-red-500 mb-8"},"Matchmaking Tool",-1)),t("div",S,[p(i,{to:"/players",class:"block w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-200 ease-in-out transform hover:scale-105"},{default:_(()=>s[2]||(s[2]=[x(" Gestionar Jugadores ")])),_:1}),t("button",{onClick:s[0]||(s[0]=r=>o.value=!0),class:"w-full py-3 px-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg transition duration-200 ease-in-out transform hover:scale-105"}," Configuración ")]),s[5]||(s[5]=t("p",{class:"mt-8 text-sm text-gray-500 dark:text-gray-400"}," Versión 1.0.1 ",-1))])]),p(E,{modelValue:f(o),"onUpdate:modelValue":s[1]||(s[1]=r=>C(o)?o.value=r:null)},null,8,["modelValue"])])}}};export{H as default};
