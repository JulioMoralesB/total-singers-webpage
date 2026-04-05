import {defineArrayMember, defineField, defineType} from 'sanity'

export const showType = defineType({
  name: 'show',
  title: 'Evento / Recital',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre del Evento',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Fecha',
      type: 'date',
      options: {dateFormat: 'YYYY-MM-DD'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'venue',
      title: 'Recinto / Sala',
      description: 'Nombre del recinto o sala (ej. Centro Cultural, Teatro Municipal)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Ubicación / Auditorio',
      description: 'Nombre del auditorio o área específica (ej. Auditorio Principal)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'locationUrl',
      title: 'Link de Ubicación',
      description: 'Opcional. URL de Google Maps u otro enlace para llegar al lugar.',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'description',
      title: 'Descripción del Evento',
      description: 'Texto que se muestra en la sección "Sobre el Evento".',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'eventTime',
      title: 'Hora del Evento',
      description: 'Formato 24h HH:mm (ej. 20:00).',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
          name: 'time',
          invert: false,
        }).error('Usa formato HH:mm, por ejemplo 20:00'),
    }),
    defineField({
      name: 'doorsOpenTime',
      title: 'Hora de Apertura de Puertas',
      description: 'Opcional. Formato 24h HH:mm (ej. 19:00).',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
          name: 'time',
          invert: false,
        }).error('Usa formato HH:mm, por ejemplo 19:00'),
    }),
    defineField({
      name: 'estimatedDurationMinutes',
      title: 'Duración Estimada (minutos)',
      description:
        'Opcional. Si se deja vacío, se calcula automáticamente desde el setlist (+1 minuto extra por canción).',
      type: 'number',
      validation: (Rule) => Rule.integer().positive(),
    }),
    defineField({
      name: 'image',
      title: 'Imagen del Evento',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'setlist',
      title: 'Setlist',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'track',
          title: 'Canción',
          fields: [
            defineField({
              name: 'number',
              title: 'Número',
              type: 'number',
              validation: (Rule) => Rule.required().integer().positive(),
            }),
            defineField({
              name: 'title',
              title: 'Título',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'artist',
              title: 'Artista Original',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'duration',
              title: 'Duración',
              description: 'Formato mm:ss (ej. 3:45)',
              type: 'string',
              validation: (Rule) =>
                Rule.required().regex(/^([0-9]|[1-9][0-9]):([0-5][0-9])$/, {
                  name: 'duration',
                  invert: false,
                }).error('Usa formato mm:ss, por ejemplo 3:45'),
            }),
            defineField({
              name: 'soloistRefs',
              title: 'Solistas (Equipo)',
              description: 'Selecciona miembros existentes del equipo.',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'reference',
                  to: [{type: 'teamMember'}],
                  options: {disableNew: true},
                }),
              ],
              validation: (Rule) => Rule.unique(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'artist',
              number: 'number',
            },
            prepare({title, subtitle, number}) {
              return {
                title: `${number}. ${title}`,
                subtitle,
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
      media: 'image',
    },
  },
})
