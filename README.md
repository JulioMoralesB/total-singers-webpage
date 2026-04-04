## CMS Headless

### Decisión Técnica: Sanity

Como parte del proceso de migración a CMS headless para centralizar la gestión de contenido (miembros y eventos), se evaluaron las siguientes opciones:

| Criterio | Sanity ✅ | Contentful | Strapi |
|---|---|---|---|
| **Plan gratuito** | Generoso (3 usuarios, proyectos ilimitados) | Muy limitado | Solo self-hosted |
| **Integración React/Vite** | Excelente, SDK oficial | Buena, SDK oficial | Buena, pero requiere backend propio |
| **API** | REST + GROQ + GraphQL | REST + GraphQL | REST + GraphQL |
| **Imágenes** | CDN integrado + transformaciones automáticas | CDN integrado | Manual/plugin |
| **Deploy** | Cloud gestionado (Sanity.io) | Cloud gestionado | Self-hosted (requiere servidor) |
| **Esquemas en TypeScript** | ✅ Sí | ❌ No | ✅ Sí |
| **Tiempo real / Live preview** | ✅ Sí | ❌ No | ❌ No |
| **Curva de aprendizaje** | Baja-media | Baja | Media-alta |

### ¿Por qué Sanity?

1. **Sin servidor propio** — Es cloud gestionado, compatible directamente con el deploy en Vercel sin infraestructura adicional.
2. **Esquemas en TypeScript** — Los modelos de contenido se definen en TypeScript dentro del mismo repositorio, manteniendo consistencia con el stack del proyecto.
3. **Manejo de imágenes** — El CDN de Sanity (`@sanity/image-url`) ofrece redimensionado automático, recorte y conversión a WebP, ideal para fotos de miembros.
4. **Plan gratuito suficiente** — 100k requests/mes y 5 GB de assets, más que suficiente para el volumen de contenido del proyecto.
5. **Integración probada con React 19 + Vite** — El cliente oficial `@sanity/client` se integra directamente sin configuración compleja.

### Próximo paso

Modelar los esquemas de **miembros** (`member`) y **eventos** (`show`) directamente en Sanity Studio como continuación de esta migración.