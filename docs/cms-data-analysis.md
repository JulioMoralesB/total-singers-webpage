# Análisis de Consumo de Datos — Total Singers

> **Propósito:** Este documento describe todos los lugares donde el frontend consume los datos de **miembros del equipo** (`teamData`) y **eventos/recitales** (`showsData`), junto con los tipos, propiedades y particularidades de cada uso. Sirve como base para modelar el contenido en un CMS.

---

## 1. Fuente de datos actual

| Archivo | Exporta | Descripción |
|---|---|---|
| `src/data/index.ts` | `teamData: TeamMember[]` | Array con los 4 miembros del grupo |
| `src/data/index.ts` | `showsData: Show[]` | Array con los 3 recitales próximos |
| `src/types.ts` | `Show`, `Track`, `SocialLinks`, `TeamMember` | Interfaces TypeScript que definen la forma de los datos |

---

## 2. Modelo de datos — Miembros (`TeamMember`)

### 2.1 Interfaz TypeScript (`src/types.ts`)

```ts
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  instrument?: string;
  bio?: string | null;
  color?: 'primary' | 'secondary' | 'tertiary';
  socialLinks?: SocialLinks;
}

export interface SocialLinks {
  instagram?: string;
  tiktok?: string;
  facebook?: string;
  youtube?: string;
}
```

### 2.2 Tabla de propiedades

| Propiedad | Tipo | Requerido | Descripción |
|---|---|---|---|
| `id` | `string` | ✅ | Identificador único. Se usa como parámetro de ruta (`/team/:id`). |
| `name` | `string` | ✅ | Nombre completo del miembro. |
| `role` | `string` | ✅ | Rol o registro vocal (ej. "Soprano / Solista"). |
| `image` | `string` | ✅ | URL de la foto de perfil (formato `3/4`). |
| `instrument` | `string` | ❌ | Instrumento o especialidad. Declarado en el tipo pero no renderizado actualmente en ninguna página. |
| `bio` | `string \| null` | ❌ | Texto biográfico. Se renderiza en `SingerDetail` si existe. |
| `color` | `'primary' \| 'secondary' \| 'tertiary'` | ❌ | Tema de color del miembro. Controla degradados en tarjeta y página de detalle. Valor por defecto: `'primary'`. |
| `socialLinks.instagram` | `string` | ❌ | URL completa al perfil de Instagram. |
| `socialLinks.tiktok` | `string` | ❌ | URL completa al perfil de TikTok. |
| `socialLinks.facebook` | `string` | ❌ | URL completa al perfil de Facebook. |
| `socialLinks.youtube` | `string` | ❌ | URL completa al perfil de YouTube. |

### 2.3 Ejemplo de dato actual

```json
{
  "id": "1",
  "name": "Maya García",
  "role": "Soprano / Solista",
  "image": "https://lh3.googleusercontent.com/...",
  "instrument": "Voz",
  "bio": "Soprano principal y solista del grupo. Apasionada por la música desde los 8 años, Maya aporta potencia y emoción en cada presentación.",
  "color": "primary",
  "socialLinks": {
    "instagram": "https://instagram.com",
    "tiktok": "https://tiktok.com"
  }
}
```

### 2.4 Dónde se consume `teamData`

| Archivo | Línea(s) | Campos leídos | Notas |
|---|---|---|---|
| `src/pages/Home.tsx` | L5, L79–89 | `id`, `name`, `role`, `image`, `color` | Se toman solo los **primeros 4** miembros (`slice(0, 4)`). Se pasan como props a `<SingerCard>`. |
| `src/pages/Team.tsx` | L3, L31–41 | `id`, `name`, `role`, `image`, `color` | Se itera **todo** el array. Se pasan como props a `<SingerCard>`. |
| `src/pages/SingerDetail.tsx` | L3, L28 | `id`, `name`, `role`, `image`, `color`, `bio`, `socialLinks` | Se busca el miembro por `id` via `useParams`. Si no existe, muestra 404 interno. Renderiza redes sociales iterando `Object.entries(socialLinks)`. |

### 2.5 Componente consumidor: `SingerCard` (`src/components/SingerCard.tsx`)

Props que recibe desde las páginas:

