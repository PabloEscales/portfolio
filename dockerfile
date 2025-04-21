# Etapa 1: build
FROM node:18-alpine AS builder

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos y dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Build de la app
RUN npm run build

# Etapa 2: producción
FROM node:18-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Instalar dependencias solo de producción
COPY package*.json ./
RUN npm install --only=production

# Copiar los archivos build desde el builder
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package.json package.json

# Exponer el puerto (por defecto Next.js usa 3000)
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]
