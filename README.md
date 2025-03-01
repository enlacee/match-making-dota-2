# Match making dota 2

Tool usefulll for create 2 groups `Radiance`, `Dire` from
10 gamers and, below is the final result of the system:

![Resultado armado de equipos dota 2 con diferencia de MMR](./README/resultado-armado-de-equipos-dota-2-con-diferencia-de-MMR.jpg)


Reference of the MMR Level

![Medallas MMR dota 2](./README/medallas-MMR-dota-2.jpg)


Medallas de rango de temporada Febrero 2025

![medallas de rango](./README/medallas-de-rango-de-temporada-febrero-2025.jpg)

## start project

```bash
cd app-frontend
docker-compose up --build
docker-compose build --no-cache
docker exec  -it app-frontend-nuxt-1 sh
```

**for production**

on `.env` file (if dont have you need to create the file)

```
NUXT_APP_BUILD_ASSETS_DIR=/nuxt/ node .output/server/index.mjs
NUXT_PUBLIC_BASE_URL=https://anibalcopitan.com/match-making-dota-2
```

```bash
docker exec  -it <ID-CONTAINER> sh
npm run generate
# /  (raiz of the project)
# descomentamentar .env
cp -r ./app-frontend/.output/public/* ./docs/.
```
## Technical Docs

### techs

- NuxtJS
- Dockeritation (docker, docker-compose)
- Git
- Node 18.x

**project components**

- VueJS
- tailwindcss


### Make project nuxt v3

    npx nuxi@latest init match-making-dota-2
    npm install tailwindcss @tailwindcss/vite
    npm install flowbite

**fuentes:**

- https://nuxt.com/docs/guide/directory-structure/app
- https://nuxt.com/docs/getting-started/views

**Tailwind CSS Nuxt - Flowbite**
- https://flowbite.com/docs/getting-started/nuxt-js/

