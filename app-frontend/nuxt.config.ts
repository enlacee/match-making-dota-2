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
  // devtools: { enabled: process.env.NODE_ENV !== 'production' },
  ssr: false,
  modules: [
      '@nuxtjs/tailwindcss',
      '@nuxt/image',
      "@pinia/nuxt"
  ],
  image: {
    provider: 'static', // Asegúrate de definirlo explícitamente
  },

  // NUXT_PUBLIC_BASE_URL USEFULL FOR IMAGES
  runtimeConfig: {
    public: {
      // baseURL: "http://localhost:3000/match-making-dota-2",
      baseURL: process.env.NUXT_PUBLIC_BASE_URL || "http://localhost:3000/match-making-dota-2"
    }
  },
  // css: ["@/assets/css/main.css"],
  // baseURL: 'https://subdominio.tudominio.com',
  app: {
    // baseURL: process.env.NODE_ENV === 'production' ? '/match-making-dota-2/' : '/',
    baseURL: '/match-making-dota-2/', // Important for GitHub Pages
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