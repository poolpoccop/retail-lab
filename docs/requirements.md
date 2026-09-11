# Requisitos

## Objetivo del producto

Construir una tienda web de productos generales que permita explorar un catálogo, encontrar productos y simular la creación de pedidos.

## Alcance funcional previsto

1. Listar productos con información básica y disponibilidad.
2. Buscar productos por texto.
3. Filtrar productos por categoría.
4. Añadir, modificar y eliminar artículos de un carrito.
5. Crear un pedido simulado a partir del carrito.
6. Mostrar confirmación y resumen del pedido.

## Alcance de este hito

- Estructura base del monorepo.
- Aplicaciones backend y frontend compilables.
- Configuración inicial de PostgreSQL y Flyway.
- Pruebas mínimas de arranque/renderizado.
- Documentación técnica inicial.

## Fuera de alcance

- Autenticación y autorización.
- Pagos o integración con proveedores de pago.
- Microservicios.
- Credenciales o aprovisionamiento de Neon, Vercel o Google Cloud.
- Inventario en tiempo real, envíos y devoluciones.

## Requisitos no funcionales iniciales

- No almacenar secretos en Git.
- Builds y tests reproducibles desde la raíz.
- API desplegable como contenedor en Cloud Run.
- Frontend desplegable como sitio Vite en Vercel.
- Esquema versionado con Flyway.
- Diseño responsive y accesible en los flujos que se implementen.

## Criterios de aceptación del hito

- `pnpm build` compila ambos proyectos con Java 21, Maven y Node disponibles.
- `pnpm test` ejecuta pruebas de ambos proyectos.
- La configuración productiva de la API se obtiene del entorno.
- Ningún archivo versionado contiene secretos reales.
