# Total Singers — Sitio Web Oficial

Sitio web de **Total Singers**, un conjunto vocal de alto rendimiento que combina armonías sofisticadas con la energía del pop moderno.

## Stack Técnico

- **React 19** con TypeScript
- **Vite 5** como bundler
- **Tailwind CSS v4** para estilos
- **React Router v6** para navegación

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Inicio — Hero, filosofía, equipo destacado y CTA |
| `/shows` | Recitales — Lista de próximas presentaciones |
| `/shows/:id` | Detalle de recital |
| `/setlist` | Itinerario — Lista de canciones del concierto |
| `/team` | Equipo — Grid completo de miembros |
| `/about` | Acerca de Total Singers |
| `/privacy` | Política de privacidad |
| `/terms` | Términos de servicio |

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# TypeScript check
npm run lint
```

## Estructura del proyecto

```
src/
├── components/
│   ├── Badge.tsx          # Chip/etiqueta de color
│   ├── Button.tsx         # Botón reutilizable (primary / secondary)
│   ├── Card.tsx           # Contenedor de tarjeta
│   ├── Footer.tsx         # Pie de página
│   ├── Navigation.tsx     # Barra de navegación fija con menú móvil
│   └── SingerCard.tsx     # Tarjeta de perfil de cantante con hover
├── data/
│   └── index.ts           # Datos estáticos: shows, setlist, equipo
├── pages/
│   ├── Home.tsx
│   ├── Shows.tsx
│   ├── ShowDetail.tsx
│   ├── Setlist.tsx
│   ├── Team.tsx
│   ├── About.tsx
│   ├── Privacy.tsx
│   └── Terms.tsx
├── styles/
│   └── globals.css        # Estilos base, componentes y utilidades Tailwind
├── types.ts               # Interfaces TypeScript (Show, Track, TeamMember)
├── App.tsx                # Router y layout principal
└── main.tsx               # Entry point
```

## Design System

Los colores, tipografía y espaciado están definidos en `tailwind.config.ts` bajo el design system **Modern Harmony**. Las clases utilitarias de componentes (`glass-card`, `btn-primary`, `title-hero`, etc.) se encuentran en `src/styles/globals.css`.

## Datos

Los datos de shows, setlist y miembros del equipo se gestionan en `src/data/index.ts`. Para agregar o modificar contenido, edita ese archivo.

## Redes Sociales

Instagram: [@total.singers](https://instagram.com/total.singers)

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