| Prop | Tipo | Requerido | Origen en `TeamMember` |
|---|---|---|---|
| `id` | `string` | ❌ | `member.id` — si se omite, la imagen no es un link. |
| `name` | `string` | ✅ | `member.name` |
| `role` | `string` | ✅ | `member.role` |
| `image` | `string` | ✅ | `member.image` |
| `color` | `'primary' \| 'secondary' \| 'tertiary'` | ❌ | `member.color ?? 'primary'` |

---

## 3. Modelo de datos — Eventos (`Show`)

### 3.1 Interfaz TypeScript (`src/types.ts`)

```ts
export interface Show {
  id: string;
  slug: string;
  title: string;
  date: string;
  location: string;
  venue: string;
  image: string;
  setlist?: Track[];
}

export interface Track {
  id: string;
  number: number;
  title: string;
  artist: string;
  duration: string;
  soloists?: string[];
}
```

### 3.2 Tabla de propiedades — Show

| Propiedad | Tipo | Requerido | Descripción |
|---|---|---|---|
| `id` | `string` | ✅ | Identificador único del evento. |
| `slug` | `string` | ✅ | Identificador de URL amigable (ej. `"armonias-neon-concierto-especial"`). Se usa como parámetro de ruta (`/shows/:slug`). |
| `title` | `string` | ✅ | Nombre del recital. |
| `date` | `string` | ✅ | Fecha en formato `YYYY-MM-DD`. El frontend lo convierte con `toLocaleDateString('es-ES', ...)`. |
| `location` | `string` | ✅ | Nombre de la sala o espacio dentro del venue (ej. "Auditorio Principal"). |
| `venue` | `string` | ✅ | Nombre del recinto o lugar del evento (ej. "Centro Cultural"). |
| `image` | `string` | ✅ | URL de la imagen de portada del evento. |
| `setlist` | `Track[]` | ❌ | Lista de canciones del programa. Solo se renderiza en `ShowDetail` si existe y tiene elementos. |

### 3.3 Tabla de propiedades — Track (elemento de `setlist`)

| Propiedad | Tipo | Requerido | Descripción |
|---|---|---|---|
| `id` | `string` | ✅ | Identificador único de la pista. |
| `number` | `number` | ✅ | Número de orden en el programa. Se muestra con `padStart(2, '0')`. |
| `title` | `string` | ✅ | Título de la canción (puede incluir anotaciones, ej. `"(Remix de Total Singers)"`). |
| `artist` | `string` | ✅ | Artista original de la canción. |
| `duration` | `string` | ✅ | Duración en formato `"m:ss"` (ej. `"4:12"`). El frontend calcula el total convirtiendo a segundos. |
| `soloists` | `string[]` | ❌ | Nombres de los solistas de esa canción (solo primeros nombres). Se muestran junto al artista. |

### 3.4 Ejemplo de dato actual

```json
{
  "id": "1",
  "slug": "armonias-neon-concierto-especial",
  "title": "Armonías Neon - Concierto Especial",
  "date": "2025-09-15",
  "location": "Auditorio Principal",
  "venue": "Centro Cultural",
  "image": "https://lh3.googleusercontent.com/...",
  "setlist": [
    {
      "id": "1",
      "number": 1,
      "title": "Levitating (Remix de Total Singers)",
      "artist": "Dua Lipa",
      "duration": "4:12",
      "soloists": ["Maya", "Diego"]
    },
    {
      "id": "2",
      "number": 2,
      "title": "Blinding Lights",
      "artist": "The Weeknd",
      "duration": "3:20",
      "soloists": ["Sofía"]
    }
  ]
}
```

### 3.5 Dónde se consume `showsData`

| Archivo | Línea(s) | Campos leídos | Notas |
|---|---|---|---|
| `src/pages/Home.tsx` | L5, L16, L44–45 | `title`, `venue`, `date` | Se usa solo el **primer elemento** (`showsData[0]`) como "Próxima Presentación" en el hero. La fecha se formatea con `formatDateShort` (día, mes largo, año). Incluye link a `/shows`. |
| `src/pages/Shows.tsx` | L3, L44–73 | `id`, `title`, `image`, `venue`, `date`, `slug` | Se itera **todo** el array. Imagen como fondo de tarjeta. Fecha formateada en dos variantes: corta (badge) y larga (texto). Cada tarjeta linkea a `/shows/:slug`. |
| `src/pages/ShowDetail.tsx` | L4, L23, L35–165 | `title`, `image`, `venue`, `location`, `date`, `slug`, `setlist` | Se busca el show por `slug` via `useParams`. Si no existe, redirige a `/shows`. Renderiza setlist solo si `setlist && setlist.length > 0`. Calcula duración total del setlist. |

