# Arquitectura

## Vista general

```text
Navegador
   |
   v
React + Vite (Vercel)
   |
   | HTTPS / JSON
   v
Spring Boot API (Google Cloud Run)
   |
   | JDBC + TLS
   v
PostgreSQL (Neon)
```

Se adopta un monolito modular para la API. Es suficiente para el alcance, reduce complejidad operativa y permite separar módulos internos cuando aparezca el dominio, sin introducir microservicios.

## Backend

- Java 21 y Spring Boot 3.5.5; Maven 3.9.5 fijado mediante Wrapper en la raíz.
- API REST con respuestas JSON.
- Spring Data JPA para persistencia.
- Flyway como única fuente de evolución del esquema.
- Actuator para health checks de Cloud Run.
- Configuración mediante variables de entorno exportadas; no se carga .env automáticamente.
- Tests de contexto con H2 para no depender de servicios externos.

La estructura futura seguirá paquetes por capacidad (`catalog`, `cart`, `order`) y componentes compartidos mínimos. En este hito solo existe el bootstrap técnico.

## Frontend

- React con TypeScript estricto.
- Vite para desarrollo y build.
- Vitest y Testing Library para pruebas.
- `VITE_API_URL` se reserva para la URL pública de la API en tiempo de build; todavía no se consume.

El estado del carrito será inicialmente del cliente; la decisión sobre persistencia se tomará al diseñar el flujo de pedidos.

## Despliegue y configuración

- Vercel sirve los activos estáticos del frontend.
- Cloud Run ejecuta una única imagen de la API y usa el puerto indicado por `PORT`.
- Neon ofrece PostgreSQL; la cadena JDBC y credenciales se inyectan como secretos del entorno de despliegue.
- Ninguna credencial se almacena en el repositorio.

## Decisiones pendientes

- Modelo exacto de producto, categoría, carrito y pedido.
- Estrategia de datos semilla para desarrollo y demostración.
- Persistencia del carrito (solo navegador o servidor anónimo).
- Política de CORS para dominios de preview y producción.
- Observabilidad, límites de recursos y escalado de Cloud Run.
- Pipeline CI/CD y estrategia de ambientes.
