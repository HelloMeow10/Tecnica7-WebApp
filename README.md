# E.E.S.T N°7 "Técnica 7" Web App

![CI/CD](https://img.shields.io/badge/CI%2FCD-WIP-orange?style=for-the-badge)

Repositorio de la aplicación web para la **Escuela de Educación Secundaria Técnica N°7 de Lomas de Zamora**. Este proyecto es una migración y modernización de la plataforma existente, construida con un stack de tecnologías actual.

---

## ✨ Features

- **Backend Robusto:** Construido con Node.js y Express, utilizando TypeScript para un código más seguro y mantenible.
- **Frontend Moderno:** Interfaz de usuario reactiva y performante creada con React, Vite y TypeScript.
- **Estilos con Tailwind CSS:** UI diseñada con un enfoque utility-first para un desarrollo rápido y consistente.
- **Componentes con Shadcn/UI:** Utilización de una librería de componentes reusables, accesibles y estéticamente agradables.
- **Base de Datos PostgreSQL:** Gestión de datos relacional y robusta usando SQL directo (driver `pg`).
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

5.  **Inicializar la base de datos:**
        Si levantaste la base de datos con Docker en el paso anterior, los scripts en `./sql` (crear tablas y seed) se ejecutan automáticamente la primera vez que inicia el contenedor. No necesitas hacer nada más.

        Si estás usando una base de datos PostgreSQL local (sin Docker), aplica los scripts manualmente con `psql`:
        - Windows PowerShell (requiere `psql` instalado y en el PATH):
            ```powershell
            # Ajusta usuario, base y host según tu .env (DATABASE_URL)
            $env:PGPASSWORD="tu_password"; psql -h localhost -U tu_usuario -d tu_base -f "sql/01_init.sql"; psql -h localhost -U tu_usuario -d tu_base -f "sql/02_seed.sql"
            ```
        - Alternativa general (desde cualquier shell con `psql`):
            ```bash
            PGPASSWORD="tu_password" psql -h localhost -U tu_usuario -d tu_base -f sql/01_init.sql
            PGPASSWORD="tu_password" psql -h localhost -U tu_usuario -d tu_base -f sql/02_seed.sql
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

4.  **Base de datos y seed:**
    La base de datos se inicializa automáticamente con los scripts de `./sql` al crear el contenedor de PostgreSQL por primera vez.
    Si necesitas re-ejecutar solo el seed dentro del contenedor, puedes hacerlo así:
    ```powershell
    # Reemplaza el usuario y base por los de tu .env / docker-compose
    docker exec -i tecnica7-db-container psql -U postgres -d tecnica7db -f /docker-entrypoint-initdb.d/02_seed.sql
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
├── sql/              # Scripts SQL de creación y seed de la BD (01_init.sql, 02_seed.sql)
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

### Prisma (opcional)
El proyecto ahora incluye Prisma como ORM opcional. La base de datos se inicializa con SQL, pero podés usar Prisma para el acceso a datos y explorar el esquema.

- `npm run prisma:generate`: Genera el Prisma Client a partir del `prisma/schema.prisma`.
- `npm run prisma:db:pull`: Sincroniza el schema de Prisma desde tu base de datos existente.
- `npm run prisma:migrate`: Crea/aplica migraciones (útil si empezás a gestionar cambios con Prisma).
- `npm run prisma:studio`: Abre Prisma Studio para explorar la base.

Sugerencia: Si ya creaste la BD con `sql/01_init.sql` y `sql/02_seed.sql`, ejecutá `npm run prisma:db:pull` para asegurarte que el schema de Prisma refleje fielmente la estructura actual.

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