---

## 4. Funciones de formato de fecha

Ambas funciones son utilitarias locales, definidas en cada página que las necesita (no están centralizadas):

```ts
// Formato corto: "15 sep." — usado en badges de fecha
const formatDateShort = (dateStr: string) => {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('es-ES', {
    day: 'numeric', month: 'short',
  })
}

// Formato largo: "lunes, 15 de septiembre de 2025" — usado en detalle de evento
const formatDateFull = (dateStr: string) => {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('es-ES', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  })
}
```

> **Nota para CMS:** El campo `date` del CMS puede ser tipo `Date` o `DateTime`. El frontend solo necesita la parte de fecha (`YYYY-MM-DD`). No se usa hora de inicio actualmente (el texto "20:00 hrs" en `ShowDetail` es estático, no proviene de los datos).

---

## 5. Rutas del frontend que dependen de los datos

| Ruta | Parámetro | Fuente del parámetro |
|---|---|---|
| `/team/:id` | `id` de `TeamMember` | `teamData[n].id` |
| `/shows/:slug` | `slug` de `Show` | `showsData[n].slug` |

---

## 6. Resumen para modelado en CMS

### Tipo de contenido: **Miembro** (`TeamMember`)

Campos sugeridos en el CMS:

| Campo CMS | Tipo CMS | Validación |
|---|---|---|
| `id` | Text / Auto-ID | Único, requerido |
| `name` | Short Text | Requerido |
| `role` | Short Text | Requerido |
| `image` | Asset / Media | URL, requerido |
| `instrument` | Short Text | Opcional |
| `bio` | Long Text | Opcional |
| `color` | Enum / Select | Valores: `primary`, `secondary`, `tertiary`. Opcional, defecto `primary` |
| `socialLinks` | Object / Group | Opcional. Sub-campos: `instagram`, `tiktok`, `facebook`, `youtube` (todos Short Text opcionales) |

### Tipo de contenido: **Evento** (`Show`)

Campos sugeridos en el CMS:

| Campo CMS | Tipo CMS | Validación |
|---|---|---|
| `id` | Text / Auto-ID | Único, requerido |
| `slug` | Slug | Único, requerido. Derivable del título |
| `title` | Short Text | Requerido |
| `date` | Date | Requerido. Formato `YYYY-MM-DD` |
| `location` | Short Text | Requerido (sala dentro del venue) |
| `venue` | Short Text | Requerido (nombre del recinto) |
| `image` | Asset / Media | URL, requerido |
| `setlist` | List of objects | Opcional. Ver tipo **Track** abajo |

### Tipo de contenido: **Track** (anidado en `Show.setlist`)

| Campo CMS | Tipo CMS | Validación |
|---|---|---|
| `id` | Text / Auto-ID | Único por evento, requerido |
| `number` | Integer | Requerido. Orden de aparición |
| `title` | Short Text | Requerido |
| `artist` | Short Text | Requerido |
| `duration` | Short Text | Requerido. Formato `m:ss` |
| `soloists` | List of Strings | Opcional. Nombres cortos de los solistas |

---

## 7. Referencias de archivos

| Archivo | Rol |
|---|---|
| `src/types.ts` | Interfaces TypeScript: `Show`, `Track`, `SocialLinks`, `TeamMember` |
| `src/data/index.ts` | Datos estáticos: `showsData`, `teamData` |
| `src/pages/Home.tsx` | Consume `showsData[0]` y `teamData.slice(0,4)` |
| `src/pages/Team.tsx` | Consume `teamData` completo → `<SingerCard>` |
| `src/pages/Shows.tsx` | Consume `showsData` completo → tarjetas de eventos |
| `src/pages/ShowDetail.tsx` | Consume `showsData.find(s => s.slug === slug)` → detalle + setlist |
| `src/pages/SingerDetail.tsx` | Consume `teamData.find(m => m.id === id)` → perfil del miembro |
| `src/components/SingerCard.tsx` | Componente de tarjeta: recibe `id`, `name`, `role`, `image`, `color` |
