# ---- Base Stage ----
# Usar una imagen base de Node.js. Alpine es ligera.
# Especificar la versión de Node que coincida con la de desarrollo (ej. LTS)
FROM node:18-alpine AS base
WORKDIR /usr/src/app
# Instalar dependencias de sistema si Prisma las necesitara en Alpine (ej. openssl)
# RUN apk add --no-cache openssl

# ---- Builder Stage ----
# Esta etapa instala todas las dependencias (dev y prod), copia el código fuente,
# genera Prisma Client y compila TypeScript.
FROM base AS builder
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate
RUN npm run build
# Opcional: Limpiar devDependencies si se quiere optimizar un poco más antes de la siguiente etapa,
# aunque la etapa 'production' reinstalará solo las de producción.
# RUN npm prune --production (si se quiere copiar node_modules desde aquí a producción)

# ---- Production Stage ----
# Usar una imagen más pequeña para producción final.
FROM node:18-alpine AS production
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json para instalar solo dependencias de producción.
COPY package*.json ./
RUN npm install --omit=dev --no-optional
# Si npm prune --production se usó en la etapa 'builder', se podrían copiar los node_modules desde allí:
# COPY --from=builder /usr/src/app/node_modules ./node_modules

# Copiar los artefactos de build (código Javascript compilado) desde la etapa 'builder'.
COPY --from=builder /usr/src/app/dist ./dist

# Copiar el schema de Prisma (necesario para que Prisma Client funcione en runtime).
COPY --from=builder /usr/src/app/prisma ./prisma

# Copiar la carpeta 'public' que contiene los archivos estáticos del frontend.
COPY --from=builder /usr/src/app/public ./public

# Exponer el puerto en el que corre la aplicación (según src/config.ts o .env).
# El valor por defecto es 3000.
EXPOSE 3000 

# Comando para ejecutar la aplicación.
# NODE_ENV=production es importante para optimizaciones.
# El .env en el host debe definir NODE_ENV=production para docker-compose.
CMD ["node", "dist/server.js"]

# Consideraciones para migraciones en producción:
# Un script entrypoint podría ejecutar 'npx prisma migrate deploy' antes del CMD.
# Ejemplo:
# COPY entrypoint.sh .
# RUN chmod +x entrypoint.sh
# ENTRYPOINT ["./entrypoint.sh"]
# (entrypoint.sh contendría: npx prisma migrate deploy && exec node dist/server.js)
# Por ahora, las migraciones se asumen manejadas externamente o como un comando exec.
