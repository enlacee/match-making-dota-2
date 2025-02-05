# Usa Node.js 18 como base
FROM node:18.16.0-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/app

# Available to mount the volumen on container
VOLUME /usr/app


# Copia solo package.json y package-lock.json para instalar dependencias
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código fuente
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Comando por defecto para desarrollo
# CMD ["npm", "run", "dev"]
