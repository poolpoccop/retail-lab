# retail-lab

Monorepo de una tienda web de productos generales. Este primer hito contiene únicamente la base técnica del backend, el frontend y la documentación; no incluye todavía catálogo, búsqueda, carrito ni pedidos.

## Requisitos

- Java 21
- Maven 3.9.5 mediante Maven Wrapper incluido (no requiere Maven global)
- Node.js 22.22.2+, 24.15.0+ o 26+ (según engines de package.json)
- pnpm 11.19.0
- PostgreSQL 16+ para ejecución local (no es necesario para compilar ni probar)

## Estructura

- `apps/api`: API REST con Spring Boot, Maven, PostgreSQL y Flyway.
- `apps/web`: aplicación React, TypeScript y Vite.
- `docs`: requisitos, arquitectura y backlog inicial.

## Primeros pasos

```bash
pnpm install --frozen-lockfile
```

El repositorio configura la caché de Maven en `.m2/repository` (ignorada por Git), evitando depender de la ubicación global del usuario.

La API requiere las variables `DATABASE_URL`, `DATABASE_USERNAME` y `DATABASE_PASSWORD` al ejecutarse. Los tests usan H2 y no requieren PostgreSQL ni secretos.

## Compilar y probar

Desde la raíz:

```bash
pnpm build
pnpm test
```

Por proyecto:

```bash
pnpm build:api
pnpm --dir apps/web build
pnpm --dir apps/web test
```

## Desarrollo

```bash
pnpm dev:api
pnpm dev:web
```

La API escucha en `http://localhost:8080` y expone su health check en `/actuator/health`. Vite usa `http://localhost:5173` por defecto.

## Despliegue previsto

- Frontend: Vercel.
- Backend: imagen OCI en Google Cloud Run.
- Base de datos: PostgreSQL administrado en Neon.

No se incluyen credenciales ni automatización de despliegue en este hito.

## Entorno local

Configura JAVA_HOME al directorio de un JDK 21 y coloca su carpeta bin al inicio de PATH.
Comprueba java -version y, en PowerShell, .\mvnw.cmd --version
(en Bash: sh ./mvnw --version) antes de compilar.

El build utiliza .mvn/settings.xml para evitar depender de mirrors o credenciales
de la configuración global de Maven. La primera ejecución del Wrapper requiere Internet.

.env.example contiene únicamente valores ficticios de referencia. Spring Boot no
carga automáticamente un archivo .env. Para ejecutar la API, crea previamente la base
PostgreSQL y su usuario, y exporta DATABASE_URL, DATABASE_USERNAME y DATABASE_PASSWORD
en la terminal. Ejemplo PowerShell con una base local configurada con estos valores:

```powershell
$env:DATABASE_URL = 'jdbc:postgresql://localhost:5432/retail_lab'
$env:DATABASE_USERNAME = 'retail_lab'
$env:DATABASE_PASSWORD = 'change-me-locally'
pnpm dev:api
```

En Bash usa export VARIABLE=valor. No se necesita ninguna variable para build y tests.
POSTGRES_* describe el aprovisionamiento manual de PostgreSQL; la API usa DATABASE_*.
VITE_API_URL se reserva para la futura integración: el frontend actual no consume la API.
Cuando se utilice, expórtala antes de ejecutar Vite; las variables VITE_* son públicas.

Ejecuta pnpm dev:web en otra terminal. Los servidores permanecen activos hasta Ctrl+C.
