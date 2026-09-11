# Backlog inicial

## Ahora: fundaciones

- [x] Crear el monorepo y los proyectos base.
- [x] Configurar builds y pruebas desde la raíz.
- [x] Añadir configuración de entorno sin secretos.
- [x] Documentar alcance y arquitectura inicial.
- [ ] Añadir CI para build y tests.
- [ ] Añadir Dockerfile de producción para la API.

## Siguiente: catálogo

- [ ] Definir entidades y migraciones de productos y categorías.
- [ ] Crear datos semilla de desarrollo.
- [ ] Implementar API paginada de catálogo.
- [ ] Implementar búsqueda y filtro por categoría.
- [ ] Construir listado, estados de carga, vacío y error.

## Después: carrito y pedidos

- [ ] Definir reglas del carrito y su persistencia.
- [ ] Implementar agregar, actualizar y eliminar artículos.
- [ ] Definir modelo y migración de pedidos.
- [ ] Implementar creación transaccional de pedido simulado.
- [ ] Construir resumen y confirmación del pedido.

## Operación y despliegue

- [ ] Aprovisionar Neon fuera del repositorio.
- [ ] Configurar variables y secretos en Cloud Run y Vercel.
- [ ] Desplegar API en Cloud Run y frontend en Vercel.
- [ ] Configurar CORS, health checks, logs y alertas.
- [ ] Ejecutar pruebas de humo del entorno desplegado.
