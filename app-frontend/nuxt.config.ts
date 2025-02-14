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
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  // ssr: false,
  modules: [
      '@nuxtjs/tailwindcss',
      '@nuxt/image',
  ],
  image: {
    // Options
    inject: true
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "http://localhost:3000"
    }
  },
  // css: ["@/assets/css/main.css"],
  app: {
    // baseURL: '/match-making-dota-2/', // Important for GitHub Pages
    head: {
      title: 'Dota 2 Matchmaking Tool',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        // { src: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js', defer: true }
      ]
    }
  }
})