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
| `/shows/:slug` | Detalle de recital |
| `/team` | Equipo — Grid completo de miembros |
| `/team/:slug` | Perfil de miembro |
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
│   ├── Team.tsx
│   ├── SingerDetail.tsx
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

El contenido principal del sitio se consume desde Sanity CMS (hooks en `src/hooks/` y queries en `src/lib/sanity.ts`).

`src/data/index.ts` queda como fallback local de desarrollo.

## Redes Sociales

Instagram: [@total.singers](https://instagram.com/total.singers)

## CMS

La documentación de gestión de contenido (editores y desarrolladores) está en:

- [docs/CMS-GUIDE.md](docs/CMS-GUIDE.md)