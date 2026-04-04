# Guia CMS - Total Singers

Esta guia explica como gestionar contenido del sitio desde Sanity Studio sin tocar codigo.

## 1) Acceso al CMS

1. Abre el studio desplegado de Sanity (URL de tu proyecto) o correlo localmente:

```bash
cd studio
npm install
npm run dev
```

2. Inicia sesion con tu cuenta autorizada de Sanity.
3. Selecciona el dataset `production`.

## 2) Modelos de contenido

## Team Member (Miembro del Equipo)

Campos principales:

- `name` (string, obligatorio)
- `slug` (slug, obligatorio, autogenerado desde nombre)
- `role` (string, obligatorio)
- `image` (image, obligatorio)
- `instrument` (string, opcional)
- `bio` (text, opcional)
- `color` (string, opcional)
- `socialLinks.instagram` (string, opcional, solo usuario)
- `socialLinks.tiktok` (string, opcional, solo usuario)
- `socialLinks.facebook` (string, opcional, solo usuario)
- `socialLinks.youtube` (string, opcional, solo usuario)

Notas:

- El color usa presets visuales + opcion hex personalizada.
- El frontend enlaza perfiles con `slug` (`/team/:slug`).

## Show (Evento / Recital)

Campos principales:

- `title` (string, obligatorio)
- `slug` (slug, obligatorio, autogenerado desde titulo)
- `date` (date, obligatorio)
- `eventTime` (string `HH:mm`, opcional)
- `doorsOpenTime` (string `HH:mm`, opcional)
- `estimatedDurationMinutes` (number, opcional)
- `venue` (string, obligatorio)
- `location` (string, obligatorio)
- `locationUrl` (url, opcional)
- `description` (text markdown, opcional)
- `image` (image, obligatorio)
- `setlist` (array, opcional)

Campos por cancion (`setlist[]`):

- `number` (number, obligatorio)
- `title` (string, obligatorio)
- `artist` (string, obligatorio)
- `duration` (string `mm:ss`, obligatorio)
- `soloistRefs` (array de referencias a `teamMember`, opcional)

Notas:

- `soloistRefs` permite elegir miembros reales del equipo.
- En frontend, los solistas se muestran como links a su perfil cuando tienen `slug`.

## 3) Flujo editorial (sin codigo)

## Crear o editar miembro

1. Abre `Miembro del Equipo`.
2. Crea o edita registro.
3. Sube foto en `image`.
4. Completa `name`, `role`, `instrument`, `bio`, color y redes.
5. Publica.

## Crear o editar evento

1. Abre `Evento / Recital`.
2. Crea o edita registro.
3. Completa datos generales (`title`, `date`, `venue`, `location`, horas).
4. Agrega descripcion en markdown en `description`.
5. Sube imagen en `image`.
6. En `setlist`, agrega canciones y selecciona solistas en `soloistRefs`.
7. Publica.

## Eliminar contenido

- Abre el documento y usa `Delete`.
- Confirmar que no se use en links activos antes de borrar.

## 4) Como afecta al frontend

Mapeo principal:

- Team:
  - Lista: `src/pages/Team.tsx`
  - Destacados home: `src/pages/Home.tsx`
  - Detalle: `src/pages/SingerDetail.tsx`
- Shows:
  - Lista: `src/pages/Shows.tsx`
  - Detalle: `src/pages/ShowDetail.tsx`

Cliente y queries:

- Cliente Sanity: `src/lib/sanity.ts`
- Hook miembros: `src/hooks/useTeamMembers.ts`
- Hook eventos: `src/hooks/useShows.ts`

Comportamientos importantes:

- Horas en UI se muestran en formato AM/PM.
- Duracion del programa:
  - Si `estimatedDurationMinutes` existe, usa ese valor.
  - Si no existe, se calcula desde setlist sumando 1 minuto extra por cancion.

## 5) API y variables de entorno

Variables necesarias en frontend:

- `VITE_SANITY_PROJECT_ID`
- `VITE_SANITY_DATASET`

Archivos:

- `.env` (local, no versionar)
- `.env.example` (plantilla para el equipo)

CORS en Sanity (produccion):

- Agregar dominios reales del sitio (ej. `https://www.totalsingers.com` y `https://totalsingers.com`).

## 6) Cambios de modelo (para devs)

Si cambias schemas en `studio/schemaTypes/*`:

1. Ejecuta studio local y valida.
2. Despliega schema:

```bash
cd studio
npx sanity deploy
```

3. Ajusta tipos en `src/types.ts`.
4. Ajusta proyecciones GROQ en `src/lib/sanity.ts`.
5. Verifica TypeScript:

```bash
# Frontend
node_modules/typescript/bin/tsc --noEmit --project tsconfig.json

# Studio
cd studio
node_modules/typescript/bin/tsc --noEmit --project tsconfig.json
```

## 7) Checklist rapido para editores

- Miembro nuevo con foto, rol, bio y redes.
- Evento nuevo con fecha, lugar, horas y descripcion.
- Setlist cargado con solistas del equipo.
- Documento publicado.
- Verificar en web que aparezca en `/team`, `/shows` y detalles.

## 8) Screenshots (pendiente de adjuntar)

Guarda las capturas en `docs/images/` con estos nombres exactos:

1. `cms-login.png` - Pantalla de acceso al Studio.
2. `cms-team-member-form.png` - Formulario de Miembro del Equipo.
3. `cms-show-form.png` - Formulario principal de Evento.
4. `cms-show-setlist.png` - Setlist con `soloistRefs` seleccionados.
5. `cms-publish-button.png` - Boton de publicar.

Cuando las agregues al repo, esta seccion quedara visible automaticamente:

![Login CMS](images/cms-login.png)

![Formulario Miembro](images/cms-team-member-form.png)

![Formulario Evento](images/cms-show-form.png)

![Setlist y Solistas](images/cms-show-setlist.png)

![Publicar contenido](images/cms-publish-button.png)
