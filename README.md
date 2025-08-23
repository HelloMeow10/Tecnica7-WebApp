# E.E.S.T N°7 "Técnica 7" Web App

![CI/CD](https://img.shields.io/badge/CI%2FCD-WIP-orange?style=for-the-badge)

Repositorio de la aplicación web para la **Escuela de Educación Secundaria Técnica N°7 de Lomas de Zamora**. Este proyecto es una migración y modernización de la plataforma existente, construida con un stack de tecnologías actual.

---

## ✨ Features

- **Backend Robusto:** Construido con Node.js y Express, utilizando TypeScript para un código más seguro y mantenible.
- **Frontend Moderno:** Interfaz de usuario reactiva y performante creada con React, Vite y TypeScript.
- **Estilos con Tailwind CSS:** UI diseñada con un enfoque utility-first para un desarrollo rápido y consistente.
- **Componentes con Shadcn/UI:** Utilización de una librería de componentes reusables, accesibles y estéticamente agradables.
- **Base de Datos PostgreSQL:** Gestión de datos relacional y robusta con el ORM de Prisma.
- **Contenerización con Docker:** Entornos de desarrollo y producción consistentes y aislados gracias a Docker y Docker Compose.
- **Autenticación y Seguridad:** Sistema de autenticación de usuarios mediante JWT (JSON Web Tokens).
- **Notificaciones por Email:** Integración con Nodemailer para el envío de correos electrónicos.
- **Integración con IA:** Uso de la API de Google Gemini para funcionalidades inteligentes.

---

## 🛠️ Tech Stack

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Shadcn/UI](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

### DevOps
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

---

## 🚀 Cómo Empezar

Sigue estas instrucciones para tener una copia del proyecto funcionando en tu máquina local para desarrollo y pruebas.

### Prerrequisitos

Asegúrate de tener instalado lo siguiente:

- **Node.js:** Versión 18 o superior.
- **Git:** Para clonar el repositorio.
- **Docker y Docker Compose:** (Recomendado) Para un entorno de desarrollo y producción consistentes.

---

### 📦 Instalación y Ejecución

Hay dos maneras de levantar el proyecto: **localmente (para desarrollo del frontend/backend)** o **con Docker (entorno de producción simulado)**.

#### Opción 1: Desarrollo Local (con Hot-Reloading)

Este método es ideal para desarrollar y ver cambios en tiempo real.

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/TotoSB/Tecnica7-WebApp.git
    cd Tecnica7-WebApp
    ```

2.  **Configurar variables de entorno:**
    - Copia el archivo `.env.example` a un nuevo archivo llamado `.env`.
      ```bash
      cp .env.example .env
      ```
    - Abre `.env` y **modifica la variable `DATABASE_URL`** para que apunte a tu base de datos local (cambia `@db:5432` por `@localhost:5432`).
    - Rellena las demás variables si es necesario (claves de API, configuración de email, etc.).

3.  **Instalar dependencias:**
    - Instala las dependencias del backend (desde la raíz del proyecto):
      ```bash
      npm install
      ```
    - Instala las dependencias del frontend:
      ```bash
      cd frontend
      npm install
      cd ..
      ```

4.  **Levantar la base de datos (con Docker):**
    Aunque corras la app localmente, puedes usar Docker solo para la base de datos.
    ```bash
    docker-compose up -d db
    ```
    Esto levantará un contenedor de PostgreSQL con los datos de tu archivo `.env`.

5.  **Aplicar migraciones de la base de datos:**
    Asegúrate que la base de datos esté corriendo y luego ejecuta:
    ```bash
    npx prisma migrate dev
    ```

6.  **Iniciar los servidores de desarrollo:**
    Este comando iniciará el backend (con `nodemon`) y el frontend (con `vite`) concurrentemente.
    ```bash
    npm start
    ```
    - El frontend estará disponible en `http://localhost:5173` (o el puerto que indique Vite).
    - El backend estará disponible en `http://localhost:3000`.

#### Opción 2: Entorno Docker (Simulando Producción)

Este método construye las imágenes y levanta todo el stack de la aplicación (backend + base de datos) usando Docker.

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/TotoSB/Tecnica7-WebApp.git
    cd Tecnica7-WebApp
    ```

2.  **Configurar variables de entorno:**
    - Copia el archivo `.env.example` a `.env`.
      ```bash
      cp .env.example .env
      ```
    - Asegúrate que las variables en `.env` sean correctas. Para Docker, `DATABASE_URL` debe apuntar al host `db`.

3.  **Construir y levantar los contenedores:**
    Este comando construirá la imagen de la aplicación (incluyendo la compilación del frontend y la instalación de dependencias) y levantará los servicios.
    ```bash
    docker-compose up --build -d
    ```

4.  **Aplicar migraciones de la base de datos (en el contenedor):**
    ```bash
    docker-compose exec app npx prisma migrate deploy
    ```

5.  **Acceder a la aplicación:**
    La aplicación estará disponible en la URL que corresponda al puerto `APP_PORT` de tu `.env` (por defecto `http://localhost:3000`).

---

## 📂 Estructura del Proyecto

```
.
├── frontend/         # Código fuente del Frontend (React + Vite)
│   ├── src/
│   └── package.json
├── src/              # Código fuente del Backend (Node.js + Express)
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   └── app.ts
├── prisma/           # Esquema y migraciones de Prisma
│   └── schema.prisma
├── sql/              # Scripts de inicialización de la BD
├── .env.example      # Plantilla de variables de entorno
├── docker-compose.yml # Orquestación de servicios Docker
├── Dockerfile        # Definición de la imagen Docker de producción
└── package.json      # Dependencias y scripts del Backend
```

---

## 📜 Scripts Disponibles

En el `package.json` de la raíz, encontrarás los siguientes scripts:

- `npm run build`: Compila el código TypeScript del backend a JavaScript en el directorio `dist/`.
- `npm start`: Inicia los servidores de desarrollo del backend y frontend simultáneamente.
- `npm run dev`: Inicia únicamente el servidor de desarrollo del backend con `nodemon`.

---

## 💬 Sistema de Commits

Para mantener un historial de cambios limpio y legible, este proyecto utiliza la especificación de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

**Formato:** `type(scope): subject`

- **type:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
- **scope:** (opcional) Módulo afectado (ej. `api`, `client`, `db`).
- **subject:** Descripción concisa y en imperativo.

**Ejemplo:**
`feat(api): agregar endpoint para registro de usuarios`
`fix(client): corregir validación de formulario de login`
