# Guía para agentes

## Alcance

Este repositorio es un monorepo con una API Spring Boot en `apps/api` y un frontend React en `apps/web`.

## Convenciones

- Mantener Java 21, Spring Boot y Maven en la API.
- Mantener TypeScript estricto, React y Vite en el frontend.
- Crear cambios de esquema exclusivamente mediante migraciones Flyway nuevas; no editar migraciones ya aplicadas.
- No incluir secretos. Documentar variables nuevas en `.env.example` con valores locales ficticios.
- No añadir autenticación, pagos ni microservicios sin una decisión arquitectónica explícita.
- Mantener controladores delgados y separar dominio, aplicación e infraestructura cuando aparezca lógica de negocio.
- Añadir o actualizar pruebas con cada cambio funcional.

## Verificación obligatoria

Ejecutar desde la raíz antes de entregar cambios:

```bash
pnpm build
pnpm test
```

## Documentación

Actualizar `docs/requirements.md`, `docs/architecture.md` o `docs/backlog.md` cuando cambien el alcance, la arquitectura o las prioridades.
