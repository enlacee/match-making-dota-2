// https://nuxt.com/docs/api/configuration/nuxt-config


// import tailwindcss from "@nuxtjs/tailwindcss";  // https://tailwindcss.com/docs/installation/framework-guides/nuxt

// export default defineNuxtConfig({
//   compatibilityDate: '2024-11-01',
//   devtools: { enabled: true },
//   css: ['~/assets/css/main.css'],
//   modules: [
//     '@nuxtjs/tailwindcss'
//   ]
// })

export default defineNuxtConfig({
  modules: [
      '@nuxtjs/tailwindcss'
  ],
  // css: ["@/assets/css/main.css"],
})