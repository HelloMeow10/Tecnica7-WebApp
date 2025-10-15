# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/d3f67c7d-d729-4894-8c36-1b841b4cd939

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/d3f67c7d-d729-4894-8c36-1b841b4cd939) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/d3f67c7d-d729-4894-8c36-1b841b4cd939) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Clonar la base de datos de Prisma (sin Docker)

Estas instrucciones asumen que tu proyecto usa PostgreSQL (ver `prisma/schema.prisma`) y que quieres clonar una base de datos remota/local a otra instancia PostgreSQL en tu máquina Windows (PowerShell). No usaremos Docker.

Resumen de pasos:
- Instalar PostgreSQL en tu máquina (o tener acceso a una instancia PostgreSQL).
- Exportar la base de datos origen con `pg_dump` (o `pg_dumpall` para roles).
- Crear la base de datos destino y restaurar el volcado con `psql` o `pg_restore`.
- Ajustar `DATABASE_URL` en tu `.env` y ejecutar comandos de Prisma.

Requisitos mínimos:
- PostgreSQL (incluye `pg_dump`, `pg_restore`, `psql`). En Windows puedes instalarlo desde https://www.postgresql.org/download/windows/
- Acceso (usuario/host/puerto/contraseña) a la base de datos origen.

Importante: no commits credenciales en el repositorio. Usa un archivo `.env` local y añade `.env` al `.gitignore`.

Ejemplos de comandos (PowerShell)

1) Variables de entorno temporales (PowerShell)

```powershell
$env:SOURCE_DB = "postgresql://user:password@origen_host:5432/origen_db"
$env:TARGET_DB = "postgresql://postgres:localpass@localhost:5432/mi_bd_local"
```

Reemplaza `user`, `password`, `origen_host`, `origen_db`, `postgres`, `localpass` y `mi_bd_local` por tus valores.

2) Crear la base de datos destino (local)

```powershell
# Desde el usuario postgres local (o con privilegios)
# Si tienes psql en PATH:
 psql "postgresql://postgres:localpass@localhost:5432" -c "CREATE DATABASE mi_bd_local;"
```

3a) Opción recomendada: volcado en formato custom + restauración (conserve roles/privilegios mejor)

```powershell
# Volcar en formato custom
 pg_dump "${env:SOURCE_DB}" -Fc -f dump_custom.dump

# Restaurar en la DB destino (quita --no-owner si quieres preservar propietarios)
 pg_restore --verbose --clean --no-owner --no-privileges -d "${env:TARGET_DB}" dump_custom.dump
```

3b) Opción alternativa: volcado SQL plano y restauración

```powershell
# Volcado SQL
 pg_dump "${env:SOURCE_DB}" -f dump.sql

# Restaurar en la DB destino
 psql "${env:TARGET_DB}" -f dump.sql
```

4) (Opcional) Clonar roles y usuarios PostgreSQL

```powershell
# Exportar sólo roles desde el servidor origen (ejecutar en un entorno con acceso al origen)
 pg_dumpall --roles-only --file=roles.sql --host=origen_host --username=postgres

# Revisar roles.sql y luego aplicarlo al servidor destino con precaución
 psql "postgresql://postgres:localpass@localhost:5432" -f roles.sql
```

5) Ajustar `.env` y ejecutar Prisma

```powershell
# Crea/edita .env en la raíz del proyecto (no subirlo)
 # Ejemplo de contenido del .env
 # DATABASE_URL="postgresql://postgres:localpass@localhost:5432/mi_bd_local?schema=public"

# Exporta variable para la sesión (opcional)
 $env:DATABASE_URL = "postgresql://postgres:localpass@localhost:5432/mi_bd_local"

# Instala dependencias (si no lo hiciste)
 npm install

# Generar cliente Prisma
 npx prisma generate

# Sincronizar el esquema de Prisma con la base de datos (no cambia la DB)
 npx prisma db pull

# Si quieres aplicar migraciones (si usas migrations):
 # npx prisma migrate deploy   # para entornos productivos
 # npx prisma migrate dev      # para desarrollo (puede crear/alterar tablas)
```

Notas y consejos:
- Si la base de datos origen es grande, usa el formato custom (`-Fc`) y `pg_restore` para una restauración más rápida y fiable.
- `--no-owner` y `--no-privileges` evitan problemas si los roles no existen localmente. Si quieres preservar propietarios y privilegios, omítelos y asegúrate de restaurar roles primero.
- Si el origen está en un servicio gestionado (Heroku, Supabase, ElephantSQL), revisa sus docs: normalmente ofrecen un string de conexión que puedes usar con `pg_dump`.
- Para depuración, primero prueba con una base de datos pequeña o un esquema (`--schema-only`) y luego con los datos completos.

Si quieres, puedo añadir también un pequeño script PowerShell en `scripts/` para automatizar el volcado y la restauración. ¿Te lo creo?
