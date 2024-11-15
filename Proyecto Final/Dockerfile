# Definino imagen base
FROM node:20

WORKDIR /app

#COPY package.json .
COPY package.json package-lock.json ./

# Instala dependencias y evita instalar devDependencies en producción
RUN npm ci --omit=dev
# RUN npm install
# RUN npm install bcryptjs

COPY . .

EXPOSE 8080

CMD ["npm", "start"]

# luego de varios intentos con error y quedando tildado
# forzar a una reconstrucción sin cache para ver la mejora de rendimiento:
# docker build --no-cache -t app-adoption-lemos .

# Loguearse con la cuenta de docker desde la consola
# docker login

# Crear el tag de la imagen
# docker tag app-adoption-lemos richard22/adoption-be3:1.0.0

# Subir la imagen a dockerhub
# docker push <nombre_usuario_dockerhub>/<nombre_repositorio>:<tag>

# Descargar la imagen
# docker pull <nombre_usuario_dockerhub>/<nombre_repositorio>:<tag>

# Descargar de manera publica la imagen
# docker pull <nombre_repositorio>:<tag>

# Ejemplo 
# docker pull adoption:1.0.0