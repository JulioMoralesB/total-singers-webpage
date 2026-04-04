# Guia CMS - Total Singers

Esta guia explica como administrar el contenido del sitio desde Sanity Studio.
Esta pensada para editores y colaboradores que no necesitan tocar codigo.

## 1) Acceso al CMS

### Opcion recomendada (produccion)

- https://total-singers.sanity.studio/

### Opcion local (desarrollo)

```bash
cd studio
npm install
npm run dev
```

Luego:

Inicia sesion con tu cuenta autorizada de Sanity.
![Acceso al Studio](images/cms-login.png)



## 2) Modelos de contenido

### Team Member (Miembro del Equipo)

Campos principales:

- `name` (string, obligatorio)
- `slug` (slug, obligatorio, autogenerado desde `name`)
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

- El color usa presets visuales y opcion hex personalizada.
- El frontend usa `slug` para el perfil (`/team/:slug`).

### Show (Evento / Recital)

Campos principales:

- `title` (string, obligatorio)
- `slug` (slug, obligatorio, autogenerado desde `title`)
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

- `soloistRefs` conecta canciones con miembros reales del equipo.
- En el frontend, cada solista se muestra como link a su perfil cuando existe `slug`.

## 3) Flujo editorial (sin codigo)

### Crear o editar miembro

1. Abre `Miembro del Equipo`.
2. Crea o edita el registro.
3. Sube foto en `image`.
4. Completa `name`, `role`, `instrument`, `bio`, color y redes.
5. Publica.

![Formulario Miembro del Equipo](images/cms-team-member-form.png)

### Crear o editar evento

1. Abre `Evento / Recital`.
2. Crea o edita el registro.
3. Completa datos generales (`title`, `date`, `venue`, `location`, horas).
4. Escribe la descripcion en markdown en `description`.
5. Sube imagen en `image`.
![Formulario principal de Evento](images/cms-show-form.png)

6. En `setlist`, agrega canciones y selecciona solistas en `soloistRefs`.

![Setlist con solistas referenciados](images/cms-show-setlist.png)

7. Publica.

![Publicacion del contenido](images/cms-publish-button.png)

### Eliminar contenido

- Abre el documento y usa `Delete`.
- Verifica antes que ese contenido no este enlazado desde paginas activas.

## 4) Relacion CMS -> Frontend

Mapeo principal:

- Team:
  - Lista: `src/pages/Team.tsx`
  - Destacados home: `src/pages/Home.tsx`
  - Detalle: `src/pages/SingerDetail.tsx`
- Shows:
  - Lista: `src/pages/Shows.tsx`
  - Detalle: `src/pages/ShowDetail.tsx`

Cliente y hooks:

- Cliente Sanity: `src/lib/sanity.ts`
- Hook miembros: `src/hooks/useTeamMembers.ts`
- Hook eventos: `src/hooks/useShows.ts`

Comportamientos clave:

- Las horas se muestran en formato AM/PM.
- Duracion del programa:
  - Si `estimatedDurationMinutes` existe, se usa ese valor.
  - Si no existe, se calcula desde `setlist` sumando 1 minuto extra por cancion.

## 5) API y variables de entorno

Variables necesarias en frontend:

- `VITE_SANITY_PROJECT_ID`
- `VITE_SANITY_DATASET`

Archivos:

- `.env` (local, no versionar)
- `.env.example` (plantilla para el equipo)

CORS en Sanity (produccion):

- Agregar dominios reales del sitio, por ejemplo:
  - `https://www.totalsingers.com`
  - `https://totalsingers.com`

## 6) Cambios de modelo (desarrolladores)

Si cambias schemas en `studio/schemaTypes/*`:

1. Valida el studio local.
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
